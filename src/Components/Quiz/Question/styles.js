export const styles = {
  correct: {
    '& .MuiTypography-root, &.MuiFormLabel-root': {
      color: (theme) => theme.palette.success.main,
    },
  },
  incorrect: {
    '& .MuiTypography-root, &.MuiFormLabel-root': {
      color: (theme) => theme.palette.error.main,
    },
  },
  correctAnswerLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  correctAnswer: {
    marginLeft: (theme) => theme.spacing(1),
    fontSize: '.8rem',
    textTransform: 'uppercase',
  },
  formControl: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: (theme) => theme.spacing(2),
  },
  formControlLabelContainer: {
    marginLeft: 0,
    transition: '250ms',
    outline: '1px solid',
    outlineColor: (theme) => theme.palette.primary.light,
    borderRadius: '4px',
    marginTop: (theme) => theme.spacing(1.25),
    '&:has(.Mui-checked)': {
      outline: '4px solid',
      outlineColor: (theme) => theme.palette.primary.light,
      scale: '1.015',
    },
  },
};

export default styles;
