"use strict";
exports.__esModule = true;
var leftPanel_styles_1 = require("./leftPanel.styles");
var md_1 = require("react-icons/md");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var popupSlice_1 = require("../../../redux/slices/popupSlice");
var react_router_dom_1 = require("react-router-dom");
var profilePic_1 = require("../../../components/profilePic/profilePic");
var miscSlice_1 = require("../../../redux/slices/miscSlice");
var settingsSlice_1 = require("../../../redux/slices/settingsSlice");
var constants_1 = require("../../../constants");
var hooks_1 = require("../../../redux/hooks");
var LeftPanel = function (_a) {
    var className = _a.className;
    var ref = react_1.useRef(null);
    var user = hooks_1.useAppSelector(function (state) { return state.user; });
    var theme = hooks_1.useAppSelector(function (state) { return state.settings.theme; });
    var dispatch = react_redux_1.useDispatch();
    var themeHandler = function (e) {
        e.stopPropagation();
        var value = theme === constants_1.themes.DARK ? false : true;
        dispatch(settingsSlice_1.sliceSetTheme(value));
    };
    var iconSize = 25;
    // log changed data
    react_1.useEffect(function () {
        // console.log(user.photoUrl);
    }, [user.photoUrl]);
    react_1.useEffect(function () {
        function handleOutSideClick(event) {
            var _a;
            if (ref && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                dispatch(miscSlice_1.sliceSetNavBar(false));
            }
        }
        document.addEventListener('click', handleOutSideClick);
        return function () {
            document.removeEventListener('click', handleOutSideClick);
        };
    }, [ref]);
    var linkClickHandler = function (e) {
        react_redux_1.batch(function () {
            dispatch(popupSlice_1.sliceSetIsPopupOpened(false));
            dispatch(popupSlice_1.sliceSetSelectedElement(''));
            dispatch(miscSlice_1.sliceSetNavBar(false));
        });
    };
    return (react_1["default"].createElement(leftPanel_styles_1.LeftParent, { className: className, ref: ref },
        react_1["default"].createElement("div", { className: "parent-profile" },
            react_1["default"].createElement("div", { className: "profile" },
                react_1["default"].createElement(profilePic_1["default"], { src: user === null || user === void 0 ? void 0 : user.photoUrl, user: user, tooltip: true })),
            react_1["default"].createElement("div", { className: "profile-text" },
                react_1["default"].createElement("div", { className: "welcome-text" }, "Welcome back"),
                react_1["default"].createElement("div", { className: "user-text" }, user.nickname))),
        react_1["default"].createElement("div", { className: "options" },
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "/home", className: "option", end: true, onClick: linkClickHandler },
                react_1["default"].createElement("div", { className: "icon feed" },
                    react_1["default"].createElement(md_1.MdDynamicFeed, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Feed")),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "catalog", className: "option", onClick: linkClickHandler },
                react_1["default"].createElement("div", { className: "icon catalog" },
                    react_1["default"].createElement(md_1.MdStorage, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Catalog")),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "profile/" + user.nickname, className: "option", onClick: linkClickHandler },
                react_1["default"].createElement("div", { className: "icon p" },
                    react_1["default"].createElement(md_1.MdPerson, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Profile")),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "activity/" + user.nickname + "/favorites", className: "option", onClick: linkClickHandler },
                react_1["default"].createElement("div", { className: "icon favorites" },
                    react_1["default"].createElement(md_1.MdFavorite, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Favorites")),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "comments/" + user.nickname, className: "option", onClick: linkClickHandler },
                react_1["default"].createElement("div", { className: "icon comments" },
                    react_1["default"].createElement(md_1.MdModeComment, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Comments")),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "replies/" + user.nickname, className: "option", onClick: linkClickHandler },
                react_1["default"].createElement("div", { className: "icon replies" },
                    react_1["default"].createElement(md_1.MdOutlineReply, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Replies")),
            react_1["default"].createElement(react_router_dom_1.NavLink, { to: "notifications", className: "option", onClick: linkClickHandler },
                react_1["default"].createElement("div", { className: "icon notifications" },
                    react_1["default"].createElement(md_1.MdNotificationsActive, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Notifications")),
            react_1["default"].createElement("div", { className: "option", onClick: themeHandler }, theme === constants_1.themes.DARK ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { className: "icon" },
                    react_1["default"].createElement(md_1.MdOutlineWbSunny, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Light"))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { className: "icon" },
                    react_1["default"].createElement(md_1.MdNightlight, { size: iconSize })),
                react_1["default"].createElement("div", { className: "text" }, "Dark"))))),
        react_1["default"].createElement(leftPanel_styles_1.StyledLinks, null,
            react_1["default"].createElement("div", { onClick: function (e) {
                    e.stopPropagation();
                    window.open('/terms-and-conditions', '_blank');
                } }, "Terms of Service"),
            react_1["default"].createElement("div", { onClick: function (e) {
                    e.stopPropagation();
                    window.open('/privacy', '_blank');
                } }, "Privacy Policy"),
            react_1["default"].createElement("div", { onClick: function (e) {
                    e.stopPropagation();
                    window.open('/cookie-policy', '_blank');
                } }, "Cookie Policy"),
            react_1["default"].createElement("div", { onClick: function (e) {
                    e.stopPropagation();
                    window.open('/about-us', '_blank');
                } }, "About us"),
            react_1["default"].createElement("div", { onClick: function (e) {
                    e.stopPropagation();
                    window.open('/contact', '_blank');
                } }, "Contact us"),
            react_1["default"].createElement("div", null,
                "\u00A9 ",
                new Date().getFullYear(),
                " MoovyChat."))));
};
exports["default"] = LeftPanel;
