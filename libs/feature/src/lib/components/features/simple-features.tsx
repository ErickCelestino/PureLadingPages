import { FC } from 'react';
import { Box, Typography, Grid2 } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Feature } from '@pure-lading-pages/domain';

interface SimpleFeaturesProps {
  listFeatures: Feature[];
  title?: string;
}

export const SimpleFeatures: FC<SimpleFeaturesProps> = ({
  listFeatures,
  title = 'Nossas Características',
}) => {
  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Grid2 container spacing={4}>
        {listFeatures.map((feature, index) => (
          <Grid2
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CheckCircle color="primary" sx={{ mr: 2 }} />
            <Box>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
