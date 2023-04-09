import { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache';
import {
  ClearNotificationsMutation,
  Comment,
  DeleteCommentMutation,
  DeleteReplyMutation,
  GetCommentDocument,
  GetCommentLikesDocument,
  GetCommentLikesQuery,
  GetCommentQuery,
  GetCommentsOfTheMovieQDocument,
  GetCommentsOfTheMovieQQuery,
  GetCommentsOfTheUserDocument,
  GetCommentsOfTheUserQuery,
  GetIsUserLikedCommentDocument,
  GetIsUserLikedCommentQuery,
  GetLikedTitlesDocument,
  GetLikedTitlesQuery,
  GetMovieDocument,
  GetMovieQuery,
  GetOnlyUserMovieStatsDocument,
  GetOnlyUserMovieStatsQuery,
  GetRepliesOfCommentDocument,
  GetRepliesOfCommentQuery,
  GetRepliesOfReplyDocument,
  GetRepliesOfReplyQuery,
  GetReplyDocument,
  GetReplyLikesDocument,
  GetReplyLikesQuery,
  GetReplyQuery,
  GetUserByNickNameDocument,
  GetUserByNickNameQuery,
  GetUserMiniProfileDocument,
  GetUserMiniProfileQuery,
  GetUserNotificationsDocument,
  GetUserNotificationsQuery,
  InsertCommentMutation,
  InsertReplyMutation,
  IsFollowingUserDocument,
  IsFollowingUserQuery,
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  ReadNotificationMutation,
  Reply,
  SetCommentLikeMutation,
  SetReplyLikeMutation,
  ToggleFollowMutation,
  UpdateProfileMutation,
  UpdateUserMovieStatsMutation,
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
  const allFields = cache.inspectFields('Query');
  const fieldsNames = {
    getCommentLikes: 'getCommentLikes',
    getComment: 'getComment',
  };
  const getCommentLikesFieldInfos = allFields.filter(
    (info: any) => info.fieldName === fieldsNames.getCommentLikes
  );
  const getCommentFieldInfos = allFields.filter(
    (info: any) => info.fieldName === fieldsNames.getComment
  );
  getCommentLikesFieldInfos.forEach((fieldInfo) => {
    if (args.cid !== fieldInfo?.arguments?.cid) return;
    cache.updateQuery(
      { query: GetCommentLikesDocument, variables: fieldInfo.arguments },
      (data: GetCommentLikesQuery | null) => {
        if (!data) return null;
        let childElem = data.getCommentLikes;
        const oldLikesCount = childElem?.likesCount!;
        const oldLikedUsers = childElem?.likes!;
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
        return newData;
      }
    );
  });
  getCommentFieldInfos.forEach((fieldInfo) => {
    if (args.cid !== fieldInfo?.arguments?.cid) return;
    cache.updateQuery(
      { query: GetCommentDocument, variables: fieldInfo.arguments },
      (data: GetCommentQuery | null) => {
        if (!data) return null;
        let childElem = data.getComment!;
        const oldLikesCount = childElem.likesCount!;
        const likeStatus = _result.setCommentLike?.likeStatus!;
        const isLike = likeStatus?.like;
        const newData = {
          ...data,
          getComment: {
            ...childElem,
            likesCount: isLike
              ? oldLikesCount + 1
              : Math.max(oldLikesCount - 1, 0),
          },
        };
        return newData;
      }
    );
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
                likesCount: isLike
                  ? oldLikesCount + 1
                  : Math.max(oldLikesCount - 1, 0),
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

  const getCommentFields = allFields.filter(
    (field) => field.fieldName === 'getComment'
  );
  getCommentFields.forEach((field) => {
    if (field.arguments?.cid! !== (args.options as any).parentCommentId)
      return null;
    cache.updateQuery(
      {
        query: GetCommentDocument,
        variables: field.arguments,
      },
      (data: GetCommentQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getComment = data.getComment!;
        const repliesCount = getComment.repliesCount!;
        const newData: GetCommentQuery = {
          ...data,
          getComment: {
            ...getComment,
            repliesCount: repliesCount + 1,
          },
        };
        return newData;
      }
    );
  });

  const getReplyFields = allFields.filter(
    (field) => field.fieldName === 'getReply'
  );

  getReplyFields.forEach((field) => {
    if (field.arguments?.rid! !== (args.options as any).parentReplyId)
      return null;
    cache.updateQuery(
      {
        query: GetReplyDocument,
        variables: field.arguments,
      },
      (data: GetReplyQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getReply = data.getReply!;
        const repliesCount = getReply.repliesCount!;
        const newData: GetReplyQuery = {
          ...data,
          getReply: {
            ...getReply,
            repliesCount: repliesCount + 1,
          },
        };
        return newData;
      }
    );
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
                  : Math.max(followingCount - 1, 0),
            },
          };

          return newData;
        }
      );
    }
  });
};

export const deleteCommentChanges = (
  _result: DeleteCommentMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const fieldsInfos = {
    getCommentsOfTheUser: 'getCommentsOfTheUser',
    getCommentsOfTheMovie: 'getCommentsOfTheMovie',
    getMovie: 'getMovie',
    getComment: 'getComment',
  };
  const getCommentsOfTheUserFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getCommentsOfTheUser
  );
  getCommentsOfTheUserFields.forEach((fieldInfo) => {
    cache.updateQuery(
      { query: GetCommentsOfTheUserDocument, variables: fieldInfo.arguments },
      (data: GetCommentsOfTheUserQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getCommentsOfTheUser = data.getCommentsOfTheUser!;
        const comments = getCommentsOfTheUser.comments!;
        const totalCommentCount = getCommentsOfTheUser.totalCommentCount!;
        const pastCount = getCommentsOfTheUser.pastCount!;
        return {
          ...data,
          getCommentsOfTheUser: {
            ...getCommentsOfTheUser,
            comments: comments.filter((comment) => comment.id !== args.cid),
            totalCommentCount: Math.max(totalCommentCount - 1, 0),
            pastCount: Math.max(pastCount - 1, 0),
          },
        };
      }
    );
  });
  const getCommentsOfTheMovieFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getCommentsOfTheMovie
  );
  getCommentsOfTheMovieFields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).mid !== args.mid) return null;
    cache.updateQuery(
      {
        query: GetCommentsOfTheMovieQDocument,
        variables: fieldInfo.arguments,
      },
      (data: GetCommentsOfTheMovieQQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getCommentsOfTheMovie = data.getCommentsOfTheMovie!;
        const comments = getCommentsOfTheMovie.comments;
        const totalCommentCount = getCommentsOfTheMovie.totalCommentCount!;
        return {
          ...data,
          getCommentsOfTheMovie: {
            ...getCommentsOfTheMovie,
            comments: comments.filter((comment) => comment.id !== args.cid),
            totalCommentCount: Math.max(totalCommentCount - 1, 0),
          },
        };
      }
    );
  });
  const getMovieFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getMovie
  );
  getMovieFields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).mid !== args.mid) return null;
    cache.updateQuery(
      {
        query: GetMovieDocument,
        variables: fieldInfo.arguments,
      },
      (data: GetMovieQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getMovie = data.getMovie!;
        const commentCount = getMovie.commentCount;
        return {
          ...data,
          getMovie: {
            ...getMovie,
            commentCount: Math.max(commentCount - 1, 0),
          },
        };
      }
    );
  });
  const getCommentFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getComment
  );
  getCommentFields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).cid !== args.cid) return null;
    cache.updateQuery(
      {
        query: GetCommentDocument,
        variables: fieldInfo.arguments,
      },
      (data: GetCommentQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getComment = data.getComment!;
        return {
          ...data,
          getComment: {
            ...getComment,
            message: '[Message is deleted]',
          },
        };
      }
    );
  });
};

export const deleteReplyChanges = (
  _result: DeleteReplyMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const fieldsInfos = {
    getRepliesOfComment: 'getRepliesOfComment',
    getRepliesOfReply: 'getRepliesOfReply',
    getMovie: 'getMovie',
    getReply: 'getReply',
  };

  const getRepliesOfTheCommentFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getRepliesOfComment
  );
  getRepliesOfTheCommentFields.forEach((fieldInfo) => {
    cache.updateQuery(
      { query: GetRepliesOfCommentDocument, variables: fieldInfo.arguments },
      (data: GetRepliesOfCommentQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getRepliesOfComment = data.getRepliesOfComment!;
        const replies = getRepliesOfComment.replies!;
        const repliesCount = getRepliesOfComment.repliesCount!;
        return {
          ...data,
          getRepliesOfComment: {
            ...getRepliesOfComment,
            replies: replies.filter((reply) => reply.id !== args.rid),
            repliesCount: Math.max(repliesCount - 1, 0),
          },
        };
      }
    );
  });
  const getRepliesOfReplyFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getRepliesOfReply
  );
  getRepliesOfReplyFields.forEach((fieldInfo) => {
    cache.updateQuery(
      {
        query: GetRepliesOfReplyDocument,
        variables: fieldInfo.arguments,
      },
      (data: GetRepliesOfReplyQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getRepliesOfReply = data.getRepliesOfReply!;
        const replies = getRepliesOfReply.replies;
        const repliesCount = getRepliesOfReply.repliesCount!;
        return {
          ...data,
          getRepliesOfReply: {
            ...getRepliesOfReply,
            replies: replies.filter((reply) => reply.id !== args.rid),
            repliesCount: repliesCount - 1 < 0 ? 0 : repliesCount - 1,
          },
        };
      }
    );
  });

  const getReplyFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getReply
  );
  getReplyFields.forEach((fieldInfo) => {
    const parentCommentId = _result.deleteReply?.parentCommentId!;
    const parentReplyId = _result.deleteReply?.parentReplyId!;
    const isComment = parentCommentId === parentReplyId;
    if ((fieldInfo.arguments as any).rid === args.rid) {
      cache.updateQuery(
        {
          query: GetReplyDocument,
          variables: fieldInfo.arguments,
        },
        (data: GetReplyQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const getReply = data.getReply!;
          return {
            ...data,
            getReply: {
              ...getReply,
              message: '[Message is deleted]',
            },
          };
        }
      );
    }
    if (args.rid === _result.deleteReply?.id) {
      if (!isComment) {
        cache.updateQuery(
          {
            query: GetReplyDocument,
            variables: { rid: parentReplyId },
          },
          (data: GetReplyQuery | null) => {
            if (!data) {
              console.log('Data is null, returning');
              return null;
            }
            const getReply = data.getReply!;
            const repliesCount = getReply.repliesCount!;
            return {
              ...data,
              getReply: {
                ...getReply,
                repliesCount: Math.max(repliesCount - 1, 0),
              },
            };
          }
        );
      }
    }
  });
};

export const updateMovieLikesChanges = (
  _result: UpdateUserMovieStatsMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const fieldsInfos = {
    getMovie: 'getMovie',
    getOnlyUserMovieStats: 'getOnlyUserMovieStats',
    getLikedTitles: 'getLikedTitles',
  };

  const getMovieFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getMovie
  );
  const getOnlyUserMovieStatsFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getOnlyUserMovieStats
  );
  const getLikedTitlesFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getLikedTitles
  );
  getMovieFields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).mid === args.mid) {
      cache.updateQuery(
        { query: GetMovieDocument, variables: fieldInfo.arguments },
        (data: GetMovieQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const getMovie = data.getMovie!;
          const like = (args.options as any).like!;
          const likesCount = getMovie.likesCount!;
          return {
            ...data,
            getMovie: {
              ...getMovie,
              likesCount: like ? likesCount + 1 : Math.max(likesCount - 1, 0),
            },
          };
        }
      );
    }
  });
  getOnlyUserMovieStatsFields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).mid === args.mid) {
      cache.updateQuery(
        {
          query: GetOnlyUserMovieStatsDocument,
          variables: fieldInfo.arguments,
        },
        (data: GetOnlyUserMovieStatsQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const getOnlyUserMovieStats = data.getOnlyUserMovieStats!;
          const likeFromArg = (args.options as any).like!;
          return {
            ...data,
            getOnlyUserMovieStats: {
              ...getOnlyUserMovieStats,
              like: likeFromArg,
            },
          };
        }
      );
    }
  });
  getLikedTitlesFields.forEach((fieldInfo) => {
    console.log(fieldInfo, args);
    if ((fieldInfo.arguments as any).uid === args.uid) {
      cache.updateQuery(
        {
          query: GetLikedTitlesDocument,
          variables: fieldInfo.arguments,
        },
        (data: GetLikedTitlesQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const getLikedTitles = data.getLikedTitles!;
          const likeFromArg = (args.options as any).like!;
          const movieStats = getLikedTitles.movieStats!;
          return {
            ...data,
            getLikedTitles: {
              ...getLikedTitles,
              movieStats: [
                ...movieStats,
                {
                  userId: args.uid,
                  like: likeFromArg,
                  favorite: _result.updateUserMovieStats?.favorite,
                  movieId: args?.mid,
                  __typename: 'MovieStats',
                  createdAt: new Date().getTime().toString(),
                  updatedAt: new Date().getTime().toString(),
                },
              ],
            },
          } as GetLikedTitlesQuery;
        }
      );
    }
  });
};

export const readNotificationChanges = (
  _result: ReadNotificationMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const fieldsInfos = {
    getUserNotifications: 'getUserNotifications',
  };

  const getUserNotificationsFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getUserNotifications
  );
  getUserNotificationsFields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).uid === args.uid) {
      cache.updateQuery(
        { query: GetUserNotificationsDocument, variables: fieldInfo.arguments },
        (data: GetUserNotificationsQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const getUserNotifications = data.getUserNotifications!;
          let likeNotifications = getUserNotifications.like!;
          let followNotifications = getUserNotifications.follow!;
          const newData = {
            ...data,
            getUserNotifications: {
              ...getUserNotifications,
              like: likeNotifications.map((like) => {
                return { ...like, isRead: true };
              }),
              follow: followNotifications.map((follow) => {
                return { ...follow, isRead: true };
              }),
            },
          };
          return newData;
        }
      );
    }
  });
};

export const clearNotificationsChanges = (
  _result: ClearNotificationsMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const fieldsInfos = {
    getUserNotifications: 'getUserNotifications',
  };

  const getUserNotificationsFields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getUserNotifications
  );
  getUserNotificationsFields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).uid === args.uid) {
      cache.updateQuery(
        { query: GetUserNotificationsDocument, variables: fieldInfo.arguments },
        (data: GetUserNotificationsQuery | null) => {
          if (!data) {
            console.log('Data is null, returning');
            return null;
          }
          const getUserNotifications = data.getUserNotifications!;
          const newData = {
            ...data,
            getUserNotifications: {
              ...getUserNotifications,
              like: [],
              follow: [],
            },
          };
          return newData;
        }
      );
    }
  });
};
