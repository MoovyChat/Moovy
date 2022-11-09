export interface ThemeProps {
  background: string;
  chatText: string;
  chatBody: string;
  toggleBorder: string;
}

export const lightTheme: ThemeProps = {
  chatBody: '#ffffff',
  chatText: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#1e1e1e',
};
export const darkTheme: ThemeProps = {
  chatBody: '#1e1e1e',
  chatText: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#1e1e1e',
};
