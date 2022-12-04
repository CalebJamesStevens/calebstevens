import React from 'react';

/** MUI Components */
import { Typography, Box, Button, RadioGroup, FormLabel, FormControlLabel, Radio, FormControl } from '@mui/material';

/** Context */
import { QuizContext } from '../Quiz';

/** Styles */
import styles from './styles';

export const Question = ({ title, variant = 'singleChoice', options = [], answers = [], groupName }) => {
  const quiz = React.useContext(QuizContext);
  const rightAnswer = quiz?.submitted && quiz?.results[groupName].correct === true;

  if (variant === 'singleChoice') {
    return (
      <FormControl
        disabled={quiz.submitted}
        sx={styles.formControl}
      >
        <FormLabel
          sx={[quiz.submitted && rightAnswer ? styles.correct : quiz.submitted && styles.incorrect]}
          id={groupName + '-label'}
        >
          {title}
        </FormLabel>
        <RadioGroup
          aria-labelledby={groupName + '-label'}
          name={groupName}
        >
          {options
            ? options.map((option) => {
                const answerChosen = quiz?.results[groupName]?.answerChosen === option;
                const correctAnswer = answers.includes(option);
                return (
                  <FormControlLabel
                    key={option}
                    value={option}
                    sx={[
                      ...(quiz.submitted
                        ? [correctAnswer ? styles.correct : answerChosen ? styles.incorrect : []]
                        : []),
                      styles.formControlLabelContainer,
                    ]}
                    control={<Radio required={true} />}
                    label={
                      <Box sx={[quiz.submitted && correctAnswer && styles.correctAnswerLabel]}>
                        <Typography sx={styles.correctAnswerOptionText}>{option}</Typography>{' '}
                        {quiz.submitted && correctAnswer && (
                          <Typography sx={styles.correctAnswer}>correct answer</Typography>
                        )}
                      </Box>
                    }
                  />
                );
              })
            : null}
        </RadioGroup>
      </FormControl>
    );
  }
};

export default Question;
