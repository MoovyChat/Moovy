export interface ThemeProps {
  body: string;
  text: string;
  background: string;
  toggleBorder: string;
  movieHeader?: string;
  trendingTiles?: string;
  hoverColor: string;
  mention: string;
  primary: string;
  secondary: string;
  loadingCard?: string;
  popup: string;
  border: string;
  themeType: string;
  divHoverColor?: string;
}

export const MIDNIGHT_BLUE: ThemeProps = {
  body: '#0f0f3e',
  text: '#C8C8C8',
  background: '#141E61',
  toggleBorder: '#0C0C54',
  hoverColor: '#07073D',
  mention: '#0C0C54',
  primary: '#141E61',
  secondary: '#0C0C54',
  trendingTiles: 'black',
  popup: '#0C0C54',
  border: '#07073D',
  loadingCard: '#141E61',
  themeType: 'MIDNIGHT_BLUE',
  divHoverColor: '#181877',
};

export const LIME_TURQUOISE: ThemeProps = {
  body: '#164c36',
  text: '#E0E0E0',
  background: '#1C5A3C',
  toggleBorder: '#107B63',
  trendingTiles: 'black',

  hoverColor: '#53998D',
  mention: '#107B63',
  primary: '#1C5A3C',
  secondary: '#107B63',
  popup: '#107B63',
  border: '#53998D',
  loadingCard: '#1C5A3C',
  themeType: 'LIME_TURQUOISE',
  divHoverColor: '#68AB9A', // A bit lighter for the DIV hover
};

export const TWILIGHT_VIOLET: ThemeProps = {
  body: '#4b0070',
  text: '#D8D8D8',
  background: '#5F0A87',
  toggleBorder: '#7A0E9C',
  hoverColor: '#A23EAE',
  trendingTiles: 'black',

  mention: '#7A0E9C',
  primary: '#5F0A87',
  secondary: '#7A0E9C',
  popup: '#7A0E9C',
  border: '#A23EAE',
  loadingCard: '#5F0A87',
  themeType: 'TWILIGHT_VIOLET',
  divHoverColor: '#B956B8', // A bit lighter for the DIV hover
};

export const DARK_RAINBOW: ThemeProps = {
  body: '#13132a',
  text: '#C8C8C8',
  background: '#1A1A2E',
  trendingTiles: 'black',

  toggleBorder: '#16213E',
  hoverColor: '#0F3460',
  mention: '#16213E',
  primary: '#1A1A2E',
  secondary: '#16213E',
  popup: '#16213E',
  border: '#0F3460',
  loadingCard: '#1A1A2E',
  themeType: 'DARK_RAINBOW',
  divHoverColor: '#1D4070',
};

export const SLATE_GREY: ThemeProps = {
  body: '#2B2B2D',
  text: '#C8C8C8',
  trendingTiles: 'black',

  background: '#1A1A2E',
  toggleBorder: '#707070',
  hoverColor: '#4B4B4D',
  mention: '#707070',
  primary: '#1A1A2E',
  secondary: '#707070',
  popup: '#707070',
  border: '#4B4B4D',
  loadingCard: '#1A1A2E',
  themeType: 'SLATE_GREY',
  divHoverColor: '#59595F',
};

export const WINTER_PINE: ThemeProps = {
  body: '#1B3A20',
  text: '#BACDB0',
  trendingTiles: 'black',

  background: '#2F5D3B',
  toggleBorder: '#3F7D59',
  hoverColor: '#4B9957',
  mention: '#3F7D59',
  primary: '#2F5D3B',
  secondary: '#3F7D59',
  popup: '#3F7D59',
  border: '#4B9957',
  loadingCard: '#2F5D3B',
  themeType: 'WINTER_PINE',
  divHoverColor: '#5BAA67',
};

export const NEON_BLUE_AND_MAGENTA: ThemeProps = {
  body: '#0C084B',
  text: '#D6D6D6',
  trendingTiles: 'black',

  background: '#21096E',
  toggleBorder: '#7D3FD9',
  hoverColor: '#BD63E1',
  mention: '#7D3FD9',
  primary: '#21096E',
  secondary: '#7D3FD9',
  popup: '#7D3FD9',
  border: '#BD63E1',
  divHoverColor: '#C973E7',
  loadingCard: '#21096E',
  themeType: 'NEON_BLUE_AND_MAGENTA',
};

export const RED_SATIN: ThemeProps = {
  body: '#8B0000',
  trendingTiles: 'black',

  text: '#FAFAFA',
  background: '#6A0D0D',
  toggleBorder: '#500A0A',
  hoverColor: '#9B1A1A',
  mention: '#500A0A',
  primary: '#6A0D0D',
  secondary: '#500A0A',
  popup: '#500A0A',
  border: '#9B1A1A',
  divHoverColor: '#AC2A2A',
  loadingCard: '#6A0D0D',
  themeType: 'RED_SATIN',
};

export const DARK_GOLD: ThemeProps = {
  body: '#A67D3D',
  text: '#FAFAFA',
  background: '#827839',
  toggleBorder: '#635D34',
  trendingTiles: 'black',

  hoverColor: '#B58E46',
  mention: '#635D34',
  primary: '#827839',
  secondary: '#635D34',
  popup: '#635D34',
  divHoverColor: '#C69E56',
  border: '#B58E46',
  loadingCard: '#827839',
  themeType: 'DARK_GOLD',
};

export const ICE_BLUE: ThemeProps = {
  body: '#D1F4FA',
  text: '#333333',
  background: '#A6E3E9',
  toggleBorder: '#82D3D9',
  trendingTiles: 'black',

  hoverColor: '#EAF7FA',
  mention: '#82D3D9',
  primary: '#A6E3E9',
  secondary: '#82D3D9',
  popup: '#82D3D9',
  border: '#EAF7FA',
  divHoverColor: '#EDF9FB',
  loadingCard: '#A6E3E9',
  themeType: 'ICE_BLUE',
};

export const FIRE_BLUE: ThemeProps = {
  body: '#051d4d',
  text: '#FAFAFA',
  trendingTiles: 'black',

  background: '#051d4d',
  toggleBorder: '#0e153a',
  hoverColor: '#0c569d',
  mention: '#0e153a',
  divHoverColor: '#0d61ac',

  primary: '#0e153a',
  secondary: '#0e153a',
  popup: '#0e153a',
  border: '#0c569d',
  loadingCard: '#0e153a',
  themeType: 'FIRE_BLUE',
};

export const AQUA_GREEN: ThemeProps = {
  body: '#136f63',
  text: '#FAFAFA',
  trendingTiles: 'black',

  background: '#136f63',
  toggleBorder: '#0e5949',
  hoverColor: '#0c9d8e',
  divHoverColor: '#0db29f',
  mention: '#0e5949',
  primary: '#0e5949',
  secondary: '#0e5949',
  popup: '#0e5949',
  border: '#0c9d8e',
  loadingCard: '#0e5949',
  themeType: 'AQUA_GREEN',
};

export const ROYAL_NAVY: ThemeProps = {
  body: '#132743',
  text: '#FAFAFA',
  background: '#132743',
  toggleBorder: '#0e1d3a',
  hoverColor: '#0c4d9d',
  trendingTiles: 'black',

  mention: '#0e1d3a',
  divHoverColor: '#0d58b1',
  primary: '#0e1d3a',
  secondary: '#0e1d3a',
  popup: '#0e1d3a',
  border: '#0c4d9d',
  loadingCard: '#0e1d3a',
  themeType: 'ROYAL_NAVY',
};

export const FRESH_WATER: ThemeProps = {
  body: '#13397f',
  text: '#FAFAFA',
  background: '#13397f',
  toggleBorder: '#0e2c66',
  trendingTiles: 'black',

  hoverColor: '#0c5f9d',
  mention: '#0e2c66',
  primary: '#0e2c66',
  divHoverColor: '#0d6bb2',
  secondary: '#0e2c66',
  popup: '#0e2c66',
  border: '#0c5f9d',
  loadingCard: '#0e2c66',
  themeType: 'FRESH_WATER',
};

export const SWEET_PINK: ThemeProps = {
  body: '#8b1341',
  text: '#FAFAFA',
  background: '#8b1341',
  trendingTiles: 'black',

  toggleBorder: '#59102d',
  hoverColor: '#9d0c53',
  mention: '#59102d',
  primary: '#59102d',
  divHoverColor: '#af0d60',
  secondary: '#59102d',
  popup: '#59102d',
  border: '#9d0c53',
  loadingCard: '#59102d',
  themeType: 'SWEET_PINK',
};

export const DARK_PURPLE: ThemeProps = {
  body: '#34138b',
  text: '#FAFAFA',
  background: '#34138b',
  trendingTiles: 'black',

  toggleBorder: '#230e59',
  hoverColor: '#4d0c9d',
  divHoverColor: '#5b0db2',
  mention: '#230e59',
  primary: '#230e59',
  secondary: '#230e59',
  popup: '#230e59',
  border: '#4d0c9d',
  loadingCard: '#230e59',
  themeType: 'DARK_PURPLE',
};

export const GOLDEN_SAND: ThemeProps = {
  body: '#8b6913',
  text: '#FAFAFA',
  background: '#8b6913',
  trendingTiles: 'black',

  toggleBorder: '#59450e',
  hoverColor: '#9d890c',
  divHoverColor: '#b0980d',
  mention: '#59450e',
  primary: '#59450e',
  secondary: '#59450e',
  popup: '#59450e',
  border: '#9d890c',
  loadingCard: '#59450e',
  themeType: 'GOLDEN_SAND',
};

export const LEMON_YELLOW: ThemeProps = {
  body: '#8b8c13',
  text: '#FAFAFA',
  background: '#8b8c13',
  toggleBorder: '#59590e',
  hoverColor: '#9d9e0c',
  trendingTiles: 'black',

  divHoverColor: '#b0b20d',
  mention: '#59590e',
  primary: '#59590e',
  secondary: '#59590e',
  popup: '#59590e',
  border: '#9d9e0c',
  loadingCard: '#59590e',
  themeType: 'LEMON_YELLOW',
};

export const GREEN_PARROT: ThemeProps = {
  body: '#138b2e',
  text: '#FAFAFA',
  trendingTiles: 'black',

  background: '#138b2e',
  toggleBorder: '#0e591f',
  hoverColor: '#0c9d49',
  divHoverColor: '#0db257',
  mention: '#0e591f',
  primary: '#0e591f',
  secondary: '#0e591f',
  popup: '#0e591f',
  border: '#0c9d49',
  loadingCard: '#0e591f',
  themeType: 'GREEN_PARROT',
};

export const AQUA_AND_CORAL: ThemeProps = {
  body: '#084B43',
  trendingTiles: 'black',

  text: '#D6D6D6',
  background: '#096E5B',
  toggleBorder: '#3FD9B6',
  hoverColor: '#63E1C1',
  mention: '#3FD9B6',
  divHoverColor: '#71E7CE',
  primary: '#096E5B',
  secondary: '#3FD9B6',
  popup: '#3FD9B6',
  border: '#63E1C1',
  loadingCard: '#096E5B',
  themeType: 'AQUA_AND_CORAL',
};

export const CYAN_AND_PINK: ThemeProps = {
  body: '#084B43',
  text: '#D6D6D6',
  background: '#096E5B',
  toggleBorder: '#3FD9B6',
  hoverColor: '#E163A6',
  mention: '#3FD9B6',
  trendingTiles: 'black',

  primary: '#096E5B',
  secondary: '#3FD9B6',
  popup: '#3FD9B6',
  divHoverColor: '#E475B0',
  border: '#E163A6',
  loadingCard: '#096E5B',
  themeType: 'CYAN_AND_PINK',
};

export const ROYAL_PURPLE: ThemeProps = {
  body: '#3b3b3d',
  text: '#E8E8E8',
  background: '#4C4E50',
  toggleBorder: '#6441A5',
  hoverColor: '#2A105B',
  trendingTiles: 'black',

  mention: '#6441A5',
  primary: '#4C4E50',
  secondary: '#6441A5',
  divHoverColor: '#311467',
  popup: '#6441A5',
  border: '#2A105B',
  loadingCard: '#4C4E50',
  themeType: 'ROYAL_PURPLE',
};

export const SEDONA_SUNSET: ThemeProps = {
  body: '#3c2919',
  text: '#D0D0D0',
  background: '#2E2211',
  toggleBorder: '#6E5031',
  hoverColor: '#2E2211',
  divHoverColor: '#3e3021',
  trendingTiles: 'black',

  mention: '#6E5031',
  primary: '#6E5031',
  secondary: '#4E3421',
  popup: '#4E3421',
  border: '#6E5031',
  loadingCard: '#2E2211',
  themeType: 'SEDONA_SUNSET',
};

export const STORMY_SEA: ThemeProps = {
  body: '#2a4a55',
  text: '#D0D0D0',
  background: '#405E73',
  trendingTiles: 'black',

  toggleBorder: '#28464B',
  hoverColor: '#405E73',
  divHoverColor: '#506d83',
  mention: '#28464B',
  primary: '#28464B',
  secondary: '#345B63',
  popup: '#345B63',
  border: '#28464B',
  loadingCard: '#405E73',
  themeType: 'STORMY_SEA',
};

export const FOREST_GREEN: ThemeProps = {
  body: '#1b3929',
  text: '#D0D0D0',
  background: '#2C7A52',
  toggleBorder: '#1F4427',
  divHoverColor: '#3c8a62',
  hoverColor: '#2C7A52',
  trendingTiles: 'black',

  mention: '#1F4427',
  primary: '#1F4427',
  secondary: '#245738',
  popup: '#245738',
  border: '#1F4427',
  loadingCard: '#2C7A52',
  themeType: 'FOREST_GREEN',
};

export const MIDNIGHT_PURPLE: ThemeProps = {
  body: '#240d29',
  text: '#C8C8C8',
  background: '#401B46',
  trendingTiles: 'black',

  toggleBorder: '#2D1130',
  hoverColor: '#401B46',
  mention: '#2D1130',
  divHoverColor: '#3E2256',
  primary: '#2D1130',
  secondary: '#301934',
  popup: '#301934',
  border: '#2D1130',
  loadingCard: '#401B46',
  themeType: 'MIDNIGHT_PURPLE',
};

export const TEAL_AND_BLUE: ThemeProps = {
  body: '#12343b',
  text: '#F0F0F0',
  trendingTiles: 'black',

  background: '#287490',
  toggleBorder: '#1B3A4B',
  hoverColor: '#287490',
  divHoverColor: '#1F88AB',
  mention: '#1F5673',
  primary: '#1B3A4B',
  secondary: '#1F5673',
  loadingCard: '#287490',
  popup: '#1F5673',
  border: '#1F5673',
  themeType: 'TEAL_AND_BLUE',
};

export const DEEP_PURPLE_AND_DARK_GREY: ThemeProps = {
  body: '#262626',
  trendingTiles: 'black',

  text: '#E8E8E8',
  background: '#5E35B1',
  toggleBorder: '#311B92',
  hoverColor: '#5E35B1',
  mention: '#424242',
  divHoverColor: '#6E46D1',
  primary: '#311B92',
  secondary: '#424242',
  loadingCard: '#5E35B1',
  popup: '#424242',
  border: '#424242',
  themeType: 'DEEP_PURPLE_AND_DARK_GREY',
};

export const BLACK_AND_DARK_RED: ThemeProps = {
  body: '#212121',
  text: '#FAFAFA',
  trendingTiles: 'black',
  background: '#3E2723',
  toggleBorder: '#212121',
  hoverColor: '#3E2723',
  mention: '#4E342E',
  primary: '#212121',
  secondary: '#4E342E',
  divHoverColor: '#5E3833',
  loadingCard: '#3E2723',
  popup: '#4E342E',
  border: '#4E342E',
  themeType: 'BLACK_AND_DARK_RED',
};

export const MOODY_BLUE: ThemeProps = {
  body: '#1B304A',
  text: '#F0F0F0',
  trendingTiles: 'black',

  background: '#2866A1',
  toggleBorder: '#1B304A',
  hoverColor: '#2866A1',
  mention: '#1F4E79',
  primary: '#1B304A',
  divHoverColor: '#2F88D1',
  secondary: '#1F4E79',
  loadingCard: '#2866A1',
  popup: '#1F4E79',
  border: '#1F4E79',
  themeType: 'MOODY_BLUE',
};

export const FIRE_OPAL: ThemeProps = {
  body: '#121212',
  text: '#FAFAFA',
  background: '#f48b29',
  trendingTiles: 'black',
  toggleBorder: '#ff414d',
  hoverColor: '#f48b29',
  mention: '#ff414d',
  divHoverColor: '#ff6e49',
  primary: '#ff414d',
  secondary: '#f48b29',
  loadingCard: '#f48b29',
  popup: '#f48b29',
  border: '#ff414d',
  themeType: 'FIRE_OPAL',
};

export const PEACOCK_FEATHER: ThemeProps = {
  body: '#121212',
  text: '#FAFAFA',
  trendingTiles: 'black',
  background: '#ff5714',
  toggleBorder: '#1fab89',
  hoverColor: '#ff5714',
  divHoverColor: '#ff7834',
  mention: '#1fab89',
  primary: '#1fab89',
  secondary: '#ff5714',
  loadingCard: '#ff5714',
  popup: '#ff5714',
  border: '#1fab89',
  themeType: 'PEACOCK_FEATHER',
};

export const JADE_AND_FUCHSIA: ThemeProps = {
  body: '#121212',
  trendingTiles: 'black',
  text: '#FAFAFA',
  background: '#ff206e',
  toggleBorder: '#00c9b1',
  hoverColor: '#ff206e',
  mention: '#00c9b1',
  primary: '#00c9b1',
  secondary: '#ff206e',
  divHoverColor: '#ff408e',
  loadingCard: '#ff206e',
  popup: '#ff206e',
  border: '#00c9b1',
  themeType: 'JADE_AND_FUCHSIA',
};

export const AMETHYST_AND_EMERALD: ThemeProps = {
  trendingTiles: 'black',
  body: '#212121',
  text: '#FAFAFA',
  background: '#3ddc97',
  toggleBorder: '#a78ec3',
  hoverColor: '#3ddc97',
  mention: '#a78ec3',
  primary: '#a78ec3',
  divHoverColor: '#4efcb7',
  secondary: '#3ddc97',
  loadingCard: '#3ddc97',
  popup: '#3ddc97',
  border: '#a78ec3',
  themeType: 'AMETHYST_AND_EMERALD',
};

export const RUBY_AND_TOPAZ: ThemeProps = {
  body: '#202020',
  trendingTiles: 'black',
  text: '#FAFAFA',
  background: '#ffa62b',
  toggleBorder: '#f61c43',
  hoverColor: '#ffa62b',
  mention: '#f61c43',
  primary: '#f61c43',
  secondary: '#ffa62b',
  divHoverColor: '#ffbe4b',
  loadingCard: '#ffa62b',
  popup: '#ffa62b',
  border: '#f61c43',
  themeType: 'RUBY_AND_TOPAZ',
};

export const SAPPHIRE_AND_RUBY: ThemeProps = {
  body: '#1d1e22',
  trendingTiles: 'black',
  text: '#FAFAFA',
  background: '#dc2f2f',
  toggleBorder: '#0172c0',
  hoverColor: '#dc2f2f',
  mention: '#0172c0',
  primary: '#0172c0',
  secondary: '#dc2f2f',
  loadingCard: '#dc2f2f',
  popup: '#dc2f2f',
  divHoverColor: '#fd4f4f',
  border: '#0172c0',
  themeType: 'SAPPHIRE_AND_RUBY',
};

export const OBSIDIAN_AND_GOLD: ThemeProps = {
  trendingTiles: 'black',
  body: '#212121',
  text: '#FAFAFA',
  background: '#ff2e63',
  toggleBorder: '#f5af19',
  hoverColor: '#ff2e63',
  mention: '#f5af19',
  primary: '#f5af19',
  secondary: '#ff2e63',
  loadingCard: '#ff2e63',
  popup: '#ff2e63',
  divHoverColor: '#ff3e73',
  border: '#f5af19',
  themeType: 'OBSIDIAN_AND_GOLD',
};

export const THEME_PALETTE = {
  MIDNIGHT_BLUE,
  LIME_TURQUOISE,
  TWILIGHT_VIOLET,
  DARK_RAINBOW,
  SLATE_GREY,
  WINTER_PINE,
  NEON_BLUE_AND_MAGENTA,
  RED_SATIN,
  DARK_GOLD,
  ICE_BLUE,
  FIRE_BLUE,
  AQUA_GREEN,
  ROYAL_NAVY,
  FRESH_WATER,
  SWEET_PINK,
  DARK_PURPLE,
  GOLDEN_SAND,
  LEMON_YELLOW,
  GREEN_PARROT,
  AQUA_AND_CORAL,
  CYAN_AND_PINK,
  ROYAL_PURPLE,
  SEDONA_SUNSET,
  STORMY_SEA,
  FOREST_GREEN,
  MIDNIGHT_PURPLE,
  TEAL_AND_BLUE,
  DEEP_PURPLE_AND_DARK_GREY,
  BLACK_AND_DARK_RED,
  MOODY_BLUE,
  FIRE_OPAL,
  PEACOCK_FEATHER,
  JADE_AND_FUCHSIA,
  AMETHYST_AND_EMERALD,
  RUBY_AND_TOPAZ,
  SAPPHIRE_AND_RUBY,
  OBSIDIAN_AND_GOLD,
};
