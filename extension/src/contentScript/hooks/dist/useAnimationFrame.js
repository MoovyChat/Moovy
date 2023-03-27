"use strict";
exports.__esModule = true;
exports.useAnimationFrame = void 0;
var react_1 = require("react");
exports.useAnimationFrame = function (callback) {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    var requestRef = react_1.useRef(0);
    var previousTimeRef = react_1.useRef(0);
    var animate = function (time) {
        if (previousTimeRef.current != undefined) {
            var deltaTime = time - previousTimeRef.current;
            callback(deltaTime);
        }
        previousTimeRef.current = time;
        requestAnimationFrame(animate);
    };
    react_1.useEffect(function () {
        requestRef.current = requestAnimationFrame(animate);
        return function () { return cancelAnimationFrame(requestRef.current); };
    }, []);
    return requestRef.current;
};
