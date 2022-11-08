import {
  Cache,
  QueryInput,
  ResolveInfo,
  Variables,
} from '@urql/exchange-graphcache';
import {
  GetCommentLikesDocument,
  GetCommentLikesQuery,
  GetReplyLikesDocument,
  GetReplyLikesQuery,
  SetCommentLikeMutation,
  SetReplyLikeMutation,
} from '../generated/graphql';

import { DocumentNode } from 'graphql';

export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  args: Variables,
  qi: DocumentNode,
  fieldName: string,
  fn: (q: Query | null) => Query | null
) {
  cache
    .inspectFields('Query')
    .filter((field) => field.fieldName === fieldName)
    .forEach((field) => {
      if (args.cid === field?.arguments?.cid) {
        cache.updateQuery(
          {
            query: qi,
            variables: field.arguments,
          },
          (data: Query | null) => fn(data)
        );
      }
    });
}

export const commentLikeChanges = (
  _result: SetCommentLikeMutation,
  args: Variables,
  cache: Cache,
  info: ResolveInfo
) => {
  const fields = cache
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
