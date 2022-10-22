import { darkTheme, lightTheme } from '../../utils/themes/theme';

import { GlobalStyles } from '../../utils/themes/globalStyles';
import Header from '../header/header';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Welcome from '../welcome/welcome';
import { themes } from '../../constants';
import { useAppSelector } from '../../redux/hooks';

const App = () => {
  const theme = useAppSelector((state) => state.settings.theme);
  return (
    <ThemeProvider theme={theme === themes.DARK ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header />
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
