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
}

export const lightTheme: ThemeProps = {
  body: ' #2c94ab',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#ffffff',
};
export const darkTheme: ThemeProps = {
  body: '#531616',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#000000',
};

export const lightThemeForHome: ThemeProps = {
  body: 'linear-gradient(62deg, #d1dee3 60%, #6fa3c1 100%);',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: 'linear-gradient(to right, #1f86e1, #c9f8fe, #78caf0)',
  movieHeader: 'linear-gradient(to right, #e11f1f, #e3c9fe, #f07878)',
  trendingTiles: '#d1dee3',
  hoverColor: '#6fa3c1',
  mention: '#1da3f0',
  themeType: 'light',
};
export const darkThemeForHome: ThemeProps = {
  body: 'linear-gradient(62deg, #0c0c0c 55%, #32075a 100%);',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  movieHeader: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  trendingTiles: '#0c0c0c',
  hoverColor: '#451374',
  mention: '#00ff99',
  themeType: 'dark',
};
