import React from 'react';

/** MUI Components */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

/** Icons */
import GitHub from '@mui/icons-material/GitHub';

/** Styles */
import styles from './styles';


export const ProjectCard = ({ icon, heading, children, githubLink }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
    >
      <Card sx={styles.cardContainer}>
        <Box sx={styles.iconContainer}>
          <SvgIcon
            component={icon}
            inheritViewBox
            style={styles.icon}
          />
        </Box>
        <CardHeader title={heading} />
        <CardContent sx={styles.cardContent}>{children}</CardContent>
        <CardActions>
          <Button
            variant={'contained'}
            sx={styles.githubButton}
            href={githubLink}
            target={'_blank'}
          >
            <GitHub />
            <Typography>GitHub</Typography>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
