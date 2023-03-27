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
exports.useInsertMovie = void 0;
var loadingSlice_1 = require("../../redux/slices/loading/loadingSlice");
var hooks_1 = require("../../redux/hooks");
var react_1 = require("react");
var graphql_1 = require("../../generated/graphql");
var movieSlice_1 = require("../../redux/slices/movie/movieSlice");
exports.useInsertMovie = function (movieId) {
    var _a = react_1.useState(null), movie = _a[0], setMovie = _a[1];
    var dispatch = hooks_1.useAppDispatch();
    var movieExists = hooks_1.useAppSelector(function (state) { return state.loading.isMovieExists; });
    // GraphQL
    var _b = graphql_1.useInsertMovieInfoMutation(), insertMovieInfo = _b[1];
    var _c = graphql_1.useInsertMovieMutation(), insertMovie = _c[1];
    react_1.useEffect(function () {
        var count = 0;
        if (!movieId)
            return;
        var interval = setInterval(function () {
            if (movieExists) {
                clearInterval(interval);
                return;
            }
            count += 500;
            if (count >= 5000)
                clearInterval(interval);
            if (movieId === null || movieId === undefined || movieId === '') {
                dispatch(loadingSlice_1.sliceSetIsMovieExists(false));
                return;
            }
            chrome.runtime.sendMessage({ type: 'REQUEST_MOVIE_INFO', movieId: movieId }, function (response) {
                var _this = this;
                var _a, _b;
                if (movieExists) {
                    clearInterval(interval);
                    return;
                }
                var result = response.result;
                if (result !== null)
                    clearInterval(interval);
                var type = result === null || result === void 0 ? void 0 : result.type;
                var uniqueId = type !== 'movie' && result && result.seasons
                    ? (_b = (_a = result.seasons[0]) === null || _a === void 0 ? void 0 : _a.episodes[0]) === null || _b === void 0 ? void 0 : _b.id : movieId;
                // insert the same data to the movie and title.
                insertMovieInfo({
                    options: {
                        id: uniqueId + '',
                        year: result === null || result === void 0 ? void 0 : result.year,
                        runtime: result === null || result === void 0 ? void 0 : result.runtime,
                        title: result === null || result === void 0 ? void 0 : result.title,
                        synopsis: result === null || result === void 0 ? void 0 : result.synopsis,
                        storyart: result === null || result === void 0 ? void 0 : result.storyart,
                        rating: result === null || result === void 0 ? void 0 : result.rating,
                        boxart: result === null || result === void 0 ? void 0 : result.boxart,
                        artwork: result === null || result === void 0 ? void 0 : result.artwork,
                        type: result === null || result === void 0 ? void 0 : result.type,
                        advisories: result === null || result === void 0 ? void 0 : result.advisories
                    }
                }).then(function () {
                    console.log(type);
                    if (type === 'movie') {
                        insertMovie({
                            options: {
                                id: movieId,
                                name: result === null || result === void 0 ? void 0 : result.title,
                                season: '',
                                stills: result === null || result === void 0 ? void 0 : result.artwork,
                                synopsis: result === null || result === void 0 ? void 0 : result.synopsis,
                                thumbs: result === null || result === void 0 ? void 0 : result.boxart,
                                parentTitleName: '',
                                likesCount: 0,
                                platformId: 1,
                                runtime: result === null || result === void 0 ? void 0 : result.runtime,
                                titleId: uniqueId + '',
                                year: result === null || result === void 0 ? void 0 : result.year
                            }
                        }).then(function (res) {
                            if (res.error)
                                console.log(res.error);
                            var _data = res.data;
                            if (_data) {
                                var movieData_1 = _data.insertMovie;
                                dispatch(movieSlice_1.sliceAddMovie(movieData_1));
                                setMovie(function () { return movieData_1; });
                                dispatch(loadingSlice_1.sliceValidateMovieLoading(true));
                            }
                        });
                        // TODO: Insert to redux.
                    }
                    else {
                        var _seasons = result === null || result === void 0 ? void 0 : result.seasons;
                        var seasonCount_1 = _seasons === null || _seasons === void 0 ? void 0 : _seasons.length;
                        _seasons &&
                            _seasons.map(function (season, sIndex) {
                                var _episodes = season === null || season === void 0 ? void 0 : season.episodes;
                                var episodeCount = _episodes === null || _episodes === void 0 ? void 0 : _episodes.length;
                                // TODO: Find the episode and insert to redux
                                _episodes.map(function (episode, epIndex) { return __awaiter(_this, void 0, void 0, function () {
                                    var res, error, data, _data_1, text;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, insertMovie({
                                                    options: {
                                                        id: (episode === null || episode === void 0 ? void 0 : episode.id) + '',
                                                        name: episode === null || episode === void 0 ? void 0 : episode.title,
                                                        season: season === null || season === void 0 ? void 0 : season.title,
                                                        stills: episode === null || episode === void 0 ? void 0 : episode.stills,
                                                        synopsis: episode === null || episode === void 0 ? void 0 : episode.synopsis,
                                                        thumbs: episode === null || episode === void 0 ? void 0 : episode.thumbs,
                                                        parentTitleName: result === null || result === void 0 ? void 0 : result.title,
                                                        likesCount: 0,
                                                        platformId: 1,
                                                        runtime: episode === null || episode === void 0 ? void 0 : episode.runtime,
                                                        titleId: uniqueId + '',
                                                        year: season === null || season === void 0 ? void 0 : season.year
                                                    }
                                                })];
                                            case 1:
                                                res = _a.sent();
                                                error = res.error, data = res.data;
                                                if (error)
                                                    console.log(error);
                                                if (data) {
                                                    _data_1 = data.insertMovie;
                                                    text = "(S" + (sIndex + 1) + "/" + seasonCount_1 + "): E" + epIndex + "/" + episodeCount + " - \"" + _data_1.name + "\" added to catalog";
                                                    dispatch(loadingSlice_1.sliceSetLoadingText(text));
                                                    if (epIndex + 1 === episodeCount &&
                                                        sIndex + 1 === seasonCount_1) {
                                                        dispatch(loadingSlice_1.sliceSetIsMovieInsertionFinished(true));
                                                    }
                                                    if (_data_1.id === movieId) {
                                                        setMovie(function () { return _data_1; });
                                                        dispatch(movieSlice_1.sliceAddMovie(_data_1));
                                                        dispatch(loadingSlice_1.sliceSetIsMovieLoaded(true));
                                                        dispatch(loadingSlice_1.sliceSetIsMovieExists(true));
                                                    }
                                                }
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            });
                    }
                });
                if (result && Object.keys(result).length > 1)
                    clearInterval(interval);
            });
            (function () { return clearInterval(interval); });
        }, 500);
    }, [movieId]);
    if (!movieId)
        return null;
    return movie;
};
