import { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache';
import {
  Comment,
  DeleteCommentMutation,
  DeleteReplyMutation,
  FetchNewCommentsMutation,
  GetCommentRepliesDocument,
  GetCommentRepliesQuery,
  GetCommentsOfTheMovieDocument,
  GetCommentsOfTheMovieQuery,
  GetMovieDocument,
  GetMovieQuery,
  IsFollowingUserDocument,
  IsFollowingUserQuery,
  ToggleFollowMutation,
} from '../generated/graphql';

import _ from 'lodash';

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
    try {
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
    } catch (e) {
      console.log(e);
    }
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
    getCommentReplies: 'getCommentReplies',
  };
  const getCommentReplies = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getCommentReplies
  );
  console.log(_result, _info);
  getCommentReplies.forEach((fi) => {
    cache.invalidate('Query', fi.fieldName, fi.arguments);
  });
};

export const fetchNewCommentsChanges = (
  _result: FetchNewCommentsMutation,
  args: Variables,
  cache: Cache,
  _info: ResolveInfo
) => {
  const allFields = cache.inspectFields('Query');
  const fieldsInfos = {
    getCommentsOfTheMovie: 'getCommentsOfTheMovie',
  };

  const fields = allFields.filter(
    (field) => field.fieldName === fieldsInfos.getCommentsOfTheMovie
  );
  fields.forEach((fieldInfo) => {
    if ((fieldInfo.arguments as any).mid !== args.mid) return null;
    console.log(fieldInfo, args, fields);
    cache.updateQuery(
      {
        query: GetCommentsOfTheMovieDocument,
        variables: fieldInfo.arguments,
      },

      (data: GetCommentsOfTheMovieQuery | null) => {
        if (!data) {
          console.log('Data is null, returning');
          return null;
        }
        const getMovieComments = data.getCommentsOfTheMovie!;
        const comments = getMovieComments.comments!;
        const totalCommentCount = getMovieComments.totalCommentCount!;
        const newComments = _.chain(_result.fetchNewComments as Comment[])
          .concat(comments as Comment[])
          .uniqBy('id')
          .value();
        return {
          ...data,
          getCommentsOfTheMovie: {
            ...getMovieComments,
            comments: newComments,
            totalCommentCount: totalCommentCount + 1,
          },
        };
        return data;
      }
    );
  });
};
