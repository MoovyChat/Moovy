"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.StyledHeaderOptions = void 0;
var styled_components_1 = require("styled-components");
exports.StyledHeaderOptions = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  box-shadow: 0 0 3px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  .us {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4px;\n    gap: 5px;\n    font-weight: 600;\n    .full {\n      font-size: 14px;\n    }\n    .nick {\n      font-size: 14px;\n      opacity: 0.7;\n    }\n  }\n  .option {\n    width: 100%;\n    height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 0 10px;\n    padding: 10px 0;\n    .icon {\n      flex: 1 1 20%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      pointer-events: none;\n    }\n    .text {\n      flex: 1 1 80%;\n      font-size: 0.9em;\n      font-weight: 500;\n    }\n    :hover {\n      cursor: pointer;\n      .icon {\n        color: #ce2216;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  box-shadow: 0 0 3px;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  .us {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4px;\n    gap: 5px;\n    font-weight: 600;\n    .full {\n      font-size: 14px;\n    }\n    .nick {\n      font-size: 14px;\n      opacity: 0.7;\n    }\n  }\n  .option {\n    width: 100%;\n    height: 20px;\n    display: flex;\n    align-items: center;\n    margin: 0 10px;\n    padding: 10px 0;\n    .icon {\n      flex: 1 1 20%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      pointer-events: none;\n    }\n    .text {\n      flex: 1 1 80%;\n      font-size: 0.9em;\n      font-weight: 500;\n    }\n    :hover {\n      cursor: pointer;\n      .icon {\n        color: #ce2216;\n      }\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.popup;
});
var templateObject_1;
