import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../../../helpers/interfaces";
import { DEFAULT_BG } from "../../../../helpers/constants";

const movieState: Movie = {
  id: "",
  name: "",
  platformId: 1,
  platform: "",
  totalCommentsCountOfMovie: 0,
  commentsLoadedCount: 0,
  likesCount: 0,
  favCount: 0,
  totalRepliesCountOfMovie: 0,
  fetchingComments: false,
  lastPage: 1,
  currentPage: 1,
  pastLoadedCount: 0,
  newlyLoadedCommentTimeStamp: new Date().getTime().toString(), // For loading new comments...'
  loadNew: 0,
  viewsCount: 0,
  commentCount: 0,
  runtime: 0,
  thumbs: DEFAULT_BG,
  season: "",
  titleId: "",
  fetched: false,
};

const MovieSlice = createSlice({
  name: "movie",
  initialState: movieState,
  reducers: {
    sliceAddMovie: (state, action: { payload: Movie }) => {
      const movieObject: Movie = action.payload;
      return {
        ...state,
        commentCount: movieObject.commentCount,
        favCount: movieObject.favCount,
        id: movieObject.id,
        likesCount: movieObject.likesCount,
        name: movieObject.name,
        platformId: movieObject.platformId,
        runtime: movieObject.runtime,
        season: movieObject.season,
        thumbs: movieObject.thumbs,
        titleId: movieObject.titleId,
        viewsCount: movieObject.viewsCount,
        totalCommentsCountOfMovie: movieObject.commentCount,
        parentTitleName: movieObject.parentTitleName,
      };
    },
    sliceSetPlatform: (state, action) => {
      return { ...state, platform: action.payload };
    },
    sliceAddMovieId: (state, action) => {
      state.id = action.payload;
    },
    sliceAddMovieName: (state, action) => {
      const { video_id, title } = action.payload;
      let updatedTitle = state.name;
      if (state.id === video_id) updatedTitle = title;
      return { ...state, name: updatedTitle };
    },
    sliceSetTotalCommentsOfTheMovie: (state, action) => {
      return { ...state, totalCommentsCountOfMovie: action.payload || 0 };
    },
    sliceUpdateViewsCount: (state, action) => {
      return { ...state, viewsCount: action.payload };
    },
    sliceSetNewlyLoadedTimeStamp: (state, action) => {
      return { ...state, newlyLoadedCommentTimeStamp: action.payload };
    },
    sliceSetPastLoadedCount: (state, action) => {
      return {
        ...state,
        pastLoadedCount: state.pastLoadedCount + action.payload,
      };
    },
    sliceSetLoadNew: (state, action) => {
      return { ...state, loadNew: action.payload };
    },
    sliceResetMovie: () => {
      return movieState;
    },
  },
});

export const {
  sliceAddMovie,
  sliceAddMovieId,
  sliceSetPlatform,
  sliceSetPastLoadedCount,
  sliceAddMovieName,
  sliceSetLoadNew,
  sliceUpdateViewsCount,
  sliceSetTotalCommentsOfTheMovie,
  sliceSetNewlyLoadedTimeStamp,
  sliceResetMovie,
} = MovieSlice.actions;
export default MovieSlice.reducer;
