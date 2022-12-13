import { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache';
import {
  GetCommentLikesDocument,
  GetCommentLikesQuery,
  GetIsUserLikedCommentDocument,
  GetIsUserLikedCommentQuery,
  GetReplyLikesDocument,
  GetReplyLikesQuery,
  GetUserMiniProfileDocument,
  GetUserMiniProfileQuery,
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  SetCommentLikeMutation,
  SetReplyLikeMutation,
  UpdateProfileMutation,
} from '../generated/graphql';

export const loginChanges = (
  result: LoginMutation,
  _args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  cache.updateQuery({ query: MeDocument }, (data: MeQuery | null) => {
    if (result.login?.error) return data;
    return { me: result.login?.user };
  });
};

export const logOutChanges = (
  _result: LogoutMutation,
  _args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  cache.updateQuery({ query: MeDocument }, (data: MeQuery | null) => {
    return { me: null };
  });
};

export const setCommentLikeChanges = (
  _result: SetCommentLikeMutation,
  _args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  cache.updateQuery(
    { query: GetIsUserLikedCommentDocument },
    (data: GetIsUserLikedCommentQuery | null) => {
      console.log('OldData', data, _result, _info);
      if (data && data.getIsUserLikedComment) {
        const newData: GetIsUserLikedCommentQuery = {
          ...data,
          getIsUserLikedComment: {
            ...data.getIsUserLikedComment,
            isLiked: _result.setCommentLike?.likeStatus.like,
          },
        };
        console.log('NewData', newData);
        return newData;
      } else return data;
    }
  );
};

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
            return newData;
          }
        );
      }
    });
};

export const profileUpdateChanges = (
  _result: UpdateProfileMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  let argsOptions = args.options as any;
  cache
    .inspectFields('Query')
    .filter((field) => field.fieldName === 'getFullUserProfile')
    .forEach((field) => {
      if (argsOptions?.uid === field?.arguments?.uid) {
        cache.updateQuery(
          {
            query: GetUserMiniProfileDocument,
            variables: field.arguments,
          },
          (data: GetUserMiniProfileQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }
            const subData = data.getFullUserProfile;
            const newData: GetUserMiniProfileQuery = {
              ...data,
              getFullUserProfile: {
                ...subData!,
                profile: _result.upsertProfile,
              },
            };
            console.log(newData);
            return newData;
          }
        );
      }
    });
};
