"use strict";
exports.__esModule = true;
require("./aboutUs.css");
var privacyPolicy_styles_1 = require("../privacy-policy/privacyPolicy.styles");
var constants_1 = require("../../constants");
var react_helmet_1 = require("react-helmet");
var usePageView_1 = require("../../hooks/usePageView");
var AboutUs = function () {
    usePageView_1["default"]();
    return (React.createElement(privacyPolicy_styles_1.PrivacyPolicyWrapper, null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "About Us"),
            React.createElement("meta", { name: "description", content: "About us" }),
            React.createElement("link", { rel: "canonical", href: constants_1.CURRENT_DOMAIN + "/about-us" })),
        React.createElement(privacyPolicy_styles_1.PrivacyPolicyContent, null,
            React.createElement("h1", null, "About Us"),
            React.createElement("p", null, "MoovyChat Ltd. is a startup company that provides a service for enhancing the user's experience on over-the-top (OTT) platforms, such as Netflix, Hulu, and Amazon Prime Video."),
            React.createElement("p", null, "Our mission is to help users discover new content, share their opinions with others, and connect with like-minded viewers around the world."),
            React.createElement("p", null, "We are a small team of developers, designers, and content enthusiasts who are passionate about movies and TV shows. We believe that technology can make the entertainment experience more social, interactive, and personalized."),
            React.createElement("p", null,
                "For any questions or feedback, please contact us at",
                React.createElement("a", { href: "mailto:support@moovychat.com" }, "support@moovychat.com"),
                " and ",
                React.createElement("a", { href: "mailto:chatmoovy@gmail.com" }, "chatmoovy@gmail.com"),
                "."))));
};
exports["default"] = AboutUs;
