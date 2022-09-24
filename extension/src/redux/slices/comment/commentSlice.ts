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
      return { ...state, comments: _.concat(state.comments, action.payload) };
    },
    sliceAddCommentsAtFirst: (state, action) => {
      return { ...state, comments: _.concat(action.payload, state.comments) };
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
    sliceRemoveReplyFromComments: (state, action) => {
      const { parent, rid } = action.payload;
      let newComments = state.comments.filter((comment) => {
        if (comment.cid === parent) {
          let UpdatedReplyArray = comment?.replies!.filter(
            (id: string) => id !== rid
          );
          return {
            ...comment,
            replies: UpdatedReplyArray,
          } as CommentInfo;
        } else return comment as CommentInfo;
      }) as CommentInfo[];
      console.log(newComments);
      return { ...state, comments: newComments };
    },
    sliceAddToLikes: (state, action) => {
      const { commentId, userId } = action.payload;
      state.comments = state.comments.map((comment) => {
        if (comment.cid === commentId) {
          let findLike = comment.likes!.find((like) => like === userId);
          if (findLike === undefined) {
            let updatedLikes = [...comment?.likes!, userId];
            return {
              ...comment,
              likes: updatedLikes,
            } as CommentInfo;
          }
        } else return comment as CommentInfo;
      }) as CommentInfo[];
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
  sliceRemoveReplyFromComments,
  sliceResetComments,
} = CommentSlice.actions;
export default CommentSlice.reducer;
