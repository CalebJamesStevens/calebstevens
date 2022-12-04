import React from 'react';
import { render, screen, within } from 'react-testing-library';
import Question from '../Question/Question';
import Quiz from '../Quiz';

test('Can select questions and submit quiz', async () => {
  const { user } = render(
    <Quiz title={'Test Quiz'}>
      <Question
        groupName={'firstQuestion'}
        title={'First Question'}
        options={['Choice A', 'Choice B']}
        answers={['Choice A']}
      />
      <Question
        groupName={'secondQuestion'}
        title={'Second Question'}
        options={['Choice A', 'Choice B']}
        answers={['Choice B']}
      />
    </Quiz>,
  );

  const questionOne = screen.getByRole('radiogroup', { name: 'First Question' });
  const questionTwo = screen.getByRole('radiogroup', { name: 'Second Question' });
  const submitButton = screen.getByRole('button', { name: 'Check Answers' });

  const questionOneChoiceA = within(questionOne).getByRole('radio', { name: 'Choice A' });
  const questionOneChoiceB = within(questionOne).getByRole('radio', { name: 'Choice B' });
  const questionTwoChoiceA = within(questionTwo).getByRole('radio', { name: 'Choice A' });
  const questionTwoChoiceB = within(questionTwo).getByRole('radio', { name: 'Choice B' });

  await user.click(questionOneChoiceA);
  await user.click(questionTwoChoiceA);
  await user.click(submitButton);

  expect(questionOneChoiceA).toHaveAccessibleName('Choice A correct answer');
  expect(questionOneChoiceB).toHaveAccessibleName('Choice B');
  expect(questionTwoChoiceA).toHaveAccessibleName('Choice A');
  expect(questionTwoChoiceB).toHaveAccessibleName('Choice B correct answer');
  expect(questionOneChoiceA).toBeDisabled();
  expect(questionOneChoiceB).toBeDisabled();
  expect(questionTwoChoiceA).toBeDisabled();
  expect(questionTwoChoiceB).toBeDisabled();
  expect(submitButton).toBeDisabled();
});
