import React from 'react';

import { render as rtlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { theme } from './mui.theme.js';
import { ThemeProvider } from '@mui/material/styles';

export * from '@testing-library/react';

export const render = (ui, { ...renderOptions } = {}) => {
  const Container = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, {
      wrapper: Container,
      ...renderOptions,
    }),
  };
};
