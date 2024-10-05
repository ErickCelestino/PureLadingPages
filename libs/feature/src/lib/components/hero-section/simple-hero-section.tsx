import { Box, Typography, Button } from '@mui/material';
import { FC } from 'react';

interface SimpleHeroSectionProps {
  title?: string;
  subTitle?: string;
  buttonTitle?: string;
  backgroundColor?: string;
  color?: string;
  imageBackground?: string;
  buttonAction: () => void;
}

export const SimpleHeroSection: FC<SimpleHeroSectionProps> = ({
  title = 'Bem-vindo à Minha Empresa',
  subTitle = 'Oferecemos soluções incríveis para o seu negócio crescer.',
  buttonTitle = 'Saiba Mais',
  backgroundColor = '#f5f5f5',
  color,
  imageBackground,
  buttonAction,
}) => {
  return (
    <Box
      sx={{
        height: '70vh',
        backgroundImage: imageBackground,
        backgroundSize: 'cover',
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: backgroundColor,
        color: color,
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
