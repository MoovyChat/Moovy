export interface ThemeProps {
  background: string;
  text: string;
  body: string;
  toggleBorder: string;
  movieHeader?: string;
  trendingTiles?: string;
  hoverColor?: string;
  mention?: string;
  themeType?: string;
  premium?: string;
  border?: string;
  nav?: string;
  loadingCard?: string;
}

export const lightTheme: ThemeProps = {
  body: 'linear-gradient(86deg, rgb(174 233 255) 0%, rgb(255 255 255 / 68%) 100%);',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#ffffff',
};
export const darkTheme: ThemeProps = {
  body: 'linear-gradient(86deg, #0f1130 0%, black 100%);',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#000000',
};

export const lightThemeForHome: ThemeProps = {
  body: 'linear-gradient(86deg, rgb(174 233 255) 0%, rgb(255 255 255 / 68%) 100%);',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: 'linear-gradient(to right, #1f86e1, #c9f8fe, #78caf0)',
  movieHeader: 'linear-gradient(to right, #e11f1f, #e3c9fe, #f07878)',
  trendingTiles: '#c9eaff',
  hoverColor: '#1f86e1',
  mention: '#1d7cf0',
  nav: '#0088ff',
  border: '#1f86e1',
  loadingCard: '#d0d0d0',
  premium: 'linear-gradient(45deg, #58e6f3, #1da3f0) border-box',
  themeType: 'light',
};
export const darkThemeForHome: ThemeProps = {
  body: 'linear-gradient(86deg, #0f1130 0%, black 100%);',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  movieHeader: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  trendingTiles: '#0c0c0c',
  hoverColor: '#451374',
  nav: 'rgb(131 0 255)',
  mention: '#00ff99',
  border: '#f00f0f',
  loadingCard: '#444',
  premium: 'linear-gradient(45deg, #be3944, #681515) border-box',
  themeType: 'dark',
};
