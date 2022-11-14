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
    background: {
      default: '#002029',
      main: '#00303D',
    },
  },
});
