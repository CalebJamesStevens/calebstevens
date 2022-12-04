import React from 'react';

/** MUI Components */
import { Typography, Box, Button, RadioGroup, FormLabel, FormControlLabel, Radio, FormControl } from '@mui/material';

/** Styles */
import styles from './styles';

export const QuizContext = React.createContext(null);

export const Quiz = ({ title, children }) => {
  const [answers, setAnswers] = React.useState(children?.map((child) => child?.props?.answers));
  const [results, setResults] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <Box
      sx={styles.quizContainer}
      component={'form'}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setResults(
          [...data?.entries()]?.reduce((results, answer, index) => {
            results[answer[0]] = { correct: answer[1] === answers[index][0], answerChosen: answer[1] };
            return results;
          }, {}),
        );
        setSubmitted(true);
      }}
    >
      <Typography variant="h2">{title}</Typography>
      <QuizContext.Provider value={{ results, submitted }}>{children ? children : null}</QuizContext.Provider>
      <Button
        sx={styles.submitButton}
        variant="contained"
        type="submit"
        disabled={submitted}
      >
        Check Answers
      </Button>
    </Box>
  );
};

export default Quiz;
