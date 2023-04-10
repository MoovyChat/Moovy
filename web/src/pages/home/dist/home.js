"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var home_styles_1 = require("./home.styles");
var graphql_1 = require("../../generated/graphql");
var react_1 = require("react");
var theme_1 = require("../../utils/themes/theme");
var popupSlice_1 = require("../../redux/slices/popupSlice");
var hooks_1 = require("../../redux/hooks");
var centerPanel_1 = require("../panels/center-panel/centerPanel");
var globalStyles_1 = require("../../utils/themes/globalStyles");
var react_helmet_1 = require("react-helmet");
var homeHeader_1 = require("../home-header/homeHeader");
var leftPanel_1 = require("../panels/left-panel/leftPanel");
var logoLoading_1 = require("../logo-loading/logoLoading");
var popup_1 = require("../../components/popup/popup");
var rightPanel_1 = require("../panels/right-panel/rightPanel");
var setProfile_1 = require("../set-profile/setProfile");
var styled_components_1 = require("styled-components");
var react_redux_1 = require("react-redux");
var miscSlice_1 = require("../../redux/slices/miscSlice");
var urlClient_1 = require("../../utils/urlClient");
var react_router_dom_1 = require("react-router-dom");
var next_urql_1 = require("next-urql");
var usePageView_1 = require("../../hooks/usePageView");
var Home = function () {
    var navigate = react_router_dom_1.useNavigate();
    var theme = hooks_1.useAppSelector(function (state) { return state.settings.theme; });
    var isPopupOpen = hooks_1.useAppSelector(function (state) { return state.popup.isPopupOpened; });
    var isNavBarOpen = hooks_1.useAppSelector(function (state) { return state.misc.isNavBarOpen; });
    var user = hooks_1.useAppSelector(function (state) { return state.user; });
    var dispatch = hooks_1.useAppDispatch();
    var _a = react_1.useState(null), prof = _a[0], setProfile = _a[1];
    var _b = react_1.useState(true), customLoading = _b[0], setCustomLoading = _b[1];
    var isProfileExists = hooks_1.useAppSelector(function (state) { return state.misc.isProfileExists; });
    usePageView_1["default"]();
    var handleEscapeKey = function (event) {
        if (event.key.toLowerCase() === 'escape') {
            // code to close modal or perform other action
            if (isPopupOpen) {
                react_redux_1.batch(function () {
                    dispatch(popupSlice_1.sliceSetPopupData(null));
                    dispatch(popupSlice_1.sliceSetIsPopupOpened(false));
                    dispatch(popupSlice_1.sliceSetSelectedElement(''));
                });
            }
            else {
                if (history.state !== null)
                    navigate(-1);
            }
        }
    };
    var profile = graphql_1.useGetUserProfileQuery({
        variables: { uid: user === null || user === void 0 ? void 0 : user.id },
        pause: constants_1.isServer()
    })[0];
    react_1.useEffect(function () {
        var timeout = setTimeout(function () {
            setCustomLoading(false);
        }, 500);
        return function () {
            clearTimeout(timeout);
        };
    }, []);
    react_1.useEffect(function () {
        var data = profile.data, fetching = profile.fetching;
        if (!fetching && data) {
            var _data = data.getUserProfile;
            setProfile(_data);
            if (!_data)
                dispatch(miscSlice_1.sliceSetIsProfileExists(false));
            else if (_data.userId !== '' &&
                _data.fullname !== '' &&
                _data.userId !== null &&
                _data.fullname != null) {
                dispatch(miscSlice_1.sliceSetIsProfileExists(true));
            }
            else
                dispatch(miscSlice_1.sliceSetIsProfileExists(false));
        }
    }, [profile, user]);
    react_1.useMemo(function () {
        document.addEventListener('keydown', handleEscapeKey);
        return function () { return document.removeEventListener('keydown', handleEscapeKey); };
    }, []);
    if (profile.fetching || customLoading)
        return React.createElement(logoLoading_1["default"], null);
    return (React.createElement(styled_components_1.ThemeProvider, { theme: theme === constants_1.themes.DARK ? theme_1.darkThemeForHome : theme_1.lightThemeForHome },
        React.createElement(globalStyles_1.GlobalStyles, null),
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Moovy"),
            React.createElement("meta", { name: "description", content: "Home" }),
            React.createElement("link", { rel: "canonical", href: "" + constants_1.CURRENT_DOMAIN })),
        isProfileExists ? (React.createElement(home_styles_1.HomeParent, null,
            React.createElement(homeHeader_1["default"], { className: "home-header" }),
            React.createElement(home_styles_1.PanelsParent, { className: "panels", isNavBarOpen: isNavBarOpen },
                React.createElement(leftPanel_1["default"], { className: "left" }),
                React.createElement(centerPanel_1["default"], { className: "center", id: "center" }),
                React.createElement(rightPanel_1["default"], { className: "right" })),
            React.createElement(popup_1["default"], null))) : (React.createElement(setProfile_1["default"], { profile: prof }))));
};
exports["default"] = next_urql_1.withUrqlClient(urlClient_1.urqlClient)(Home);
