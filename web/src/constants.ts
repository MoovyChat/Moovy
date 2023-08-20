export type ThemeKeys =
  | 'RED_SATIN'
  | 'DARK_GOLD'
  | 'FIRE_BLUE'
  | 'AQUA_GREEN'
  | 'ROYAL_NAVY'
  | 'FRESH_WATER'
  | 'SWEET_PINK'
  | 'DARK_PURPLE'
  | 'GOLDEN_SAND'
  | 'LEMON_YELLOW'
  | 'GREEN_PARROT'
  | 'ICE_BLUE'
  | 'FOREST_GREEN'
  | 'MIDNIGHT_PURPLE'
  | 'SEDONA_SUNSET'
  | 'STORMY_SEA'
  | 'DARK_RAINBOW'
  | 'ROYAL_PURPLE'
  | 'MIDNIGHT_BLUE'
  | 'LIME_TURQUOISE'
  | 'TWILIGHT_VIOLET'
  | 'SLATE_GREY'
  | 'WINTER_PINE'
  | 'NEON_BLUE_AND_MAGENTA'
  | 'AQUA_AND_CORAL'
  | 'CYAN_AND_PINK'
  | 'JADE_AND_FUCHSIA'
  | 'AMETHYST_AND_EMERALD'
  | 'RUBY_AND_TOPAZ'
  | 'SAPPHIRE_AND_RUBY'
  | 'OBSIDIAN_AND_GOLD'
  | 'TEAL_AND_BLUE'
  | 'DEEP_PURPLE_AND_DARK_GREY'
  | 'BLACK_AND_DARK_RED'
  | 'MOODY_BLUE'
  | 'FIRE_OPAL'
  | 'PEACOCK_FEATHER';

export const themes: Record<ThemeKeys, ThemeKeys> = {
  RED_SATIN: 'RED_SATIN',
  DARK_GOLD: 'DARK_GOLD',
  FIRE_BLUE: 'FIRE_BLUE',
  AQUA_GREEN: 'AQUA_GREEN',
  ROYAL_NAVY: 'ROYAL_NAVY',
  FRESH_WATER: 'FRESH_WATER',
  SWEET_PINK: 'SWEET_PINK',
  DARK_PURPLE: 'DARK_PURPLE',
  GOLDEN_SAND: 'GOLDEN_SAND',
  LEMON_YELLOW: 'LEMON_YELLOW',
  GREEN_PARROT: 'GREEN_PARROT',
  ICE_BLUE: 'ICE_BLUE',
  FOREST_GREEN: 'FOREST_GREEN',
  MIDNIGHT_PURPLE: 'MIDNIGHT_PURPLE',
  SEDONA_SUNSET: 'SEDONA_SUNSET',
  STORMY_SEA: 'STORMY_SEA',
  DARK_RAINBOW: 'DARK_RAINBOW',
  ROYAL_PURPLE: 'ROYAL_PURPLE',
  MIDNIGHT_BLUE: 'MIDNIGHT_BLUE',
  LIME_TURQUOISE: 'LIME_TURQUOISE',
  TWILIGHT_VIOLET: 'TWILIGHT_VIOLET',
  SLATE_GREY: 'SLATE_GREY',
  WINTER_PINE: 'WINTER_PINE',
  NEON_BLUE_AND_MAGENTA: 'NEON_BLUE_AND_MAGENTA',
  AQUA_AND_CORAL: 'AQUA_AND_CORAL',
  CYAN_AND_PINK: 'CYAN_AND_PINK',
  JADE_AND_FUCHSIA: 'JADE_AND_FUCHSIA',
  AMETHYST_AND_EMERALD: 'AMETHYST_AND_EMERALD',
  RUBY_AND_TOPAZ: 'RUBY_AND_TOPAZ',
  SAPPHIRE_AND_RUBY: 'SAPPHIRE_AND_RUBY',
  OBSIDIAN_AND_GOLD: 'OBSIDIAN_AND_GOLD',
  TEAL_AND_BLUE: 'TEAL_AND_BLUE',
  DEEP_PURPLE_AND_DARK_GREY: 'DEEP_PURPLE_AND_DARK_GREY',
  BLACK_AND_DARK_RED: 'BLACK_AND_DARK_RED',
  MOODY_BLUE: 'MOODY_BLUE',
  FIRE_OPAL: 'FIRE_OPAL',
  PEACOCK_FEATHER: 'PEACOCK_FEATHER',
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
  OPEN_THEME: 'OPEN_THEME',
  OPEN_SEARCH: 'OPEN_SEARCH',
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

export const SOCKET_MESSAGE_TYPES = {
  CREATE: 'create',
  JOIN: 'join',
  LEAVE: 'leave',
  MESSAGE: 'message',
  TYPING: 'typing',
  GIF: 'GIF',
  ROOM_NAME_CHANGE: 'roomNameChange',
};

export const SOCKET_URL = __prod__
  ? import.meta.env.VITE_SOCKET_URL
  : 'http://localhost:3001';

export const GIPHY_LOGO =
  'https://moovychatbucket.s3.us-west-1.amazonaws.com/giphy.gif';
export const LOGO_128 =
  'https://moovychatbucket.s3.us-west-1.amazonaws.com/mc-128.png';
export const FULL_LOGO_TRANSPARENT =
  'https://moovychatbucket.s3.us-west-1.amazonaws.com/MoovyChat_DarkTheme/fulllogo_transparent_nobuffer.png';
export const MOOVY_NEST_GIF =
  'https://moovychatbucket.s3.us-west-1.amazonaws.com/moovynest-crop.gif';
export const PATREON_PNG =
  'https://moovychatbucket.s3.us-west-1.amazonaws.com/patreon-word.webp';
export const HOMEPAGE_ICONS = {
  like: 'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/like.png',
  video:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/video.png',
  hands:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/handsbg.webp',
  pink_balls:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/pinkballsbg.webp',
  oswald:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/oswald.jpg',
  toothless:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/toothless.jpg',
  spongebob:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/spongebob.jpg',
  mockup1:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/mockup1.webp',
  moovyChatScreenshot:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/moovychat_screenshot.png',
  filtersVideo2MB:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/OptimizedNoAudio_2MB.mp4',
  filtersVideo5MB:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/OptimizedNoAudio_5MB.mp4',
  robot:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/robo.webp',
  videoFilterPoster:
    'https://moovychatbucket.s3.us-west-1.amazonaws.com/homepage/homepage_video_filter_poster.png',
};
