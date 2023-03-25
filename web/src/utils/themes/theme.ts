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
}

export const lightTheme: ThemeProps = {
  body: 'linear-gradient(180deg, #2c94ab 30%, #0e756b 70%);',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#ffffff',
};
export const darkTheme: ThemeProps = {
  body: 'linear-gradient(180deg, #750e0e 10%,#0a0a0a 30%,#000000 55%, #0e756b 70%);',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#000000',
};

export const lightThemeForHome: ThemeProps = {
  body: '#F3F3F3',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: 'linear-gradient(to right, #1f86e1, #c9f8fe, #78caf0)',
  movieHeader: 'linear-gradient(to right, #e11f1f, #e3c9fe, #f07878)',
  trendingTiles: '#a0d2eb',
  hoverColor: '#a0d2eb',
  mention: '#1da3f0',
  nav: '#00a2ff',
  border: '#1f86e1',
  premium: 'linear-gradient(45deg, #58e6f3, #1da3f0) border-box',
  themeType: 'light',
};
export const darkThemeForHome: ThemeProps = {
  body: 'black',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  movieHeader: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  trendingTiles: '#0c0c0c',
  hoverColor: '#451374',
  nav: 'rgb(131 0 255)',
  mention: '#00ff99',
  border: '#f00f0f',
  premium: 'linear-gradient(45deg, #be3944, #681515) border-box',
  themeType: 'dark',
};
