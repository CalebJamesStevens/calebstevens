import React from 'react';

/** MUI Components */
import { theme } from '../src/mui.theme';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
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
import Head from 'next/head';

const styles = {
  componentContainer: (theme) => ({
    flex: '1',
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
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Caleb Stevens</title>
        <meta
          name={'description'}
          content={
            'Calebstevens.dev is a blog and portfolio site written by Caleb Stevens about front end web development, design, javascript, and other technologies. The blog provides tutorials and resources for HTML, CSS, ReactJS, NodeJS, Express, NextJS and other technologies that form the world of Front End Web Development.'
          }
        />
        <meta
          name="author"
          content="Caleb Stevens"
        />
        <meta
          name={'keywords'}
          content={
            'React, CSS, HTML, Web Devlopment, Front End, Junior Web Developer, Software Engineering, React, JavaScript, Node, NexJS, ExpressJS'
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </Head>
      <Box sx={styles.appContainer}>
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
      </Box>
    </ThemeProvider>
  );
}
