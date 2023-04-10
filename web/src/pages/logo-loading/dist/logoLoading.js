"use strict";
exports.__esModule = true;
var react_helmet_1 = require("react-helmet");
var loading_1 = require("../loading/loading");
var moovy_text_logo_white_png_1 = require("../../svgs/moovy-text-logo-white.png");
var logoLoading_styles_1 = require("./logoLoading.styles");
var LogoLoading = function () {
    return (React.createElement(logoLoading_styles_1.StyledLogoLoading, null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Loading..."),
            React.createElement("meta", { name: "description", content: "Loading..." })),
        React.createElement("div", { className: "logo" },
            React.createElement("img", { src: moovy_text_logo_white_png_1["default"], alt: "Moovy" })),
        React.createElement("div", { className: "loading" },
            React.createElement(loading_1["default"], null))));
};
exports["default"] = LogoLoading;
