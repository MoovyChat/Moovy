import { Cache, ResolveInfo, Variables } from '@urql/exchange-graphcache';
import {
  GetIsUserLikedCommentDocument,
  GetIsUserLikedCommentQuery,
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  SetCommentLikeMutation,
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
      console.log(_result);
      return {
        getIsUserLikedComment: {
          __typename: data?.getIsUserLikedComment?.__typename!,
          id: data?.getIsUserLikedComment?.id!,
          isLiked: _result.setCommentLike?.likeStatus.like!,
        },
      };
    }
  );
};
