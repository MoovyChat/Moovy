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

  div a {
  color: #0e4fdb;
  text-decoration: underline;
  font-size: 14px;
}
  /* Style for visited links */
  a:visited {
    color: purple;
  }

  /* Style for hover state */
  a:hover {
    color: #00ffe5;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    -webkit-box-shadow: inset 0 0 6px ${(p) => p.theme.hoverColor};
    box-shadow: inset 0 0 6px ${(p) => p.theme.hoverColor};
    background-color: #555;
  }
`;
