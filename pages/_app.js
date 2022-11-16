import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../src/mui.theme';
import Navbar from 'Navbar';
import { Container } from '@mui/material';

const styles = {
  componentContainer: {
    maxWidth: '750px',
    marginTop: (theme) => theme.spacing(4),
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
    </ThemeProvider>
  );
}
