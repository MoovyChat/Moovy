"use strict";
exports.__esModule = true;
exports.useFetch = void 0;
var react_1 = require("react");
function useFetch(url) {
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(), data = _b[0], setData = _b[1];
    var _c = react_1.useState(), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        var controller = new AbortController();
        setLoading(true);
        fetch(url, {
            signal: controller.signal,
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(function (response) { return response.text(); })
            .then(function (str) { return new window.DOMParser().parseFromString(str, 'text/xml'); })
            .then(function (data) { return setData(data); })["catch"](setError)["finally"](function () { return setLoading(false); });
        return function () {
            controller.abort();
        };
    }, [url]);
    return { loading: loading, data: data, error: error };
}
exports.useFetch = useFetch;
