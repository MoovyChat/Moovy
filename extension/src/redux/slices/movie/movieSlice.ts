import { Movie } from '../../../Utils/interfaces';
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
  sliceSetPastLoadedCount,
  sliceAddMovieName,
  sliceSetLoadNew,
  sliceUpdateViewsCount,
  sliceSetTotalCommentsOfTheMovie,
  sliceSetNewlyLoadedTimeStamp,
  sliceResetMovie,
} = MovieSlice.actions;
export default MovieSlice.reducer;
