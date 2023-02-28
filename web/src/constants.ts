export const home = {
  heading: 'Now stream movies with comments',
  sub: 'Moovy provides you a new way to enjoy your streaming experience with a comment section and video filters.',
  sub2: 'Why wait? Install our extension and step up the game with your streaming experience.',
  supported: 'Supported Platforms:',
};

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

export const CUSTOM_DOMAIN = __prod__
  ? 'server.moovychat.com'
  : 'localhost:4000';
export const wsUrl = `ws://${CUSTOM_DOMAIN}/graphql`;
export const serverUrl = `http://${CUSTOM_DOMAIN}/graphql`;
export const EXT_ID = 'dmipflcbflebldjbgfnkcjnobneebmpo';
