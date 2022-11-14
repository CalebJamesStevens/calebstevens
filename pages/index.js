import React from 'react';

/** MUI Components */
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const styles = {
  bioHeadingGroup: {
    maxWidth: '500px',
  },
  bioHeading: {
    marginBottom: (theme) => theme.spacing(-1),
  },
  bioSubheading: {
    fontSize: '1rem',
    fontWeight: '600',
  },
  bioDescription: {
    fontWeight: '400',
    marginTop: (theme) => theme.spacing(2),
    color: (theme) => theme.palette.secondary.main,
  },
};

export const HomePage = () => {
  return (
    <Box>
      <Box
        sx={styles.bioHeadingGroup}
        component={'hgroup'}
      >
        <Typography
          sx={styles.bioHeading}
          variant={'h1'}
        >
          Caleb Stevens
        </Typography>
        <Typography
          sx={styles.bioSubheading}
          variant={'h2'}
        >
          Front End Web Developer
        </Typography>
        <Typography sx={styles.bioDescription}>
          Passion for accessibility, efficiency, and innovation. I believe in making things work for everyone.
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={styles.skillIconsHeader}
          variant="h3"
        >
          Current Tech Stack
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
