export const constants = {
  title: "Moovy Chat",
  welcome: "Welcome",
  footer1: "Enjoy the Streaming, now with Comments!",
  login: "Log in with Google",
  chrome: "1-Click Chrome Login",
  logout: "Logout",
  login_success: "You are logged in!",
  main_color: "#990100",
  record_options: "Record options",
};
export const __prod__ = process.env.NODE_ENV !== "production";

export const EXT_ID = "ilkpekdilkpahngoeanmpnkegideejip";
export const MOOVY_URL = __prod__
  ? "https://www.moovychat.com"
  : "http://localhost:3000";
export const EXT_URL = `chrome-extension://${EXT_ID}`;
export const DISCORD_INVITE_LINK = "https://discord.gg/apfEFdd3hH";
export const TWITTER_LINK = "https://twitter.com/MoovyChat";
export const TIKTOK_LINK = "https://www.tiktok.com/@moovychat?lang=en";
export const INSTAGRAM_LINK = "https://www.instagram.com/moovychat/";
export const PATREON = "https://www.patreon.com/MoovyChat";
export const BUY_ME_A_COFFEE = "https://www.buymeacoffee.com/moovychat";
export const CUSTOM_DOMAIN = __prod__
  ? "server.moovychat.com"
  : "localhost:4000";
export const wsUrl = __prod__
  ? `wss://${CUSTOM_DOMAIN}/graphql`
  : `ws://${CUSTOM_DOMAIN}/graphql`;
export const serverUrl = __prod__
  ? `https://${CUSTOM_DOMAIN}/graphql`
  : `http://${CUSTOM_DOMAIN}/graphql`;
export const serverScrape = __prod__
  ? `https://${CUSTOM_DOMAIN}/scrape`
  : `http://${CUSTOM_DOMAIN}/scrape`;
export const textMapTypes = {
  USER: "user",
  TIME: "time",
  BASIC: "basic",
  SPOILER: "spoiler",
};

export const SOCKET_MESSAGE_TYPES = {
  CREATE: "create",
  JOIN: "join",
  LEAVE: "leave",
  MESSAGE: "message",
  TYPING: "typing",
  SEEK_TIME: "seekTime",
  PAUSE: "pause",
  PLAY: "play",
  KICK: "kick",
  GIF: "GIF",
  URL_CHANGE: "urlChange",
  ROOM_NAME_CHANGE: "roomNameChange",
};
export const SOCKET_URL = __prod__
  ? "https://nest.moovychat.com/"
  : "http://localhost:3001";

export const isServerSide = () => typeof window === "undefined";

export const fonts = {
  "Cabin Sketch": "'Cabin Sketch', cursive",
  Convergence: "'Convergence', sans-serif",
  Fira: "'Fira Sans', sans-serif",
  Lato: "'lato', sans-serif",
  Lexend: "'Lexend', sans-serif",
  Montserrat: "'Montserrat', sans-serif",
  Poppins: "'Poppins', sans-serif",
  Roboto: "'Roboto', sans-serif",
  Nabla: "'Nabla', cursive",
  "Source Sans Pro": "'Source Sans Pro', sans-serif",
  Ubuntu: "'Ubuntu', sans-serif",
};
export const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const BOTTOMS_CONTROL = ".watch-video--bottom-controls-container";
export const SKIP_BUTTON = ".watch-video--skip-content-button, .skip-intro";

export const GIPHY_LOGO =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/giphy.gif";
export const LOGO_128 =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/mc-128.png";
export const ERROR_LOGO =
  "http://icongal.com/gallery/image/297540/check_mark_errorcircle_error.png";
export const RED_LOGO_128 =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/mcRed-128.png";
export const FULL_LOGO_TRANSPARENT =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/MoovyChat_DarkTheme/fulllogo_transparent_nobuffer.png";
export const MOOVY_NEST_GIF =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/moovynest-crop.gif";
export const GLOBAL_TO_NEST_GIF =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/globalToNest.gif";
export const PATREON_PNG =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/patreon-word.webp";
export const EXPLOSION_GIF =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/explosion.gif";
export const EXPLOSION_GIF_1 =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/explosion-1.gif";
export const EXPLOSION_GIF_2 =
  "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/explosion-2.gif";
export const ANIMATED_SMILEYS = {
  LOVE: {
    url: "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/love.gif",
    static:
      "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/love-static.gif",
    emoji: "😘",
  },
  DEMON: {
    url: "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/demon.gif",
    static:
      "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/demon-static.gif",
    emoji: "😈",
  },
  COOL: {
    url: "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/cool.gif",
    static:
      "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/cool-static.gif",
    emoji: "😎",
  },
  CRY: {
    url: "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/cry.gif",
    static:
      "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/cry-static.gif",
    emoji: "🥲",
  },
  LOVE_EYES: {
    url: "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/love_eyes.gif",
    static:
      "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/love-eyes-static.gif",
    emoji: "😍",
  },
  ROFL: {
    url: "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/rofl.gif",
    static:
      "https://moovychatbucket.s3.us-west-1.amazonaws.com/gifs/rofl-static.gif",
    emoji: "😂",
  },
};

export const OTT = {
  NETFLIX: {
    title: "Netflix",
    imgUrl:
      "https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI",
    color: "#c0141d",
  },
  DISNEY: {
    title: "Disney",
    imgUrl:
      "https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw",
    color: "#022B78",
  },
  AMAZON: {
    title: "Amazon",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.png",
    color: "#2b9ec1",
  },
  AHA: {
    title: "Aha",
    imgUrl: "https://www.aha.video/aha-logo.db810aeaa42b356a86a7.png",
    color: "#ff6d2e",
  },
  MOOVYCHAT: {
    title: "MoovyChat",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/moovy-logo-white.png?alt=media&token=31b2558e-65b8-42cb-ae8c-dd51c22effde",
    color: "#451374",
  },
  OTHER: {
    title: "Other",
    imgUrl:
      "https://static.vecteezy.com/system/resources/previews/007/126/739/original/question-mark-icon-free-vector.jpg",
    color: "#E50915",
  },
};
