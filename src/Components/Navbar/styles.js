export const styles = {
  navList: {
    maxWidth: 'fit-content',
    marginInline: 'auto',
    marginTop: (theme) => theme.spacing(2),
    display: 'flex',
    '& a': {
      all: 'unset',
    },
    '& .MuiListItem-root': {
      '& .MuiButtonBase-root': {
        fontWeight: '700',
        justifyContent: 'center',
      },
    },
  },
  drawer: {
    '& .MuiPaper-root': {
      backgroundColor: (theme) => theme.palette.background.main,
    },
  },
  drawerNavList: {
    padding: 0,
    '& a': {
      all: 'unset',
      width: '100%',
    },
    '& .MuiListItem-root': {
      padding: 0,
      '& .MuiButtonBase-root': {
        padding: (theme) => theme.spacing(2, 4),
        fontWeight: '700',
      },
    },
  },
  mobileNavBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: (theme) => theme.spacing(2),
  },
  closeDrawerButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default styles;
