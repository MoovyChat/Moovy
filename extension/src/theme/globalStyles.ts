import { ThemeProps } from './theme';
import { createGlobalStyle } from 'styled-components';

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: GlobalThemeProps) => theme.body};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;
