import { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache';
import {
  Comment,
  GetCommentLikesDocument,
  GetCommentLikesQuery,
  GetCommentsOfTheMovieQDocument,
  GetCommentsOfTheMovieQQuery,
  GetIsUserLikedCommentDocument,
  GetIsUserLikedCommentQuery,
  GetMovieDocument,
  GetMovieQuery,
  GetRepliesOfCommentDocument,
  GetRepliesOfCommentQuery,
  GetRepliesOfReplyDocument,
  GetRepliesOfReplyQuery,
  GetReplyLikesDocument,
  GetReplyLikesQuery,
  GetUserByNickNameDocument,
  GetUserByNickNameQuery,
  GetUserMiniProfileDocument,
  GetUserMiniProfileQuery,
  InsertCommentMutation,
  InsertReplyMutation,
  IsFollowingUserDocument,
  IsFollowingUserQuery,
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  Reply,
  SetCommentLikeMutation,
  SetReplyLikeMutation,
  ToggleFollowMutation,
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
      if (data && data.getIsUserLikedComment) {
        const newData: GetIsUserLikedCommentQuery = {
          ...data,
          getIsUserLikedComment: {
            ...data.getIsUserLikedComment,
            isLiked: _result.setCommentLike?.likeStatus.like,
          },
        };

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
      if (field?.arguments?.mid === (args?.options as any).movieId!) {
        cache.updateQuery(
          {
            query: GetCommentsOfTheMovieQDocument,
            variables: field?.arguments,
          },
          (data: GetCommentsOfTheMovieQQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }
            const subData = data.getCommentsOfTheMovie!;
            const comments = subData?.comments! as Comment[];
            const totalCommentCount = subData?.totalCommentCount!;
            const newData = {
              ...data,
              getCommentsOfTheMovie: {
                ...subData,
                comments: [...comments, _result.insertComment as Comment],
                totalCommentCount: totalCommentCount! + 1,
              },
            };
            return newData as any;
          }
        );
      }
    } else if (field?.fieldName === 'getMovie') {
      if (field?.arguments?.mid === (args?.options as any).movieId!) {
        cache.updateQuery(
          {
            query: GetMovieDocument,
            variables: field?.arguments,
          },
          (data: GetMovieQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }
            const subData = data.getMovie!;
            const commentCount = subData?.commentCount!;
            const newData = {
              ...data,
              getMovie: {
                ...subData,
                commentCount: commentCount + 1,
              },
            };
            return newData as any;
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
) => {
  const allFields = cache.inspectFields('Query');
  const repliesOfCommentField = allFields.filter(
    (field) => field.fieldName === 'getRepliesOfComment'
  );
  repliesOfCommentField.forEach((field) => {
    if (field.arguments?.cid! === (args.options as any).parentCommentId) {
      cache.updateQuery(
        {
          query: GetRepliesOfCommentDocument,
          variables: field.arguments,
        },
        (data: GetRepliesOfCommentQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const subData = data.getRepliesOfComment!;
          const repliesCount = subData?.repliesCount!;
          const replies = subData?.replies! as Reply[];
          const newData: GetRepliesOfCommentQuery = {
            ...data,
            getRepliesOfComment: {
              ...subData,
              replies: [...replies, _result?.insertReply! as any],
              repliesCount: repliesCount + 1,
            },
          };
          return newData;
        }
      );
    }
  });

  const repliesOfReplyField = allFields.filter(
    (field) => field.fieldName === 'getRepliesOfReply'
  );
  repliesOfReplyField.forEach((field) => {
    if (field.arguments?.rid! === (args.options as any).parentReplyId) {
      cache.updateQuery(
        {
          query: GetRepliesOfReplyDocument,
          variables: field.arguments,
        },
        (data: GetRepliesOfReplyQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const subData = data.getRepliesOfReply!;
          const repliesCount = subData?.repliesCount!;
          const replies = subData?.replies! as Reply[];
          const newData: GetRepliesOfReplyQuery = {
            ...data,
            getRepliesOfReply: {
              ...subData,
              replies: [...replies, _result?.insertReply! as any],
              repliesCount: repliesCount + 1,
            },
          };
          return newData;
        }
      );
    }
  });
};

export const toggleFollowChanges = (
  _result: ToggleFollowMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const isFollowingUserField = allFields.filter(
    (field) => field.fieldName === 'isFollowingUser'
  );
  isFollowingUserField.forEach((field) => {
    if (field.arguments?.uid! === args.uid) {
      cache.updateQuery(
        {
          query: IsFollowingUserDocument,
          variables: field.arguments,
        },
        (data: IsFollowingUserQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const newData: IsFollowingUserQuery = {
            isFollowingUser: _result.toggleFollow?.follows,
          };
          return newData;
        }
      );
    }
  });

  const getUserByUserNameField = allFields.filter(
    (field) => field.fieldName === 'getUserByUserName'
  );
  getUserByUserNameField.forEach((field) => {
    if (field.arguments?.uid! === args.uid) {
      cache.updateQuery(
        {
          query: GetUserByNickNameDocument,
          variables: field.arguments,
        },
        (data: GetUserByNickNameQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const oldData = data.getUserByUserName!;
          let followingCount = oldData.followingCount!;
          const newData: GetUserByNickNameQuery = {
            ...data,
            getUserByUserName: {
              ...oldData,
              followingCount:
                _result.toggleFollow?.follows === true
                  ? followingCount + 1
                  : followingCount - 1,
            },
          };

          return newData;
        }
      );
    }
  });
};
