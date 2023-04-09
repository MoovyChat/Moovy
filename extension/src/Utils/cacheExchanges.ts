import { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache';
import {
  DeleteCommentMutation,
  GetMovieDocument,
  GetMovieQuery,
  IsFollowingUserDocument,
  IsFollowingUserQuery,
  ToggleFollowMutation,
} from '../generated/graphql';

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

  //   const getUserByUserNameField = allFields.filter(
  //     (field) => field.fieldName === 'getUserByUserName'
  //   );
  //   getUserByUserNameField.forEach((field) => {
  //     if (field.arguments?.uid! === args.uid) {
  //       cache.updateQuery(
  //         {
  //           query: GetUserByNickNameDocument,
  //           variables: field.arguments,
  //         },
  //         (data: GetUserByNickNameQuery | null) => {
  //           if (!data) {
  //             console.log('Data is null, returning');
  //             return null;
  //           }
  //           const oldData = data.getUserByUserName!;
  //           let followingCount = oldData.followingCount!;
  //           const newData: GetUserByNickNameQuery = {
  //             ...data,
  //             getUserByUserName: {
  //               ...oldData,
  //               followingCount:
  //                 _result.toggleFollow?.follows === true
  //                   ? followingCount + 1
  //                   : followingCount - 1 <= 0
  //                   ? 0
  //                   : followingCount - 1,
  //             },
  //           };

  //           return newData;
  //         }
  //       );
  //     }
  //   });
};

export const deleteCommentChanges = (
  _result: DeleteCommentMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const fieldsInfos = {
    getCommentsOfTheMovie: 'getCommentsOfTheMovie',
    getMovie: 'getMovie',
    getComment: 'getComment',
  };

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
            commentCount: commentCount - 1 <= 0 ? 0 : commentCount - 1,
          },
        };
      }
    );
  });
};
