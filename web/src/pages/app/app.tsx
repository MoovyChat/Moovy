import { darkTheme, lightTheme } from '../../utils/themes/theme';

import { AppParent } from './app.styles';
import { GlobalStyles } from '../../utils/themes/globalStyles';
import Home from '../home/home';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../../constants';
import { useAppSelector } from '../../redux/hooks';

const App = () => {
  const theme = useAppSelector((state) => state.settings.theme);
  return (
    <ThemeProvider theme={theme === themes.LIGHT ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppParent>
        <Home />
      </AppParent>
    </ThemeProvider>
  );
};

export default App;
