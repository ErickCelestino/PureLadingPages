import { Box, Typography, Button } from '@mui/material';
import { FC } from 'react';

interface SimpleHeroSectionProps {
  title?: string;
  subTitle?: string;
  buttonTitle?: string;
  buttonAction: () => void;
}

export const SimpleHeroSection: FC<SimpleHeroSectionProps> = ({
  title = 'Bem-vindo à Minha Empresa',
  subTitle = 'Oferecemos soluções incríveis para o seu negócio crescer.',
  buttonTitle = 'Saiba Mais',
  buttonAction,
}) => {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {subTitle}
      </Typography>
      <Button
        onClick={buttonAction}
        variant="contained"
        color="primary"
        size="large"
      >
        {buttonTitle}
      </Button>
    </Box>
  );
};
