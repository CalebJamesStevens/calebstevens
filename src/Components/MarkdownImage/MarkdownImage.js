import React from 'react';
import Box from '@mui/material/Box';

const styles = {
  image: {
    display: 'block',
    width: '100%',
    maxWidth: '100%',
    maxHeight: {
      xs: '340px',
      sm: '520px',
    },
    marginInline: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.16)',
    backgroundColor: '#00121a',
  },
};

export default function MarkdownImage({ alt, ...props }) {
  return (
    <Box
      component="img"
      alt={alt || ''}
      loading="lazy"
      sx={styles.image}
      {...props}
    />
  );
}
