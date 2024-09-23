import { Box } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import { BaseLadingPageLayout } from '../layout';
import {
  SimpleAbout,
  SimpleCallToAttention,
  SimpleFeatures,
  SimpleFooter,
  SimpleHeader,
  SimpleHeroSection,
  SimpleTestimonials,
} from '../components';

export const HomeContainer = () => {
  return (
    <Box>
      <BaseLadingPageLayout
        header={
          <SimpleHeader
            title="Pure Pages"
            listButtons={[
              {
                title: 'Inicio',
                to: () => {
                  document
                    .getElementById('home')
                    ?.scrollIntoView({ behavior: 'smooth' });
                },
              },
              {
                title: 'Sobre nós',
                to: () => {
                  document
                    .getElementById('about')
                    ?.scrollIntoView({ behavior: 'smooth' });
                },
              },
              {
                title: 'Contate-nos',
                to: () => {
                  document
                    .getElementById('call-to-attention')
                    ?.scrollIntoView({ behavior: 'smooth' });
                },
              },
            ]}
          />
        }
        heroSection={
          <SimpleHeroSection
            title="Bem-vindo à Pure Pages"
            buttonAction={() => {
              console.log('Ação');
            }}
          />
        }
        callToAttention={<SimpleCallToAttention />}
        footer={
          <SimpleFooter
            title="Pure Pages"
            icons={[
              {
                icon: <Facebook />,
                to: 'face',
              },
            ]}
          />
        }
        about={<SimpleAbout />}
        features={
          <SimpleFeatures
            listFeatures={[
              {
                title: 'Qualidade',
                description:
                  'Produtos de alta qualidade que atendem às suas necessidades.',
              },
            ]}
          />
        }
        testimonials={
          <SimpleTestimonials
            listTestimonials={[
              {
                name: 'Maria Silva',
                feedback:
                  'Excelente serviço! Minha empresa cresceu muito desde que começamos a trabalhar juntos.',
                avatar: 'https://i.pravatar.cc/150?img=1',
              },
            ]}
          />
        }
      />
    </Box>
  );
};
