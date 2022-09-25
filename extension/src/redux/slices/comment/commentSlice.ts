import { CommentInfo } from '../../../Utils/interfaces';
import _ from 'lodash';
import { colorLog } from '../../../Utils/utilities';
import { createSlice } from '@reduxjs/toolkit';

export const commentState = {
  comments: [] as CommentInfo[],
};

const CommentSlice = createSlice({
  name: 'comments',
  initialState: commentState,
  reducers: {
    sliceAddComment: (state, action) => {
      const { payload } = action;
      const { comments } = state;
      state.comments = [payload, ...comments];
    },
    sliceDeleteComment: (state, action) => {
      const { comments } = state;
      let refreshedComments = comments.filter(
        (comment) => comment.cid !== (action.payload as CommentInfo).cid
      );
      return {
        ...state,
        comments: refreshedComments,
      };
    },
    sliceAddAllComments: (state, action) => {
      let newComments = _.concat(state.comments, action.payload);
      let removeDuplicates = _.uniqBy(newComments, 'cid');
      return { ...state, comments: removeDuplicates };
    },
    sliceAddCommentsAtFirst: (state, action) => {
      let newComments = _.concat(action.payload, state.comments);
      let removeDuplicates = _.uniqBy(newComments, 'cid');
      return { ...state, comments: removeDuplicates };
    },
    sliceUpdateRepliesInComments: (state, action) => {
      const { parent, rid } = action.payload;
      state.comments = state.comments.map((comment) => {
        if (comment.cid === parent) {
          let updatedReplies = [...comment?.replies!, rid];
          return {
            ...comment,
            replies: updatedReplies,
          } as CommentInfo;
        } else return comment as CommentInfo;
      }) as CommentInfo[];
    },
    sliceAddToLikes: (state, action) => {
      const { commentLikes, cid } = action.payload;
      state.comments = state.comments.map((comment) =>
        comment.cid === cid ? { ...comment, likes: commentLikes } : comment
      );
    },
    sliceRemoveFromLikes: (state, action) => {
      const { commentId, userId } = action.payload;
      state.comments = state.comments.map((comment) => {
        if (comment.cid === commentId) {
          let UpdatedLikeArray = comment?.likes!.filter(
            (like) => like !== userId
          );
          return {
            ...comment,
            likes: UpdatedLikeArray,
          } as CommentInfo;
        } else return comment as CommentInfo;
      }) as CommentInfo[];
    },
    sliceResetComments: () => {
      return commentState;
    },
  },
});

export const {
  sliceAddComment,
  sliceAddCommentsAtFirst,
  sliceDeleteComment,
  sliceAddAllComments,
  sliceAddToLikes,
  sliceRemoveFromLikes,
  sliceUpdateRepliesInComments,
  sliceResetComments,
} = CommentSlice.actions;
export default CommentSlice.reducer;
