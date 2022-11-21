import React from 'react';

/** MUI Components */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/** Components */
import ProjectCard from '../src/Components/HomePage/ProjectCard/ProjectCard';
import FeaturedArticleCard from 'FeaturedArticleCard';

/** Icon */
import CodeplateIcon from '../public/codeplate-icon.svg';

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
  featuredArticles: {
    marginBlock: (theme) => theme.spacing(8),
    temporaryMessage: {
      width: '100%',
      textAlign: 'center',
      marginTop: (theme) => theme.spacing(8),
      color: (theme) => theme.palette.secondary.main,
      fontSize: '1.2rem',
    },
  },
  projects: {
    gridContainer: {
      marginTop: (theme) => theme.spacing(4),
    },
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
      <Box sx={styles.featuredArticles}>
        <Typography variant="h3">Featured Articles</Typography>
        <Grid container>
          <FeaturedArticleCard slug={'what-i-learned-in-the-first-six-months-as-a-junior-developer-1'}>
            First Six Month As A Junior: Learn How To Learn
          </FeaturedArticleCard>
        </Grid>
      </Box>
      <Box sx={styles.projects}>
        <Typography variant="h3">Some of My Projects</Typography>
        <Grid
          sx={styles.projects.gridContainer}
          container
        >
          <ProjectCard
            icon={CodeplateIcon}
            heading={'Codeplate'}
            githubLink={'https://github.com/CalebJamesStevens/codeplate'}
          >
            <Typography>A lightweight but powerful template generator.</Typography>
          </ProjectCard>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
