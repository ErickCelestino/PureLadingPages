import React, { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface SimpleCtaProps {
  title?: string;
  subTitle?: string;
  buttonTitle?: string;
  backgroundColor?: string;
  color?: string;
}

export const SimpleCallToAttention: FC<SimpleCtaProps> = ({
  title = 'Pronto para começar?',
  subTitle = 'Entre em contato conosco e transforme seu negócio hoje mesmo!',
  buttonTitle = 'Contate-nos',
  backgroundColor = '#1976d2',
  color = '#fff',
}) => {
  return (
    <Box
      id="call-to-attention"
      sx={{
        my: 8,
        textAlign: 'center',
        backgroundColor: backgroundColor,
        color: color,
        p: 6,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {subTitle}
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        {buttonTitle}
      </Button>
    </Box>
  );
};
