import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';

interface BaseLandingPageLayoutProps {
  header: ReactNode;
  footer: ReactNode;
  heroSection: ReactNode;
  callToAttention: ReactNode;
  about?: ReactNode;
  testimonials?: ReactNode;
  features?: ReactNode;
}

export const BaseLadingPageLayout: FC<BaseLandingPageLayoutProps> = ({
  header,
  footer,
  callToAttention,
  heroSection,
  about,
  features,
  testimonials,
}) => {
  return (
    <Box>
      {header}
      <Container maxWidth="lg">
        {heroSection}
        {about && about}
        {features && features}
        {testimonials && testimonials}
        {callToAttention}
      </Container>
      {footer}
    </Box>
  );
};
