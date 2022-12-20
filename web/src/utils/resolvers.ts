import { Resolver } from '@urql/exchange-graphcache';
import _ from 'lodash';
import { stringifyVariables } from 'urql';

export const pagePagination = (): Resolver => {
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

    const fieldKeys = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isInCache = cache.resolve(
      cache.resolve(entityKey, fieldKeys) as string,
      'comments'
    );
    info.partial = !isInCache;
    let newComments = [] as string[];
    let _lastPage = 0;
    let _totalCommentCount = 0;
    let _pastLoadedCount = 0;
    let _hasMoreComments = true;
    let _id = '';
    let _movie = '';
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      if (args.mid !== fieldArgs.mid) return;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const comments = cache.resolve(link, 'comments') as string[];
      newComments = _.concat(comments, newComments);
      newComments = _.uniq(newComments);
      _lastPage = cache.resolve(link, 'lastPage') as number;
      _totalCommentCount = cache.resolve(link, 'totalCommentCount') as number;
      _pastLoadedCount = cache.resolve(link, 'pastLoadedCount') as number;
      let hasMore = cache.resolve(link, 'hasMoreComments') as boolean;
      if (hasMore === false) {
        _hasMoreComments = false;
      }
      _id = cache.resolve(link, 'id') as string;
      _movie = cache.resolve(link, 'movie') as string;
    });
    let newData = {
      __typename: 'PaginatedMovieComments',
      comments: newComments,
      hasMoreComments: _hasMoreComments,
      id: _id,
      lastPage: _lastPage,
      movie: _movie,
      pastLoadedCount: _pastLoadedCount,
      totalCommentCount: _totalCommentCount,
    };
    return newData;
  };
};
