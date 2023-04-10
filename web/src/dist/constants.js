"use strict";
exports.__esModule = true;
exports.BUY_ME_A_COFFEE = exports.PATREON = exports.INSTAGRAM_LINK = exports.TIKTOK_LINK = exports.TWITTER_LINK = exports.DISCORD_INVITE_LINK = exports.EXTENSION_URL = exports.EXT_URL = exports.EXT_ID = exports.serverUrl = exports.wsUrl = exports.CUSTOM_DOMAIN = exports.CURRENT_DOMAIN = exports.__prod__ = exports.Fonts = exports.popupStates = exports.textMapTypes = exports.isServer = exports.themes = void 0;
exports.themes = {
    LIGHT: 'LIGHT',
    DARK: 'DARK'
};
exports.isServer = function () { return typeof window === 'undefined'; };
exports.textMapTypes = {
    USER: 'user',
    TIME: 'time',
    BASIC: 'basic',
    SPOILER: 'spoiler'
};
exports.popupStates = {
    IMAGE_POP_UP: 'IMAGE_POP_UP',
    BG_POP_UP: 'BACKGROUND_CHANGE',
    EDIT_PROFILE: 'EDIT_PROFILE',
    ADD_COMMENT: 'ADD_COMMENT',
    ADD_REPLY: 'ADD_REPLY',
    OPEN_FOLLOW: 'OPEN_FOLLOW',
    OPEN_LIKES: 'OPEN_LIKES',
    DELETE_COMMENT: 'DELETE_COMMENT',
    DELETE_REPLY: 'DELETE_REPLY'
};
exports.Fonts = {
    Prompt: 'Prompt',
    Hanken: 'Hanken Grotesk',
    Caveat: 'Caveat',
    Lora: 'Lora',
    Libra: 'Libre Franklin'
};
exports.__prod__ = process.env.NODE_ENV === 'production';
exports.CURRENT_DOMAIN = exports.__prod__
    ? 'https://www.moovychat.com'
    : 'http://localhost:3000';
exports.CUSTOM_DOMAIN = exports.__prod__
    ? 'server.moovychat.com'
    : 'localhost:4000';
exports.wsUrl = exports.__prod__
    ? "wss://" + exports.CUSTOM_DOMAIN + "/graphql"
    : "ws://" + exports.CUSTOM_DOMAIN + "/graphql";
exports.serverUrl = exports.__prod__
    ? "https://" + exports.CUSTOM_DOMAIN + "/graphql"
    : "http://" + exports.CUSTOM_DOMAIN + "/graphql";
exports.EXT_ID = 'ilkpekdilkpahngoeanmpnkegideejip';
exports.EXT_URL = "chrome-extension://" + exports.EXT_ID;
exports.EXTENSION_URL = "https://chrome.google.com/webstore/detail/moovy-chat/" + exports.EXT_ID;
exports.DISCORD_INVITE_LINK = 'https://discord.gg/fndxsG7VcB';
exports.TWITTER_LINK = 'https://twitter.com/MoovyChat';
exports.TIKTOK_LINK = 'https://www.tiktok.com/@moovychat?lang=en';
exports.INSTAGRAM_LINK = 'https://www.instagram.com/moovychat/';
exports.PATREON = 'https://www.patreon.com/MoovyChatLtd';
exports.BUY_ME_A_COFFEE = 'https://www.buymeacoffee.com/moovychat';
