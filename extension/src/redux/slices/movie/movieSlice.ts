import { Movie, timeMessage } from '../../../Utils/interfaces';

import { colorLog } from '../../../Utils/utilities';
import { createSlice } from '@reduxjs/toolkit';

export const movieState: Movie = {
  id: '',
  name: '',
  platformId: 1,
  totalCommentsCountOfMovie: 0,
  commentsLoadedCount: 0,
  likesCount: 0,
  favCount: 0,
  totalRepliesCountOfMovie: 0,
  fetchingComments: false,
  lastPage: 0,
  currentPage: 1,
  pastLoadedCount: 0,
  newlyLoadedCommentTimeStamp: '', // For loading new comments...'
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
      else
        colorLog(
          `sliceAddMovieName: Wrong movie id -> stateId: ${state.id} | videoId: ${video_id}`
        );
    },
    sliceSetTotalCommentsOfTheMovie: (state, action) => {
      return { ...state, totalCommentsCountOfMovie: action.payload || 0 };
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
    // sliceAddTimeMessages: (state, action) => {
    //   let initialStateTimeChats = state.timeChats!;
    //   let timeChat = action.payload as timeMessage;
    //   let time = timeChat.time;
    //   let isKeyExist = initialStateTimeChats[time];
    //   if (!isKeyExist) {
    //     let newStateTimeChats = {
    //       ...initialStateTimeChats,
    //       [time]: [timeChat],
    //     };
    //     return { ...state, timeChats: newStateTimeChats };
    //   } else {
    //     let getExistingTimeMap = initialStateTimeChats[time];
    //     let addedTimeMapToExisting = [...getExistingTimeMap, timeChat];
    //     let newStateTimeChats = {
    //       ...initialStateTimeChats,
    //       [time]: addedTimeMapToExisting,
    //     };
    //     return { ...state, timeChats: newStateTimeChats };
    //   }
    // },
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
