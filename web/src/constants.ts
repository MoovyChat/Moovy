export const themes = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

export const isServer = () => typeof window === 'undefined';

export const textMapTypes = {
  USER: 'user',
  TIME: 'time',
  BASIC: 'basic',
  SPOILER: 'spoiler',
};

export const popupStates = {
  IMAGE_POP_UP: 'IMAGE_POP_UP',
  BG_POP_UP: 'BACKGROUND_CHANGE',
  EDIT_PROFILE: 'EDIT_PROFILE',
  ADD_COMMENT: 'ADD_COMMENT',
  ADD_REPLY: 'ADD_REPLY',
  OPEN_FOLLOW: 'OPEN_FOLLOW',
  OPEN_LIKES: 'OPEN_LIKES',
  DELETE_COMMENT: 'DELETE_COMMENT',
  DELETE_REPLY: 'DELETE_REPLY',
};

export const Fonts = {
  Prompt: 'Prompt',
  Hanken: 'Hanken Grotesk',
  Caveat: 'Caveat',
  Lora: 'Lora',
  Libra: 'Libre Franklin',
};
export const __prod__ = process.env.NODE_ENV === 'production';
export const CURRENT_DOMAIN = __prod__
  ? 'https://www.moovychat.com'
  : 'http://localhost:3000';
export const CUSTOM_DOMAIN = __prod__
  ? 'server.moovychat.com'
  : 'localhost:4000';
export const wsUrl = __prod__
  ? `wss://${CUSTOM_DOMAIN}/graphql`
  : `ws://${CUSTOM_DOMAIN}/graphql`;
export const serverUrl = __prod__
  ? `https://${CUSTOM_DOMAIN}/graphql`
  : `http://${CUSTOM_DOMAIN}/graphql`;
export const EXT_ID = 'ilkpekdilkpahngoeanmpnkegideejip';
export const EXT_URL = `chrome-extension://${EXT_ID}`;
export const EXTENSION_URL = `https://chrome.google.com/webstore/detail/moovy-chat/${EXT_ID}`;
export const DISCORD_INVITE_LINK = 'https://discord.gg/apfEFdd3hH';
export const TWITTER_LINK = 'https://twitter.com/MoovyChat';
export const TIKTOK_LINK = 'https://www.tiktok.com/@moovychat?lang=en';
export const INSTAGRAM_LINK = 'https://www.instagram.com/moovychat/';
export const PATREON = 'https://www.patreon.com/MoovyChat';
export const BUY_ME_A_COFFEE = 'https://www.buymeacoffee.com/moovychat';
export const G_TRACKING_ID = 'G-R7B18C6XQ2';
