import { COMMENT } from '../../actionTypes';
import { CommentInfo } from '../../../Utils/interfaces';
import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

const commentState = {
  comments: [] as CommentInfo[],
};

const CommentSlice = createSlice({
  name: 'comments',
  initialState: commentState,
  reducers: {
    sliceComment: (state, action) => {
      const { payload, type } = action.payload;
      switch (type) {
        case COMMENT.ADD_COMMENT:
          return { ...state, comments: [payload, ...state.comments] };
        case COMMENT.DELETE_COMMENT:
          let newComments = state.comments.filter(
            (comment) => comment.id !== payload
          );
          return { ...state, comments: newComments };
        case COMMENT.TOGGLE_REPLY_WINDOW:
          const _newComments = state.comments.map((c) =>
            c.id === payload.id ? { ...c, isReplyWindowOpen: payload.value } : c
          );
          return { ...state, comments: _newComments };
        case COMMENT.SET_REPLY_COUNT:
          const nc = state.comments.map((cmt) =>
            cmt.id === payload.id
              ? { ...cmt, repliesCount: payload.count }
              : cmt
          );
          return { ...state, comments: nc };
        case COMMENT.INCREMENT_REPLY_COUNT:
          const { id } = payload;
          const nc3 = state.comments.map((cmt) =>
            cmt.id === id ? { ...cmt, likesCount: cmt.likesCount + 1 } : cmt
          );
          return { ...state, comments: nc3 };
        case COMMENT.ADD_ALL_COMMENTS:
          let nc4 = _.concat(state.comments, payload as CommentInfo[]);
          let removeDuplicates = _.uniqBy(nc4, 'id');
          return { ...state, comments: removeDuplicates };
        case COMMENT.ADD_COMMENTS_FIRST:
          let nc5 = _.concat(payload as CommentInfo[], state.comments);
          let rd = _.uniqBy(nc5, 'id');
          return { ...state, comments: rd };
        case COMMENT.ADD_TO_COMMENT_LIKES:
          const { _users } = payload;
          const nc7 = state.comments.map((comment) =>
            comment.id === payload.id ? { ...comment, likes: _users } : comment
          );
          return { ...state, comments: nc7 };
        case COMMENT.REMOVE_FROM_COMMENT_LIKES:
          const { commentId, userId } = payload;
          const nc6 = state.comments.map((comment) => {
            if (comment.id === commentId) {
              let UpdatedLikeArray = comment?.likes!.filter(
                (like) => like !== userId
              );
              return {
                ...comment,
                likes: UpdatedLikeArray,
              } as CommentInfo;
            } else return comment as CommentInfo;
          }) as CommentInfo[];
          return { ...state, comment: nc6 };
        case COMMENT.RESET:
          return commentState;
        default:
          return state;
      }
    },
    sliceSetCurrentPage: (
      state,
      action: { payload: { page: number; id: string } }
    ) => {
      const { page, id } = action.payload;
      let newComments = state.comments.map((c) =>
        c.id === id ? { ...c, page } : c
      );
      return { ...state, comments: newComments };
    },
    sliceSetLastPage: (
      state,
      action: { payload: { lastPage: number; id: string } }
    ) => {
      const { lastPage, id } = action.payload;
      let newComments = state.comments.map((c) =>
        c.id === id ? { ...c, lastPage } : c
      );
      return { ...state, comments: newComments };
      return state;
    },
  },
});

export const { sliceComment, sliceSetCurrentPage, sliceSetLastPage } =
  CommentSlice.actions;
export default CommentSlice.reducer;
