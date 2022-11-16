import React from 'react';

/** MUI Components */
import { theme } from '../src/mui.theme';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

/** Components */
import Navbar from 'Navbar';

/** Icons */
import Book from '@mui/icons-material/Book';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

/** Next Components */
import Link from 'next/link';

const styles = {
  componentContainer: (theme) => ({
    [theme.breakpoints.up('xs')]: {
      maxWidth: '750px',
    },
    marginTop: (theme) => theme.spacing(4),
  }),
  footerDivider: {
    marginBlock: (theme) => theme.spacing(12, 2),
    marginInline: (theme) => theme.spacing(4),
  },
  footer: {
    textAlign: 'center',
    padding: (theme) => theme.spacing(8),
    gridContainer: {
      '&.MuiGrid-root': {
        justifyContent: 'center',
        columnGap: (theme) => theme.spacing(4),

        '& .MuiButton-root': {
          gap: (theme) => theme.spacing(1),
        },
      },
    },
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container sx={styles.componentContainer}>
        <Component {...pageProps} />
      </Container>
      <Divider sx={styles.footerDivider} />
      <Container
        sx={styles.footer}
        component={'footer'}
      >
        <Grid
          container
          sx={styles.footer.gridContainer}
        >
          <Grid item>
            <Button
              href={'https://www.linkedin.com/in/calebjstevens/'}
              variant={'text'}
            >
              <LinkedIn />
              LinkedIn
            </Button>
          </Grid>
          <Grid item>
            <Button
              href={'https://github.com/CalebJamesStevens'}
              variant={'text'}
            >
              <GitHub />
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button
              component={Link}
              href={'/blog'}
              variant={'text'}
            >
              <Book />
              Blog
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
