"use strict";
exports.__esModule = true;
var react_helmet_1 = require("react-helmet");
var moovy_white_svg_1 = require("../../svgs/moovy-white.svg");
var notFound_styles_1 = require("./notFound.styles");
var react_router_dom_1 = require("react-router-dom");
var NotFound = function () {
    var error = react_router_dom_1.useRouteError();
    return (React.createElement(notFound_styles_1.NotFoundParent, null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "404: Not Found"),
            React.createElement("meta", { name: "description", content: "404: Not Found" })),
        React.createElement("div", { className: "bg" },
            React.createElement(moovy_white_svg_1.ReactComponent, { className: "bg-img" })),
        React.createElement("div", { className: "code" }, error && error.status ? error.status : 404),
        React.createElement("div", { className: "text" }, error && ((error === null || error === void 0 ? void 0 : error.statusText) || (error === null || error === void 0 ? void 0 : error.message)))));
};
exports["default"] = NotFound;
