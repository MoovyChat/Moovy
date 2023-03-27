"use strict";
exports.__esModule = true;
exports.useFetchMovie = void 0;
var movieSlice_1 = require("../../redux/slices/movie/movieSlice");
var loadingSlice_1 = require("../../redux/slices/loading/loadingSlice");
var graphql_1 = require("../../generated/graphql");
var react_1 = require("react");
var constants_1 = require("../../constants");
var hooks_1 = require("../../redux/hooks");
exports.useFetchMovie = function (movieId) {
    var _a = react_1.useState(null), movie = _a[0], setMovie = _a[1];
    var dispatch = hooks_1.useAppDispatch();
    var _b = graphql_1.useUpdateMovieViewCountMutation(), incrementMovieViewCount = _b[1];
    var getMovieInfo = graphql_1.useGetMovieQuery({
        variables: { mid: movieId },
        pause: constants_1.isServerSide()
    })[0];
    react_1.useMemo(function () {
        if (!movieId)
            return;
        if (movie)
            return;
        var data = getMovieInfo.data, error = getMovieInfo.error, fetching = getMovieInfo.fetching;
        if (error) {
            dispatch(loadingSlice_1.sliceSetIsMovieExists(false));
            dispatch(movieSlice_1.sliceResetMovie());
        }
        if (!fetching && data) {
            var _data_1 = data.getMovie;
            if (_data_1) {
                dispatch(movieSlice_1.sliceAddMovie(_data_1));
                dispatch(loadingSlice_1.sliceValidateMovieLoading(true));
                // Increase views count
                incrementMovieViewCount({ mid: _data_1.id }).then(function (res) {
                    var error = res.error, data = res.data;
                    if (error)
                        console.log(error);
                    if (data) {
                        var _data_2 = data.updateMovieViewCount + 1;
                        dispatch(movieSlice_1.sliceUpdateViewsCount(_data_2));
                    }
                });
                setMovie(function () { return _data_1; });
            }
        }
    }, [getMovieInfo, movieId]);
    if (!movieId)
        return null;
    return movie;
};
