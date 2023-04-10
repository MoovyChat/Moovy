"use strict";
exports.__esModule = true;
require("./footer.css");
var constants_1 = require("../../../constants");
var footer_styles_1 = require("./footer.styles");
var react_1 = require("react");
var moovy_text_logo_black_png_1 = require("../../../svgs/moovy-text-logo-black.png");
var moovy_text_logo_white_png_1 = require("../../../svgs/moovy-text-logo-white.png");
var patreon_word_webp_1 = require("../../../static/images/patreon-word.webp");
var lazyLoad_1 = require("../../../lazyLoad");
var styled_components_1 = require("styled-components");
var FaDiscord = lazyLoad_1.lazyIconFa('FaDiscord');
var FaTwitter = lazyLoad_1.lazyIconFa('FaTwitter');
var FaTiktok = lazyLoad_1.lazyIconFa('FaTiktok');
var FaInstagram = lazyLoad_1.lazyIconFa('FaInstagram');
var Footer = function (_a) {
    var id = _a.id;
    var theme = styled_components_1.useTheme();
    return (react_1["default"].createElement(footer_styles_1.StyledFooter, { id: id },
        react_1["default"].createElement("div", { className: "image-container" },
            react_1["default"].createElement("img", { src: theme.themeType === 'light' ? moovy_text_logo_black_png_1["default"] : moovy_text_logo_white_png_1["default"], alt: "moovy", width: "200px" })),
        react_1["default"].createElement("div", { className: "links-block" },
            react_1["default"].createElement("div", { className: "block" },
                react_1["default"].createElement("div", { className: "title" }, "Legal"),
                react_1["default"].createElement("div", { className: "links" },
                    react_1["default"].createElement(footer_styles_1.FooterLink, { href: "/terms-and-conditions", target: "_blank" }, "Terms & Conditions"),
                    react_1["default"].createElement(footer_styles_1.FooterLink, { href: "/privacy", target: "_blank" }, "Privacy Policy"),
                    react_1["default"].createElement(footer_styles_1.FooterLink, { href: "/cookie-policy", target: "_blank" }, "Cookie Policy"))),
            react_1["default"].createElement("div", { className: "block" },
                react_1["default"].createElement("div", { className: "title" }, "Contact"),
                react_1["default"].createElement("div", { className: "links" },
                    react_1["default"].createElement(footer_styles_1.FooterLink, { className: "special", href: "mailto:support@moovychat.com", target: "_blank" }, "support@moovychat.com"),
                    react_1["default"].createElement(footer_styles_1.FooterLink, { href: "/about-us", target: "_blank" }, "About us"),
                    react_1["default"].createElement(footer_styles_1.FooterLink, { href: "/contact", target: "_blank" }, "Contact us"),
                    react_1["default"].createElement("div", null,
                        "\u00A9 ",
                        new Date().getFullYear(),
                        " MoovyChat"))),
            react_1["default"].createElement("div", { className: "block" },
                react_1["default"].createElement("div", { className: "title" }, "Socials"),
                react_1["default"].createElement("div", { className: "links" },
                    react_1["default"].createElement(react_1.Suspense, null,
                        react_1["default"].createElement(footer_styles_1.SocialButton, { onClick: function (e) {
                                e.stopPropagation();
                                window.open(constants_1.DISCORD_INVITE_LINK, '_blank');
                            } },
                            react_1["default"].createElement(FaDiscord, { color: "cornflowerblue", size: 20, style: { pointerEvents: 'none' } }),
                            react_1["default"].createElement(footer_styles_1.FooterLink, null, "Discord")),
                        react_1["default"].createElement(footer_styles_1.SocialButton, { onClick: function (e) {
                                e.stopPropagation();
                                window.open(constants_1.TWITTER_LINK, '_blank');
                            } },
                            react_1["default"].createElement(FaTwitter, { color: "deepskyblue", size: 20, style: { pointerEvents: 'none' } }),
                            react_1["default"].createElement(footer_styles_1.FooterLink, null, "Twitter")),
                        react_1["default"].createElement(footer_styles_1.SocialButton, { onClick: function (e) {
                                e.stopPropagation();
                                window.open(constants_1.TIKTOK_LINK, '_blank');
                            } },
                            react_1["default"].createElement(FaTiktok, { className: "icon", size: 20, style: { pointerEvents: 'none' } }),
                            react_1["default"].createElement(footer_styles_1.FooterLink, null, "Tiktok")),
                        react_1["default"].createElement(footer_styles_1.SocialButton, { onClick: function (e) {
                                e.stopPropagation();
                                window.open(constants_1.INSTAGRAM_LINK, '_blank');
                            } },
                            react_1["default"].createElement(FaInstagram, { color: "hotpink", size: 20, style: { pointerEvents: 'none' } }),
                            react_1["default"].createElement(footer_styles_1.FooterLink, null, "Instagram"))))),
            react_1["default"].createElement("div", { className: "block" },
                react_1["default"].createElement("div", { className: "title" }, "Donate & Support"),
                react_1["default"].createElement("div", { className: "links" },
                    react_1["default"].createElement("div", { className: "patreon", tabIndex: 0, onClick: function (e) {
                            e.stopPropagation();
                            window.open(constants_1.PATREON, '_blank');
                        } },
                        react_1["default"].createElement("div", { className: "logo", id: "text-focus" },
                            react_1["default"].createElement("img", { src: patreon_word_webp_1["default"], alt: "patreon", id: "text-focus", width: 120 }))),
                    react_1["default"].createElement("div", { className: "bmc", tabIndex: 0, onClick: function (e) {
                            e.stopPropagation();
                            window.open(constants_1.BUY_ME_A_COFFEE, '_blank');
                        } },
                        react_1["default"].createElement("div", { className: "logo", id: "text-focus" },
                            react_1["default"].createElement("img", { src: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png", alt: "bmc", id: "text-focus", width: 120 }))))))));
};
exports["default"] = Footer;
