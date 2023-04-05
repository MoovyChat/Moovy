import { Resolver } from '@urql/exchange-graphcache';
import _ from 'lodash';
import { stringifyVariables } from 'urql';

export const movieCommentsResolver = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info;
    const allFields = cache.inspectFields(entityKey);
    const fieldInfos = allFields.filter(
      (info: any) => info.fieldName === fieldName
    );
    const size = fieldInfos.length;
    if (size === 0) {
      return undefined;
    }
    let newComments = [] as string[];
    let id = '';
    let _lastPage = 0;
    let _totalCommentCount = 0;
    let _hasMoreComments = true;
    const _pastLoadedCount = 0;
    let _movie = '';
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      if (args.mid !== fieldArgs.mid) return;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const comments = cache.resolve(link, 'comments') as string[];
      newComments = _.concat(newComments, comments);
      _lastPage = cache.resolve(link, 'lastPage') as number;
      id = cache.resolve(link, 'id') as string;
      newComments = _.uniq(newComments);
      _movie = cache.resolve(link, 'movie') as string;
      _totalCommentCount = cache.resolve(link, 'totalCommentCount') as number;
      const hasMore = cache.resolve(link, 'hasMoreComments') as boolean;
      if (hasMore === false) {
        _hasMoreComments = false;
      }
    });
    info.partial = true;
    const newData = {
      __typename: 'PaginatedMovieComments',
      id,
      comments: newComments,
      hasMoreComments: _hasMoreComments,
      lastPage: _lastPage,
      totalCommentCount: _totalCommentCount,
      movie: _movie,
      pastLoadedCount: _pastLoadedCount,
    };
    return newData;
  };
};
