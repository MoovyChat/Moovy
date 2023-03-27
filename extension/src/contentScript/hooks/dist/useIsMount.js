"use strict";
exports.__esModule = true;
exports.useIsMount = void 0;
var react_1 = require("react");
exports.useIsMount = function () {
    var isMountRef = react_1.useRef(true);
    react_1.useEffect(function () {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};
