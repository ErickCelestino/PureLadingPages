import { FC } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { IconButtons } from '@pure-lading-pages/domain';

interface SimpleFooterProps {
  title?: string;
  copyrightText?: string;
  icons: IconButtons[];
}

export const SimpleFooter: FC<SimpleFooterProps> = ({
  title = 'Minha Empresa',
  copyrightText = 'Todos os direitos reservados.',
  icons,
}) => {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">
        © {new Date().getFullYear()} {copyrightText}
      </Typography>
      <Box sx={{ mt: 2 }}>
        {icons.map((icon) => (
          <IconButton href={icon.to} color="inherit">
            {icon.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
