import { Movie, timeMessage } from '../../../Utils/interfaces';

import { createSlice } from '@reduxjs/toolkit';

const movieState: Movie = {
  id: '',
  name: '',
  platformId: 1,
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
  thumbs: '',
  season: '',
  titleId: '',
  fetched: false,
};

const MovieSlice = createSlice({
  name: 'movie',
  initialState: movieState,
  reducers: {
    sliceAddMovie: (state, action: { payload: Movie }) => {
      let movieObject: Movie = action.payload;
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
      };
    },
    sliceAddMovieId: (state, action) => {
      state.id = action.payload;
    },
    sliceAddMovieName: (state, action) => {
      const { video_id, title } = action.payload;
      if (state.id === video_id) state.name = title;
    },
    sliceSetTotalCommentsOfTheMovie: (state, action) => {
      return { ...state, totalCommentsCountOfMovie: action.payload || 0 };
    },
    sliceUpdateViewsCount: (state, action) => {
      return { ...state, viewsCount: action.payload };
    },
    sliceSetCommentsLoadedCount: (state, action) => {
      return {
        ...state,
        commentsLoadedCount: state.commentsLoadedCount
          ? state.commentsLoadedCount + action.payload
          : 0,
      };
    },
    sliceSetLikesCount: (state, action) => {
      return { ...state, likesCount: action.payload };
    },
    sliceSetTotalRepliesOfTheMovie: (state, action) => {
      return { ...state, totalCommentsCountOfMovie: action.payload };
    },
    sliceSetLastPage: (state, action) => {
      return { ...state, lastPage: action.payload };
    },
    sliceSetCurrentPage: (state, action) => {
      return { ...state, currentPage: action.payload };
    },
    sliceSetNewlyLoadedTimeStamp: (state, action) => {
      return { ...state, newlyLoadedCommentTimeStamp: action.payload };
    },
    sliceSetFetchingComments: (state, action) => {
      return { ...state, fetchingComments: action.payload };
    },
    sliceSetPastLoadedCount: (state, action) => {
      return {
        ...state,
        pastLoadedCount: state.pastLoadedCount + action.payload,
      };
    },
    sliceSetLoadNew: (state, action) => {
      return { ...state, loadNew: state.loadNew! + 1 };
    },
    sliceSetFavCount: (state, action) => {
      return { ...state, favCount: action.payload };
    },
    sliceSetFetched: (state, action: { payload: boolean }) => {
      return { ...state, fetched: true };
    },
    sliceResetMovie: () => {
      return movieState;
    },
  },
});

export const {
  sliceAddMovie,
  sliceAddMovieId,
  sliceSetFetchingComments,
  sliceSetPastLoadedCount,
  sliceAddMovieName,
  sliceSetLoadNew,
  sliceSetFetched,
  sliceUpdateViewsCount,
  sliceSetTotalCommentsOfTheMovie,
  sliceSetCommentsLoadedCount,
  sliceSetLikesCount,
  sliceSetTotalRepliesOfTheMovie,
  sliceSetNewlyLoadedTimeStamp,
  sliceSetLastPage,
  sliceSetFavCount,
  sliceSetCurrentPage,
  sliceResetMovie,
} = MovieSlice.actions;
export default MovieSlice.reducer;
