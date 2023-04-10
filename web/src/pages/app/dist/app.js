"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
var graphql_1 = require("../../generated/graphql");
var theme_1 = require("../../utils/themes/theme");
var hooks_1 = require("../../redux/hooks");
var globalStyles_1 = require("../../utils/themes/globalStyles");
var header_1 = require("../header/header");
var react_helmet_1 = require("react-helmet");
var logoLoading_1 = require("../logo-loading/logoLoading");
var styled_components_1 = require("styled-components");
var welcome_1 = require("../welcome/welcome");
var userSlice_1 = require("../../redux/slices/userSlice");
var urlClient_1 = require("../../utils/urlClient");
var usePageView_1 = require("../../hooks/usePageView");
var next_urql_1 = require("next-urql");
var App = function () {
    var dispatch = hooks_1.useAppDispatch();
    var _a = graphql_1.useMeQuery()[0], data = _a.data, fetching = _a.fetching, error = _a.error;
    var location = react_router_dom_1.useLocation();
    var navigate = react_router_dom_1.useNavigate();
    var theme = hooks_1.useAppSelector(function (state) { return state.settings.theme; });
    var isAuth = hooks_1.useAppSelector(function (state) { return state.user; });
    usePageView_1["default"]();
    react_1.useMemo(function () {
        if (isAuth && isAuth.id)
            return;
        // Log any errors with fetching user data
        if (error) {
            console.log(error);
        }
        // If user data is successfully fetched and not in the process of fetching, proceed
        if (!fetching && data) {
            // Retrieve user object and current path
            var user = data === null || data === void 0 ? void 0 : data.me;
            // If a user object exists
            if (user) {
                // Update Redux store with user data and save user data in localStorage
                dispatch(userSlice_1.sliceSetUser(user));
                if (location.pathname === '/')
                    navigate('/home');
                else
                    navigate(location.pathname);
                localStorage.setItem('user', JSON.stringify(user));
            }
        }
    }, [fetching, data, error]);
    if (fetching)
        return react_1["default"].createElement(logoLoading_1["default"], null);
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme === constants_1.themes.DARK ? theme_1.darkTheme : theme_1.lightTheme },
        react_1["default"].createElement(react_helmet_1.Helmet, null,
            react_1["default"].createElement("title", null, "Moovy: Welcome"),
            react_1["default"].createElement("meta", { name: "description", content: "Welcome" }),
            react_1["default"].createElement("link", { rel: "canonical", href: "" + constants_1.CURRENT_DOMAIN })),
        react_1["default"].createElement(globalStyles_1.GlobalStyles, null),
        isAuth && isAuth.id ? (react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement(logoLoading_1["default"], null) },
            react_1["default"].createElement(react_router_dom_1.Outlet, null))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(header_1["default"], null),
            react_1["default"].createElement(welcome_1["default"], null)))));
};
exports["default"] = next_urql_1.withUrqlClient(urlClient_1.urqlClient)(App);
