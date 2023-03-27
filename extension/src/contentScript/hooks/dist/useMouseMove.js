"use strict";
exports.__esModule = true;
exports.useMousePosition = void 0;
var react_1 = require("react");
exports.useMousePosition = function () {
    var _a = react_1.useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    react_1.useEffect(function () {
        var setFromEvent = function (e) {
            return setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', setFromEvent);
        return function () {
            window.removeEventListener('mousemove', setFromEvent);
        };
    }, []);
    return position;
};
