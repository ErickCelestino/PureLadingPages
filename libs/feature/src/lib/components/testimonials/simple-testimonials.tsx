import { Box, Typography, Avatar, Grid2 } from '@mui/material';
import { Testimonial } from '@pure-lading-pages/domain';
import { FC } from 'react';

interface SimpleTestimonialsProps {
  listTestimonials: Testimonial[];
  title?: string;
  backgroundColor?: string;
}

export const SimpleTestimonials: FC<SimpleTestimonialsProps> = ({
  listTestimonials,
  title = 'Depoimentos',
  backgroundColor = '#f5f5f5',
}) => {
  return (
    <Box
      sx={{ my: 8, backgroundColor: backgroundColor, p: 4, borderRadius: 2 }}
    >
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Grid2 container spacing={4}>
        {listTestimonials.map((testimonial, index) => (
          <Grid2 key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar src={testimonial.avatar} sx={{ mx: 'auto', mb: 2 }} />
              <Typography variant="h6">{testimonial.name}</Typography>
              <Typography variant="body2">"{testimonial.feedback}"</Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
