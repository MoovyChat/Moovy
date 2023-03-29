import { CURRENT_DOMAIN, themes } from '../../constants';
import { darkTheme, lightTheme } from '../../utils/themes/theme';

import { GlobalStyles } from '../../utils/themes/globalStyles';
import Header from '../header/header';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Welcome from '../welcome/welcome';
import { useAppSelector } from '../../redux/hooks';

const App = () => {
  const theme = useAppSelector((state) => state.settings.theme);
  return (
    <ThemeProvider theme={theme === themes.DARK ? darkTheme : lightTheme}>
      <Helmet>
        <title>Moovy: Welcome</title>
        <meta name='description' content='Welcome' />
        <link rel='canonical' href={`${CURRENT_DOMAIN}`} />
      </Helmet>
      <GlobalStyles />
      <Header />
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
