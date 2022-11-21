export const styles = {
  article: {
    marginTop: (theme) => theme.spacing(2),
    borderBlock: '1px white solid',
    transition: '250ms',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    articleActions: {
      display: 'flex',
      alignItems: 'center',
    },
    actionsDivider: {
      height: '30px',
      width: '4px',
      borderColor: 'white',
    },
    linkIcon: {
      rotate: '45deg',
      transition: '250ms',
      ':hover': {
        cursor: 'pointer',
        scale: '1.1',
      },
    },
    ':hover': {
      scale: '1.01',
    },
    titleLink: {
      all: 'unset',
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      transition: '250ms',
      '&.MuiTypography-root': {
        fontSize: '1.3rem',
        fontWeight: '400',
        width: 'fit-content',
      },
      ':after': {
        transition: '250ms',
        content: '""',
        display: 'block',
        width: '0%',
        transform: 'translate(0px, -2px)',
        borderBottom: '1px white solid',
      },
      ':hover': {
        cursor: 'pointer',
        fontSize: '1.31rem',
        ':after': {
          width: '100%',
        },
      },
    },
  },
  sectionHeading: {
    marginBlock: (theme) => theme.spacing(2),
  },
};

export default styles;
