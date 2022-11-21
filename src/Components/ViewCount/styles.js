export default {
  text: {
    '&.MuiTypography-root': {
      display: 'flex',
      gap: (theme) => theme.spacing(1),
      padding: (theme) => theme.spacing(1),
      alignItems: 'center',
    },
  },
  circularProgress: {
    '&.MuiCircularProgress-root': {
      width: '20px !important',
      height: '20px !important',
    },
  },
};
