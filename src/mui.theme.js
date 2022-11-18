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
      main: '#00607A',
    },
    secondary: {
      main: '#faebd7',
    },
    background: {
      default: '#002029',
      light: '#004052',
      main: '#00303D',
    },
  },
});

theme.typography = {
  ...theme.typography,
  fontSize: '1.2rem',
  h1: {
    letterSpacing: '-.025em',
    '@media (min-width:600px)': {
      fontSize: '1.875rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },
  h2: {
    letterSpacing: '-.025em',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
  },
  h3: {
    fontWeight: '700',
    letterSpacing: '-.025em',
    fontSize: '1.5rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.25rem',
    },
    lineHeight: '2.5rem',
  },
};
