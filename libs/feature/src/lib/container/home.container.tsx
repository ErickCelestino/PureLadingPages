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
} from '../components';

export const HomeContainer = () => {
  return (
    <Box>
      <BaseLadingPageLayout
        header={
          <SimpleHeader
            listButtons={[
              {
                title: 'Home',
                to: () => {
                  console.log('Home');
                },
              },
            ]}
          />
        }
        heroSection={
          <SimpleHeroSection
            buttonAction={() => {
              console.log('Ação');
            }}
          />
        }
        callToAttention={<SimpleCallToAttention />}
        footer={
          <SimpleFooter
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
      />
    </Box>
  );
};
