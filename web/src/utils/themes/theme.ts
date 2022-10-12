export interface ThemeProps {
  background: string;
  text: string;
  body: string;
  toggleBorder: string;
}

export const lightTheme: ThemeProps = {
  body: '#ffffff',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#1e1e1e',
};
export const darkTheme: ThemeProps = {
  body: '#1e1e1e',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#1e1e1e',
};
