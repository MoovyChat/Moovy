export interface ThemeProps {
  background: string;
  text: string;
  body: string;
  toggleBorder: string;
  movieHeader?: string;
  trendingTiles?: string;
}

export const lightTheme: ThemeProps = {
  body: 'linear-gradient(#0055ff, #ffffff)',
  // body: '#fff',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#ffffff',
};
export const darkTheme: ThemeProps = {
  body: 'linear-gradient(#1e13e9, #000)',
  // body: '#000',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#000000',
};

export const lightThemeForHome: ThemeProps = {
  body: 'linear-gradient(62deg, #cbc9c9 60%, #6fa3c1 100%);',
  text: '#363537',
  toggleBorder: '#b8b7b7',
  background: '#ffffff',
  movieHeader: 'linear-gradient(to right, #e11f1f, #e3c9fe, #f07878)',
  trendingTiles: '#e2e2e2',
};
export const darkThemeForHome: ThemeProps = {
  body: 'linear-gradient(62deg, #000000 42%, #32075a 100%);',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  movieHeader: 'linear-gradient(to right, #681515, #302b63, #3e2524)',
  trendingTiles: '#131313',
};
