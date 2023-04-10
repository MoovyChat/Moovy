"use strict";
exports.__esModule = true;
var enums_1 = require("../../utils/enums");
var md_1 = require("react-icons/md");
var react_1 = require("react");
var hooks_1 = require("../../redux/hooks");
var focusWindow_1 = require("../../components/focus-window/focusWindow");
var homeHeader_styles_1 = require("./homeHeader.styles");
var image_1 = require("../../components/Image/image");
var moovy_black_svg_1 = require("../../svgs/moovy-black.svg");
var moovy_white_svg_1 = require("../../svgs/moovy-white.svg");
var searchBar_1 = require("../../components/search-bar/searchBar");
var miscSlice_1 = require("../../redux/slices/miscSlice");
var styled_components_1 = require("styled-components");
var HomeHeader = function (_a) {
    var className = _a.className;
    var theme = styled_components_1.useTheme();
    var isNavBarOpen = hooks_1.useAppSelector(function (state) { return state.misc.isNavBarOpen; });
    var dispatch = hooks_1.useAppDispatch();
    var navBarHandler = function (e) {
        e.stopPropagation();
        dispatch(miscSlice_1.sliceSetNavBar(!isNavBarOpen));
    };
    var user = hooks_1.useAppSelector(function (state) { return state.user; });
    return (react_1["default"].createElement(homeHeader_styles_1.HomeHeaderParent, { className: className },
        react_1["default"].createElement("div", { className: "logo" },
            react_1["default"].createElement("div", { className: "logo-image" },
                react_1["default"].createElement("img", { className: "image", src: theme.themeType === 'light'
                        ? moovy_black_svg_1["default"]
                        : moovy_white_svg_1["default"], alt: "QuietChat", id: "blur-escape", loading: "lazy", width: "40", height: "40" }),
                react_1["default"].createElement("p", { style: {
                        fontWeight: 600,
                        fontSize: '10px',
                        alignSelf: 'flex-end',
                        backgroundColor: '#993434',
                        color: '#fff',
                        padding: '4px 6px',
                        borderRadius: '10px'
                    } }, "Beta")),
            react_1["default"].createElement("div", { className: "logo-icon", onClick: navBarHandler }, isNavBarOpen ? (react_1["default"].createElement(md_1.MdOutlineClose, { className: "icon", size: 20 })) : (react_1["default"].createElement(md_1.MdMenu, { className: "icon", size: 20 })))),
        react_1["default"].createElement("div", { className: "search" },
            react_1["default"].createElement(searchBar_1["default"], null)),
        react_1["default"].createElement(focusWindow_1["default"], { message: enums_1.FOCUS_WINDOW.HEADER_OPTIONS, dir: enums_1.DIRECTION.BOTTOM_LEFT, height: "200px", width: "220px" },
            react_1["default"].createElement("div", { className: "user" },
                react_1["default"].createElement("div", { className: "logo-image" },
                    react_1["default"].createElement(image_1.Image, { className: "image", src: user.photoUrl, alt: "user", width: "40", height: "40" }))))));
};
exports["default"] = HomeHeader;
