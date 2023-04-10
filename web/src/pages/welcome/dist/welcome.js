"use strict";
exports.__esModule = true;
exports.streamingServices = void 0;
require("./welcome.css");
var constants_1 = require("../../constants");
var welcome_styles_1 = require("./welcome.styles");
var react_1 = require("react");
var dark_chat_300x_webp_1 = require("../../static/images/dark-chat-300x.webp");
var dark_chat_600x_webp_1 = require("../../static/images/dark-chat-600x.webp");
var features_1 = require("./features/features");
var footer_1 = require("./footer/footer");
var react_helmet_1 = require("react-helmet");
var imageWithFadeIn_1 = require("../../components/image-with-fadeIn/imageWithFadeIn");
var light_chat_300x_webp_1 = require("../../static/images/light-chat-300x.webp");
var light_chat_600x_webp_1 = require("../../static/images/light-chat-600x.webp");
var logoset_1 = require("../../components/logoset/logoset");
var ri_1 = require("react-icons/ri");
var screenshots_1 = require("./screenshots/screenshots");
var lazyLoad_1 = require("../../lazyLoad");
var urlClient_1 = require("../../utils/urlClient");
var next_urql_1 = require("next-urql");
var usePageView_1 = require("../../hooks/usePageView");
var FaDiscord = lazyLoad_1.lazyIconFa('FaDiscord');
var FaTwitter = lazyLoad_1.lazyIconFa('FaTwitter');
var FaTiktok = lazyLoad_1.lazyIconFa('FaTiktok');
var FaInstagram = lazyLoad_1.lazyIconFa('FaInstagram');
var iconSize = 25;
exports.streamingServices = [
    {
        title: 'Netflix',
        imgUrl: 'https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI',
        color: '#E50915',
        home: 'https://www.netflix.com/',
        status: 'Available'
    },
    {
        title: 'Disney+',
        imgUrl: 'https://play-lh.googleusercontent.com/xoGGYH2LgLibLDBoxMg-ZE16b-RNfITw_OgXBWRAPin2FZY4FGB9QKBYApR-0rSCkQ=w240-h480-rw',
        color: '#022B78',
        home: 'https://www.disneyplus.com/home',
        status: 'Available soon'
    },
    {
        title: 'Hulu',
        imgUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bk8cux6dapq8qjzylfaj',
        color: '#21E684',
        home: 'https://www.hulu.com/',
        status: 'Available soon'
    },
    {
        title: 'HBO Max',
        imgUrl: 'https://play-lh.googleusercontent.com/1iyX7VdQ7MlM7iotI9XDtTwgiVmqFGzqwz10L67XVoyiTmJVoHX87QtqvcXgUnb0AC8',
        color: '#370766',
        home: 'https://www.hbomax.com/',
        status: 'Available soon'
    },
    {
        title: 'Amazon Prime Video',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41mpv9rBhmL.webp',
        color: '#2b9ec1',
        home: 'https://www.amazon.com/gp/video/storefront/',
        status: 'Available soon'
    },
];
var Welcome = function () {
    var handleReloadMessage = function () {
        window.location.reload();
    };
    usePageView_1["default"]();
    react_1.useEffect(function () {
        // listen for a message to reload the page
        var reloadTabsChannel = new BroadcastChannel('reloadTabsChannel');
        reloadTabsChannel.addEventListener('message', handleReloadMessage);
        return function () {
            // cleanup: remove the event listener
            reloadTabsChannel.removeEventListener('message', handleReloadMessage);
        };
    }, []);
    return (React.createElement(welcome_styles_1.WelcomeParent, null,
        React.createElement(welcome_styles_1.StyledFlaps, null,
            React.createElement(react_1.Suspense, null,
                React.createElement("div", { className: "social-container" },
                    React.createElement("button", { className: "discord social", onClick: function (e) {
                            e.stopPropagation();
                            window.open(constants_1.DISCORD_INVITE_LINK, '_blank');
                        } },
                        React.createElement(FaDiscord, { color: "cornflowerblue", size: iconSize, style: { pointerEvents: 'none' } })),
                    React.createElement("button", { className: "twitter social", onClick: function (e) {
                            e.stopPropagation();
                            window.open(constants_1.TWITTER_LINK, '_blank');
                        } },
                        React.createElement(FaTwitter, { color: "deepskyblue", size: iconSize, style: { pointerEvents: 'none' } })),
                    React.createElement("button", { className: "tiktok social", onClick: function (e) {
                            e.stopPropagation();
                            window.open(constants_1.TIKTOK_LINK, '_blank');
                        } },
                        React.createElement(FaTiktok, { className: "icon", size: iconSize, style: { pointerEvents: 'none' } })),
                    React.createElement("button", { className: "instagram social", onClick: function (e) {
                            e.stopPropagation();
                            window.open(constants_1.INSTAGRAM_LINK, '_blank');
                        } },
                        React.createElement(FaInstagram, { color: "hotpink", size: iconSize, style: { pointerEvents: 'none' } }))))),
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "MoovyChat: Welcome"),
            React.createElement("meta", { name: "description", content: "Home page of MoovyChat." }),
            React.createElement("link", { rel: "canonical", href: "" + constants_1.CURRENT_DOMAIN })),
        React.createElement("div", { className: "custom-shape-divider-top-1672047931" },
            React.createElement("svg", { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" },
                React.createElement("path", { d: "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z", className: "shape-fill" }))),
        React.createElement("div", { className: "home" },
            React.createElement("div", { className: "pics" },
                React.createElement("div", { className: "first pic" },
                    React.createElement("picture", null,
                        React.createElement(imageWithFadeIn_1["default"], { className: "image", src300: light_chat_300x_webp_1["default"], src600: light_chat_600x_webp_1["default"], alt: "light", sizes: "300px", width: "300", height: "487" }))),
                React.createElement("div", { className: "second pic" },
                    React.createElement("picture", null,
                        React.createElement(imageWithFadeIn_1["default"], { className: "image", src300: dark_chat_300x_webp_1["default"], src600: dark_chat_600x_webp_1["default"], alt: "dark", sizes: "300px", width: "300", height: "509" })))),
            React.createElement("div", { className: "heading" },
                React.createElement("div", { className: "company" },
                    React.createElement("p", null, "Supported Platforms"),
                    React.createElement("span", { className: "supported-platforms" }, exports.streamingServices.map(function (platform) {
                        return platform.title === 'Netflix' && (React.createElement(logoset_1.LogoSet, { platform: platform, key: platform.title }));
                    }))),
                React.createElement("div", { className: "text" }, "Now stream movies with comments"),
                React.createElement("div", { className: "sub" }, "Moovy provides you a new way to enjoy your streaming experience with a comment section and video filters."),
                React.createElement("div", { className: "sub2" }, "Why wait? Install our extension and step up the game with your streaming experience. Please note that We are not affiliated with Netflix."),
                React.createElement("div", { className: "get-started", tabIndex: 0, onClick: function (e) {
                        e.stopPropagation();
                        window.open(constants_1.EXTENSION_URL, '_blank');
                    } },
                    React.createElement("div", { className: "fill" }),
                    React.createElement("label", null, "Install Extension"),
                    React.createElement(ri_1.RiArrowRightCircleFill, { size: 25 }))),
            React.createElement("div", { className: "embed" }, "MOOVY")),
        React.createElement(screenshots_1["default"], { id: "screenshots" }),
        React.createElement(features_1["default"], { id: "features" }),
        React.createElement(footer_1["default"], { id: "footer" })));
};
exports["default"] = next_urql_1.withUrqlClient(urlClient_1.urqlClient)(Welcome);
