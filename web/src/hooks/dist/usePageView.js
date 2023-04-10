"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var constants_1 = require("../constants");
var usePageView = function () {
    react_1.useEffect(function () {
        react_ga_1["default"].initialize(constants_1.G_TRACKING_ID);
        react_ga_1["default"].pageview(window.location.pathname);
        return function () {
            // Clean up the ReactGA instance on unmount
            react_ga_1["default"].ga('remove');
        };
    }, []);
};
exports["default"] = usePageView;
