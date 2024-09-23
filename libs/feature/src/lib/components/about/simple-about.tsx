import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface SimpleAboutProps {
  title?: string;
  subTitle?: string;
}

export const SimpleAbout: FC<SimpleAboutProps> = ({
  title = 'Sobre Nós',
  subTitle = 'Somos uma empresa dedicada a fornecer as melhores soluções para nossos clientes. Com anos de experiência no mercado, garantimos qualidade e satisfação.',
}) => {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
};
