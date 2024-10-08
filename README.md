name: Deploy to ECS

on:
push:
branches: ['main', 'dev']
pull_request:
branches: ['main']
workflow_dispatch:

jobs:
deploy_to_ecs:
runs-on: ubuntu-latest
environment: production

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Fetch all branches
        run: git fetch origin

      - name: Ensure main branch exists
        run: |
          if git show-ref --verify --quiet refs/heads/main; then
            echo "Branch main exists locally"
          else
            echo "Branch main doesn't exist locally. Creating it."
            git checkout -b main origin/main
          fi

      - name: Checkout main branch
        run: git checkout main

      - name: Pull latest changes from main
        run: git pull origin main

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install --legacy-peer-deps

      - name: Determine affected projects
        id: affected
        run: |
          echo "Running Nx command..."
          npx nx reset
          npx nx show projects --affected --type=app --base=dev --head=HEAD --verbose > affected.txt
          echo "Nx command completed with exit code $?"
          cat affected.txt

      - name: Check for affected projects
        run: |
          if [ ! -s affected.txt ]; then
            echo "Nenhum projeto afetado foi encontrado. Falhando o job."
            exit 1
          fi

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build, tag, and push images for affected projects
        if: success()
        run: |
          # Defina o repositório único no ECR
          ECR_REGISTRY="${{ steps.login-ecr.outputs.registry }}"
          ECR_REPOSITORY="${{ secrets.ECR_REPOSITORY }}"  # Nome fixo do repositório ECR
          IMAGE_TAG="${{ github.sha }}"  # Use o SHA do commit como tag para garantir unicidade

          # Para cada app, construa e faça o push da imagem
          while IFS= read -r app; do
            echo "Building and pushing Docker image for project: $app"

            # Construa a imagem usando o Dockerfile específico do app
            docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$app-$IMAGE_TAG -f ./configs/docker/Dockerfile.$app .

            # Empurre a imagem para o repositório ECR
            docker push $ECR_REGISTRY/$ECR_REPOSITORY:$app-$IMAGE_TAG

            # Defina a variável de ambiente com o nome da imagem para uso posterior
            echo "image=$ECR_REGISTRY/$ECR_REPOSITORY:$app-$IMAGE_TAG" >> $GITHUB_ENV
          done < affected.txt

      - name: Download task definition
        if: success()
        run: |
          aws ecs describe-task-definition --task-definition ${{ secrets.ECS_TASK_DEFINITION_NAME }} --query taskDefinition > task-definition.json

      - name: Clean task definition
        if: success()
        run: |
          jq 'del(.taskDefinitionArn, .revision, .status, .requiresAttributes, .compatibilities, .registeredAt, .registeredBy)' task-definition.json > task-def-clean.json

      - name: Fill in the new image ID in the Amazon ECS task definition
        id: task-def
        if: success()
        uses: aws-actions/amazon-ecs-render-task-definition@v1
        with:
          task-definition: task-definition.json
          container-name: ${{ secrets.CONTAINER_NAME }}
          image: ${{ env.image }}

      - name: Deploy Amazon ECS task definition
        if: success()
        uses: aws-actions/amazon-ecs-deploy-task-definition@v2
        with:
          task-definition: ${{ steps.task-def.outputs.task-definition }}
          service: ${{ secrets.ECS_SERVICE }}
          cluster: ${{ secrets.ECS_CLUSTER }}
          wait-for-service-stability: true
