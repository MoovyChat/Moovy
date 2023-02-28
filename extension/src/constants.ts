const constants = {
  title: 'Moovy Chat',
  welcome: 'Welcome',
  footer1: 'Enjoy the Streaming now with Comments!',
  login: 'Log in with Google',
  chrome: 'Log in with Chrome',
  logout: 'Logout',
  login_success: 'You are logged in!',
  main_color: '#990100',
  record_options: 'Record options',
};
export const __prod__ = process.env.NODE_ENV === 'production';

const EXT_ID = 'dmipflcbflebldjbgfnkcjnobneebmpo';
export const MOOVY_URL = __prod__
  ? 'https://www.moovychat.com'
  : 'http://localhost:3000.com';
export const EXT_URL = `chrome-extension://${EXT_ID}`;
export const DISCORD_INVITE_LINK = 'https://discord.gg/fndxsG7VcB';
export const TWITTER_LINK = 'https://twitter.com/MoovyChat';
export const TIKTOK_LINK = 'https://www.tiktok.com/@moovychat?lang=en';
export const INSTAGRAM_LINK = 'https://www.instagram.com/moovychat/';
export const PATREON = 'https://www.patreon.com/MoovyChatLtd';
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
export default constants;

export const isServerSide = () => typeof window === 'undefined';
