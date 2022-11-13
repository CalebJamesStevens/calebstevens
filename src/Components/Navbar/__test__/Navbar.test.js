import React from 'react';
import { render, screen } from 'react-testing-library';
import Navbar from '../Navbar';

test('Navigation works correctly', async () => {
  const { user } = render(<Navbar />);

  const homeButton = screen.getByRole('button', { name: 'Home' });
  const blogButton = screen.getByRole('button', { name: 'Blog' });
  const careerButton = screen.getByRole('button', { name: 'Career' });
  const resumeButton = screen.getByRole('button', { name: 'Resume' });
  await user.click(blogButton);
  expect(window.location.pathname).toEqual('/blog');
  await user.click(careerButton);
  expect(window.location.pathname).toEqual('/career');
  await user.click(resumeButton);
  expect(window.location.pathname).toEqual('/resume');
  await user.click(homeButton);
  expect(window.location.pathname).toEqual('/');
});
