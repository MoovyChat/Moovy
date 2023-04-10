"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var header_styles_1 = require("./header.styles");
var react_1 = require("react");
var graphql_1 = require("../../generated/graphql");
var userSlice_1 = require("../../redux/slices/userSlice");
var hooks_1 = require("../../redux/hooks");
var constants_1 = require("../../constants");
var moovy_black_svg_1 = require("../../svgs/moovy-black.svg");
var moovy_white_svg_1 = require("../../svgs/moovy-white.svg");
var login_1 = require("../login/login");
var urlClient_1 = require("../../utils/urlClient");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var next_urql_1 = require("next-urql");
var Header = function () {
    var navigate = react_router_dom_1.useNavigate();
    var theme = styled_components_1.useTheme();
    var user = hooks_1.useAppSelector(function (state) { return state.user; });
    var dispatch = hooks_1.useAppDispatch();
    var _a = graphql_1.useCreateUserMutation(), _userResult = _a[0], createUser = _a[1];
    var _b = graphql_1.useLoginMutation(), loginAction = _b[1];
    var _c = graphql_1.useLogoutMutation(), logOutAction = _c[1];
    var _d = graphql_1.useMeQuery({}), me = _d[0], _ = _d[1];
    react_1.useEffect(function () {
        var data = me.data, error = me.error, fetching = me.fetching;
        if (error) {
            console.log(error);
        }
        if (!fetching && data) {
            dispatch(userSlice_1.sliceSetUser(data.me));
        }
    }, [me.fetching]);
    var loginHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var signedInUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.stopPropagation();
                    return [4 /*yield*/, login_1.googleSignIn()];
                case 1:
                    signedInUser = _a.sent();
                    loginAction({ uid: signedInUser.id }).then(function (res) {
                        var _a;
                        var data = res.data;
                        var user = (_a = data === null || data === void 0 ? void 0 : data.login) === null || _a === void 0 ? void 0 : _a.user;
                        if (user) {
                            localStorage.setItem('user', JSON.stringify(user));
                            dispatch(userSlice_1.sliceSetUser(user));
                        }
                        else {
                            var name = signedInUser.name, email = signedInUser.email, photoUrl = signedInUser.photoUrl, nickname = signedInUser.nickname, id = signedInUser.id;
                            var user_1 = {
                                name: name,
                                email: email,
                                photoUrl: photoUrl,
                                nickname: nickname,
                                id: id
                            };
                            createUser({
                                options: user_1
                            })
                                .then(function (res) {
                                var data = res.data, error = res.error;
                                if (error)
                                    console.log(error);
                                var _data = data === null || data === void 0 ? void 0 : data.createUser;
                                localStorage.setItem('user', JSON.stringify(_data));
                                dispatch(userSlice_1.sliceSetUser(_data));
                                loginAction({ uid: _data === null || _data === void 0 ? void 0 : _data.id });
                                navigate('/home');
                            })["catch"](function (err) {
                                console.log('ERR: Unable to create user', err);
                            });
                        }
                        navigate('/home');
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var logOutHandler = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var result, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.stopPropagation();
                    return [4 /*yield*/, logOutAction({})];
                case 1:
                    result = _a.sent();
                    data = result.data;
                    if (data)
                        dispatch(userSlice_1.sliceSetUser(userSlice_1.userState));
                    return [2 /*return*/];
            }
        });
    }); };
    var scrollIntoView = function (id) {
        var divElement = document.getElementById(id);
        if (divElement) {
            var elementRect = divElement.getBoundingClientRect();
            var absoluteElementTop = elementRect.top + window.pageYOffset;
            var middle = absoluteElementTop - window.innerHeight / 6;
            window.scrollTo({ top: middle, behavior: 'smooth' });
        }
    };
    return (react_1["default"].createElement(header_styles_1.HeaderParent, null,
        react_1["default"].createElement("div", { className: "header" },
            react_1["default"].createElement("div", { className: "logo-image" },
                react_1["default"].createElement("img", { className: "image", src: theme.themeType === 'light'
                        ? moovy_black_svg_1["default"]
                        : moovy_white_svg_1["default"], alt: "QuietChat", id: "blur-escape", loading: "lazy", width: "150", height: "150" }),
                react_1["default"].createElement("div", { className: "beta" }, "beta"))),
        react_1["default"].createElement("div", { className: "header-buttons" },
            user && user.id && (react_1["default"].createElement(header_styles_1.HeaderButton, { tabIndex: 0, role: "button", className: "install-button hb", onClick: function (e) {
                    e.stopPropagation();
                    navigate('/home');
                } }, "Home")),
            react_1["default"].createElement(header_styles_1.HeaderButton, { tabIndex: 0, role: "button", className: "install-button hb", onClick: function (e) {
                    e.stopPropagation();
                    scrollIntoView('screenshots');
                } }, "Screenshots"),
            react_1["default"].createElement(header_styles_1.HeaderButton, { tabIndex: 0, role: "button", className: "install-button hb", onClick: function (e) {
                    e.stopPropagation();
                    scrollIntoView('features');
                } }, "Features"),
            user && user.id ? (react_1["default"].createElement(header_styles_1.HeaderButton, { className: "hb", id: "logout-btn", onClick: logOutHandler, role: "button", tabIndex: 0 }, "Logout")) : (react_1["default"].createElement(header_styles_1.HeaderButton, { className: "hb", id: "login-btn", onClick: loginHandler, role: "button", tabIndex: 0 }, "Login")),
            react_1["default"].createElement(header_styles_1.HeaderButton, { className: "install-button hb", role: "button", tabIndex: 0, onClick: function (e) {
                    e.stopPropagation();
                    window.open(constants_1.EXTENSION_URL, '_blank');
                } }, "Install Extension"))));
};
exports["default"] = next_urql_1.withUrqlClient(urlClient_1.urqlClient)(Header);
