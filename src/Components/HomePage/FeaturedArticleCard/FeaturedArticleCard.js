import React from 'react';

/** MUI Components */
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/** NextJs Components */
import Link from 'next/link';

/** Icons */
import { LinkRounded } from '@mui/icons-material';

/** Styles */
import styles from './styles';

export const ProjectCard = ({ slug, children }) => {
  return (
    <Grid
      item
      xs={12}
      sx={styles.article}
    >
      <Box
        sx={styles.article.titleLink}
        href={'/blog/' + slug}
        component={Link}
      >
        <Typography
          sx={styles.article.title}
          variant="h4"
        >
          {children}
        </Typography>
      </Box>
      <Box sx={styles.article.articleActions}>
        <IconButton
          onClick={() => {
            window.navigator.clipboard.writeText('https://calebstevens.dev/blog/' + slug);
          }}
          sx={styles.article.linkIcon}
        >
          <LinkRounded />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
