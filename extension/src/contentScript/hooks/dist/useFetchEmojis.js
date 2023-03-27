"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var emojibase_1 = require("emojibase");
var db_1 = require("../../indexedDB/db");
var react_1 = require("react");
var useFetchEmojis = function () {
    var _a = react_1.useState({}), refinedGroups = _a[0], setRefinedGroups = _a[1];
    var fetchEmojis = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var rg, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rg = {};
                    return [4 /*yield*/, emojibase_1.fetchFromCDN('en/data.json')];
                case 1:
                    data = _a.sent();
                    // Refining data to the object with keys and subKeys.
                    return [4 /*yield*/, data.map(function (em) {
                            var _a, _b, _c, _d, _e, _f;
                            var key = em.group;
                            var subKey = em.subgroup;
                            if (rg[key] === undefined) {
                                rg = __assign(__assign({}, rg), (_a = {}, _a[key] = (_b = {},
                                    _b[subKey] = [em],
                                    _b), _a));
                            }
                            else {
                                if (rg[key][subKey] === undefined) {
                                    rg = __assign(__assign({}, rg), (_c = {}, _c[key] = __assign(__assign({}, rg[key]), (_d = {}, _d[subKey] = [em], _d)), _c));
                                }
                                else
                                    rg = __assign(__assign({}, rg), (_e = {}, _e[key] = __assign(__assign({}, rg[key]), (_f = {}, _f[subKey] = __spreadArrays(rg[key][subKey], [em]), _f)), _e));
                            }
                        })];
                case 2:
                    // Refining data to the object with keys and subKeys.
                    _a.sent();
                    return [2 /*return*/, rg];
            }
        });
    }); }, []);
    react_1.useEffect(function () {
        // Once we have the data, inject the data into the indexedDB.
        var runIndexDb = function () { return __awaiter(void 0, void 0, void 0, function () {
            var record, refGroups, e_1, emojis, forFrequent, forRecent, e_2, refGroups, e_3, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 17, , 18]);
                        return [4 /*yield*/, db_1.db.emojis.get(1)];
                    case 1:
                        record = _a.sent();
                        if (!!record) return [3 /*break*/, 12];
                        return [4 /*yield*/, fetchEmojis()];
                    case 2:
                        refGroups = _a.sent();
                        setRefinedGroups(refGroups);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, db_1.db.emojis.add({
                                emojis: refGroups
                            })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log("Failed to add emojiDB " + e_1);
                        return [3 /*break*/, 6];
                    case 6:
                        emojis = refGroups[0];
                        forFrequent = emojis[0].slice(0, 10).map(function (emoji, key) { return ({
                            id: key,
                            count: 1,
                            emoji: emoji
                        }); });
                        forRecent = emojis[1].slice(0, 10).map(function (emoji, key) { return ({
                            id: key,
                            emoji: emoji
                        }); });
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 10, , 11]);
                        return [4 /*yield*/, db_1.db.frequent.bulkAdd(forFrequent)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, db_1.db.recent.bulkAdd(forRecent)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        e_2 = _a.sent();
                        console.log("Failed to add emojiDB " + e_2);
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 16];
                    case 12:
                        _a.trys.push([12, 15, , 16]);
                        return [4 /*yield*/, db_1.db.emojis.get(1)];
                    case 13:
                        refGroups = _a.sent();
                        return [4 /*yield*/, setRefinedGroups(refGroups === null || refGroups === void 0 ? void 0 : refGroups.emojis)];
                    case 14:
                        _a.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        e_3 = _a.sent();
                        console.log("Failed to add emojiDB " + e_3);
                        return [3 /*break*/, 16];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        error_1 = _a.sent();
                        console.log("Failed to add emojiDB " + error_1);
                        return [3 /*break*/, 18];
                    case 18: return [2 /*return*/];
                }
            });
        }); };
        runIndexDb();
    }, []);
    return refinedGroups;
};
exports["default"] = useFetchEmojis;
