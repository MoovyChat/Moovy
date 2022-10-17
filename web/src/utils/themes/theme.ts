export interface ThemeProps {
  background: string;
  text: string;
  body: string;
  toggleBorder: string;
}

export const lightTheme: ThemeProps = {
  body: 'linear-gradient(#0055ff, #ffffff)',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#ffffff',
};
export const darkTheme: ThemeProps = {
  body: 'linear-gradient(#1e13e9, #000)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#000000',
};
