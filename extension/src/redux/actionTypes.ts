// Movie action types

// export const ADD_MOVIE = 'ADD_MOVIE';
// export const GET_MOVIE = 'GET_MOVIE';
// export const ADD_LIKE = 'ADD_LIKE';
// export const UNDO_LIKE = 'UNDO_LIKE';
// export const EDIT_COMMENT = 'EDIT_COMMENT';

export enum COMMENT {
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  TOGGLE_REPLY_WINDOW = 'TOGGLE_REPLY_WINDOW',
  SET_REPLY_COUNT = 'SET_REPLY_COUNT',
  INCREMENT_REPLY_COUNT = 'INCREMENT_REPLY_COUNT',
  ADD_ALL_COMMENTS = 'ADD_ALL_COMMENTS',
  ADD_COMMENTS_FIRST = 'ADD_COMMENTS_FIRST',
  ADD_TO_COMMENT_LIKES = 'ADD_TO_COMMENT_LIKES',
  REMOVE_FROM_COMMENT_LIKES = 'REMOVE_FROM_COMMENT_LIKES',
  RESET = 'RESET',
  REPORT = 'REPORT_COMMENT',
  UNDO_REPORT = 'UNDO_REPORT',
}
