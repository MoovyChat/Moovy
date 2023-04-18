export const constants = {
  title: 'Moovy Chat',
  welcome: 'Welcome',
  footer1: 'Enjoy the Streaming, now with Comments!',
  login: 'Log in with Google',
  chrome: '1-Click Chrome Login',
  logout: 'Logout',
  login_success: 'You are logged in!',
  main_color: '#990100',
  record_options: 'Record options',
};
export const __prod__ = process.env.NODE_ENV === 'production';

const EXT_ID = 'ilkpekdilkpahngoeanmpnkegideejip';
export const MOOVY_URL = __prod__
  ? 'https://www.moovychat.com'
  : 'http://localhost:3000';
export const EXT_URL = `chrome-extension://${EXT_ID}`;
export const DISCORD_INVITE_LINK = 'https://discord.gg/apfEFdd3hH';
export const TWITTER_LINK = 'https://twitter.com/MoovyChat';
export const TIKTOK_LINK = 'https://www.tiktok.com/@moovychat?lang=en';
export const INSTAGRAM_LINK = 'https://www.instagram.com/moovychat/';
export const PATREON = 'https://www.patreon.com/MoovyChat';
export const BUY_ME_A_COFFEE = 'https://www.buymeacoffee.com/moovychat';
export const CUSTOM_DOMAIN = __prod__
  ? 'server.moovychat.com'
  : 'localhost:4000';
export const wsUrl = __prod__
  ? `wss://${CUSTOM_DOMAIN}/graphql`
  : `ws://${CUSTOM_DOMAIN}/graphql`;
export const serverUrl = __prod__
  ? `https://${CUSTOM_DOMAIN}/graphql`
  : `http://${CUSTOM_DOMAIN}/graphql`;
export const textMapTypes = {
  USER: 'user',
  TIME: 'time',
  BASIC: 'basic',
  SPOILER: 'spoiler',
};

export const isServerSide = () => typeof window === 'undefined';

export const fonts = {
  'Cabin Sketch': "'Cabin Sketch', cursive",
  Convergence: "'Convergence', sans-serif",
  Fira: "'Fira Sans', sans-serif",
  Lato: "'lato', sans-serif",
  Lexend: "'Lexend', sans-serif",
  Montserrat: "'Montserrat', sans-serif",
  Poppins: "'Poppins', sans-serif",
  Roboto: "'Roboto', sans-serif",
  Nabla: "'Nabla', cursive",
  'Source Sans Pro': "'Source Sans Pro', sans-serif",
  Ubuntu: "'Ubuntu', sans-serif",
};

export const BOTTOMS_CONTROL = '.watch-video--bottom-controls-container';
export const SKIP_BUTTON = '.watch-video--skip-content-button';