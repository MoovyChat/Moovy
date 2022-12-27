import { Fonts } from '../../constants';
import { ThemeProps } from './theme';
import { createGlobalStyle } from 'styled-components';

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: GlobalThemeProps) => theme.body};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    transition: all 0.50s linear;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;
