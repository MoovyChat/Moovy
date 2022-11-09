import { ThemeProps } from './theme';
import { createGlobalStyle } from 'styled-components';

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`
  body{
    transition: all 0.50s linear;
  }
`;
