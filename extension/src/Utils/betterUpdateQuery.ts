import { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache';
import {
  Comment,
  GetCommentLikesDocument,
  GetCommentLikesQuery,
  GetCommentRepliesDocument,
  GetCommentRepliesQuery,
  GetCommentsOfTheMovieDocument,
  GetCommentsOfTheMovieQuery,
  GetReplyLikesDocument,
  GetReplyLikesQuery,
  InsertCommentMutation,
  InsertReplyMutation,
  PageInfo,
  Reply,
  SetCommentLikeMutation,
  SetReplyLikeMutation,
} from '../generated/graphql';

import _ from 'lodash';

export const commentLikeChanges = (
  _result: SetCommentLikeMutation,
  args: Variables,
  cache: Cache,
  info: ResolveInfo
) => {
  cache
    .inspectFields('Query')
    .filter((field) => field.fieldName === 'getCommentLikes')
    .forEach((field) => {
      if (args.cid === field?.arguments?.cid) {
        cache.updateQuery(
          {
            query: GetCommentLikesDocument,
            variables: field.arguments,
          },
          (data: GetCommentLikesQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }
            // When I click like button, I am getting the past data of liked
            // users and likes count.
            let childElem = data.getCommentLikes;
            const oldLikesCount = childElem?.likesCount!;
            const oldLikedUsers = childElem?.likes!;
            // console.log('oldData', data);
            // console.log('newResult', _result);
            const user = _result.setCommentLike?.user!;
            const likeStatus = _result.setCommentLike?.likeStatus!;
            const isLike = likeStatus?.like;
            const newData = {
              ...data,
              getCommentLikes: {
                ...childElem,
                likesCount: isLike
                  ? oldLikesCount + 1
                  : Math.max(oldLikesCount - 1, 0),
                likes: isLike
                  ? [...oldLikedUsers, user]
                  : oldLikedUsers?.filter((u) => u.id !== user.id),
              },
            };
            // console.log('newData', newData);
            return newData as any;
          }
        );
      }
    });
};

export const replyLikeChanges = (
  _result: SetReplyLikeMutation,
  args: Variables,
  cache: Cache,
  info: ResolveInfo
) => {
  const fields = cache
    .inspectFields('Query')
    .filter((field) => field.fieldName === 'getReplyLikes')
    .forEach((field) => {
      if (args.rid === field?.arguments?.rid) {
        cache.updateQuery(
          {
            query: GetReplyLikesDocument,
            variables: field.arguments,
          },
          (data: GetReplyLikesQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }
            // When I click like button, I am getting the past data of liked
            // users and likes count.
            let childElem = data.getReplyLikes;
            const oldLikesCount = childElem?.likesCount!;
            const oldLikedUsers = childElem?.likes!;
            // console.log('oldData', data);
            // console.log('newResult', _result);
            const user = _result.setReplyLike?.user!;
            const likeStatus = _result.setReplyLike?.likeStatus!;
            const isLike = likeStatus.like;
            const newData = {
              ...data,
              getReplyLikes: {
                ...childElem,
                likesCount: isLike ? oldLikesCount + 1 : oldLikesCount - 1,
                likes: isLike
                  ? [...oldLikedUsers, user]
                  : oldLikedUsers?.filter((u) => u.id !== user.id),
              },
            };
            // console.log('newData', newData);
            return newData;
          }
        );
      }
    });
};

export const insertCommentChanges = (
  _result: InsertCommentMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  cache.inspectFields('Query').map((field) => {
    if (field.fieldName === 'getCommentsOfTheMovie') {
      if (
        field?.arguments?.mid === (args?.options as any).movieId! &&
        field?.arguments?.page === 1
      ) {
        cache.updateQuery(
          {
            query: GetCommentsOfTheMovieDocument,
            variables: field.arguments,
          },
          (data: GetCommentsOfTheMovieQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }
            let childElem = data.getCommentsOfTheMovie!;
            let oldComments = childElem?.comments as Comment[];
            let totalCommentCount = childElem?.totalCommentCount;
            const newData = {
              ...data,
              getCommentsOfTheMovie: {
                ...childElem,
                comments: [_result.insertComment as Comment, ...oldComments],
                totalCommentCount: totalCommentCount + 1,
              },
            };
            return newData;
          }
        );
      }
    } else return field;
  });
};

export const insertReplyChanges = (
  _result: InsertReplyMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
): void => {
  const parentCommentId = (args?.options as Reply).parentCommentId;

  // Get the existing replies for the parent comment from the cache
  const existingReplies = cache.readQuery<GetCommentRepliesQuery>({
    query: GetCommentRepliesDocument,
    variables: {
      cid: parentCommentId,
      first: 5,
    },
  });
  // If there are no existing replies, manually update the cache with the new reply
  if (!existingReplies) {
    const newReply = _result.insertReply;
    const newNodes = [newReply];
    const newTotalCount = 1;
    const newEdges = newNodes.map((node) => ({
      __typename: 'ReplyEdge',
      cursor: node?.id,
      node,
    }));
    const newPageInfo: PageInfo = {
      __typename: 'PageInfo',
      endCursor: newEdges[newEdges.length - 1].cursor,
      hasNextPage: false,
    };
    const newData: GetCommentRepliesQuery = {
      getCommentReplies: {
        __typename: 'ReplyConnection',
        nodes: newNodes as any,
        totalCount: newTotalCount,
        edges: newEdges as any,
        pageInfo: newPageInfo,
      },
    };

    cache.updateQuery(
      {
        query: GetCommentRepliesDocument,
        variables: {
          cid: parentCommentId,
          first: 5,
        },
      },
      (_data: GetCommentRepliesQuery | null) => {
        return newData;
      }
    );
  }
  cache.inspectFields('Query').map((field) => {
    if (field.fieldName === 'getCommentReplies') {
      if (field?.arguments?.cid === (args?.options as Reply).parentCommentId) {
        cache.updateQuery(
          {
            query: GetCommentRepliesDocument,
            variables: field.arguments,
          },
          (data: GetCommentRepliesQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }

            const existingReplies = data.getCommentReplies?.nodes as
              | Reply[]
              | undefined;
            const newReply = _result.insertReply;

            if (!existingReplies || !newReply) {
              console.log('No existing comments or new comment, returning');
              return null;
            }
            const existingEdges = data.getCommentReplies?.edges || [];

            let newNodes = [newReply, ...existingReplies];
            newNodes = _.uniqBy(newNodes, 'id');
            const newTotalCount = data.getCommentReplies?.totalCount
              ? data.getCommentReplies.totalCount + 1
              : 1;
            const newEdges = newNodes.map((node) => ({
              __typename: 'ReplyEdge',
              cursor: node.id,
              node,
            }));

            const newPageInfo: PageInfo = {
              __typename: 'PageInfo',
              endCursor: newEdges[newEdges.length - 1].cursor,
              hasNextPage: existingEdges.length < newTotalCount,
            };

            const newData: GetCommentRepliesQuery = {
              ...data,
              getCommentReplies: {
                ...data.getCommentReplies,
                nodes: newNodes as any,
                totalCount: newTotalCount,
                edges: newEdges as any,
                pageInfo: newPageInfo,
              },
            };
            return newData;
          }
        );
      }
    } else if (field.fieldName === 'getCommentsOfTheMovie') {
      if (field?.arguments?.mid === (args?.options as Reply).movieId) {
        cache.updateQuery(
          {
            query: GetCommentsOfTheMovieDocument,
            variables: field.arguments,
          },
          (data: GetCommentsOfTheMovieQuery | null) => {
            const _data = data?.getCommentsOfTheMovie!;
            const comments = _data?.comments;
            const reply = args.options as Reply;
            const commentId = reply.parentCommentId;
            const filteredComment = comments?.filter(
              (cmt) => cmt.id === commentId
            );
            let updatedComments = comments;
            if (filteredComment && filteredComment.length > 0) {
              updatedComments = comments?.map((cmt) =>
                cmt.id === parentCommentId
                  ? {
                      ...cmt,
                      repliesCount: filteredComment[0].repliesCount! + 1,
                    }
                  : cmt
              );
            }

            return {
              ...data,
              getCommentsOfTheMovie: {
                ...data?.getCommentsOfTheMovie!,
                comments: updatedComments,
              },
            };
          }
        );
      }
    }
  });
};
