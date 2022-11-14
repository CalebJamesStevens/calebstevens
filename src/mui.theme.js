import { createTheme } from '@mui/material/styles';

// Dark to light color palettev
//https://coolors.co/002029-00303d-004052-005066-00607a
// 002029
// 00303D
// 004052
// 005066
// 00607A

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#037ffc',
    },
    secondary: {
      main: '#faebd7',
    },
    background: {
      default: '#002029',
      main: '#00303D',
    },
  },
});

theme.typography = {
  ...theme.typography,
  fontSize: '1.2rem',
  h1: {
    '@media (min-width:600px)': {
      fontSize: '1.875rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
};
