import React from 'react';
import { render, screen } from 'react-testing-library';
import Navbar from '../Navbar';

import mediaQuery from 'css-mediaquery';

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: () => {},
    removeListener: () => {},
  });
}

test('Navigation works correctly', async () => {
  window.innerWidth = 500;
  window.matchMedia = createMatchMedia(window.innerWidth);
  const { user } = render(<Navbar />);

  const openDrawerButton = screen.getByRole('button', { name: 'Open Navigation Menu' });
  expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  await user.click(openDrawerButton);
  const navigationMenu = screen.getByRole('navigation');
});

test('Navigation works correctly', async () => {
  window.innerWidth = 700;
  window.matchMedia = createMatchMedia(window.innerWidth);
  render(<Navbar />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
