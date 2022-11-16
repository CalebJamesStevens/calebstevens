export const styles = {
  icon: {
    height: '100%',
    width: '100%',
  },
  iconContainer: {
    margin: (theme) => theme.spacing(1),
    padding: (theme) => theme.spacing(2),
    height: '150px',
    borderRadius: '10px',
    background: (theme) => theme.palette.primary.main,
  },
  cardContainer: {
    boxShadow: (theme) =>
      `4px 2px 0px 0px ${theme.palette.secondary.main}, 0px 0px 1px 1px ${theme.palette.primary.main}, 7px 5px 0px 2px ${theme.palette.primary.main}`,
    ':hover': {
      boxShadow: (theme) =>
        `6px 6px 1px 1px ${theme.palette.secondary.main}, 0px 0px 3px 2px ${theme.palette.primary.main}, 9px 11px 2px 4px ${theme.palette.primary.main}`,
    },
    borderRadius: '10px',
    backgroundColor: (theme) => theme.palette.background.main,
    '& .MuiCardHeader-root': {
      paddingBlock: 0,
      '& .MuiTypography-root': {
        fontWeight: '600',
        //color: (theme) => theme.palette.secondary.main,
      },
    },
    '& .MuiCardContent-root': {
      paddingTop: (theme) => theme.spacing(1),
    },
    '& .MuiCardActions-root': {
      '& .MuiButton-root': {
        width: '100%',
        gap: (theme) => theme.spacing(1),
      },
    },
  },
};

export default styles;
