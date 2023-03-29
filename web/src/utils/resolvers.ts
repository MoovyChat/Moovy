import {
  FollowNotifications,
  LikeNotifications,
  MovieStats,
  Users,
  Visited,
} from '../generated/graphql';

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
    const fieldKeys = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    const isInCache = cache.resolve(
      cache.resolve(entityKey, fieldKeys) as string,
      'comments'
    );
    let newComments = [] as string[];

    let _lastPage = 0;
    let _totalCommentCount = 0;
    let _pastLoadedCount = 0;
    let _hasMoreComments = true;
    let id = '';
    let _movie = '';
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      if (args.mid !== fieldArgs.mid) return;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const comments = cache.resolve(link, 'comments') as string[];
      newComments = _.concat(newComments, comments);
      newComments = _.uniq(newComments);
      _lastPage = cache.resolve(link, 'lastPage') as number;
      _totalCommentCount = cache.resolve(link, 'totalCommentCount') as number;
      _pastLoadedCount = cache.resolve(link, 'pastLoadedCount') as number;
      let hasMore = cache.resolve(link, 'hasMoreComments') as boolean;
      if (hasMore === false) {
        _hasMoreComments = false;
      }
      id = cache.resolve(link, 'id') as string;
      _movie = cache.resolve(link, 'movie') as string;
    });
    info.partial = isInCache ? true : false;
    let newData = {
      __typename: 'PaginatedMovieComments',
      comments: newComments,
      hasMoreComments: _hasMoreComments,
      id,
      lastPage: _lastPage,
      movie: _movie,
      pastLoadedCount: _pastLoadedCount,
      totalCommentCount: _totalCommentCount,
    };
    return newData;
  };
};

export const paginatedUserNotificationsResolver = (): Resolver => {
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
    let follow: FollowNotifications[] = [];
    let like: LikeNotifications[] = [];
    let typeName: string = '';
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const likeNot = cache.resolve(link, 'like') as LikeNotifications[];
      const followNot = cache.resolve(link, 'follow') as FollowNotifications[];
      typeName = cache.resolve(link, '__typename') as string;
      // follow = _.chain(follow).concat(followNot).uniqBy('id').value();
      // like = _.chain(like).concat(likeNot).uniqBy('id').value();
      follow.push(...followNot);
      like.push(...likeNot);
    });
    info.partial = true;
    let newData = {
      __typename: typeName,
      like: like,
      follow: follow,
    };
    return newData;
  };
};

export const getPaginatedMovieStatsResolver = (): Resolver => {
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
    let movieStats: MovieStats[] = [];
    let typeName: string = '';
    let page = 1;
    let lastPage = 1;
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const _movieStats = cache.resolve(link, 'movieStats') as MovieStats[];
      page = cache.resolve(link, 'page') as number;
      lastPage = cache.resolve(link, 'lastPage') as number;
      typeName = cache.resolve(link, '__typename') as string;
      movieStats.push(..._movieStats);
    });
    info.partial = true;
    let newData = {
      __typename: typeName,
      movieStats,
      page,
      lastPage,
    };
    return newData;
  };
};

export const getUserViewHistoryResolver = (): Resolver => {
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
    let visited: Visited[] = [];
    let typeName: string = '';
    let page = 1;
    let lastPage = 1;
    let count = 0;
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const _visited = cache.resolve(link, 'visited') as Visited[];
      page = cache.resolve(link, 'page') as number;
      count = cache.resolve(link, 'count') as number;
      lastPage = cache.resolve(link, 'lastPage') as number;
      typeName = cache.resolve(link, '__typename') as string;
      visited.push(..._visited);
    });
    info.partial = true;
    let newData = {
      __typename: typeName,
      count,
      visited,
      page,
      lastPage,
    };
    return newData;
  };
};

export const getPaginatedSearchTitles = (): Resolver => {
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
    // const fieldKeys = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    let newTitles = [] as string[];
    let _page = 0;
    let _lastPage = 0;
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      if (args.search !== fieldArgs.search) return;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const titles = cache.resolve(link, 'titles') as string[];
      _lastPage = cache.resolve(link, 'lastPage') as number;
      _page = cache.resolve(link, 'page') as number;
      newTitles = _.concat(newTitles, titles);
      newTitles = _.uniq(newTitles);
    });
    info.partial = true;
    let newData = {
      __typename: 'SearchTitleObject',
      page: _page,
      lastPage: _lastPage,
      titles: newTitles,
    };
    return newData;
  };
};

export const getPaginatedSearchEpisodes = (): Resolver => {
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
    // const fieldKeys = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    let newTitles = [] as string[];
    let _page = 0;
    let _lastPage = 0;
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      if (args.search !== fieldArgs.search) return;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const titles = cache.resolve(link, 'movies') as string[];
      _lastPage = cache.resolve(link, 'lastPage') as number;
      _page = cache.resolve(link, 'page') as number;
      newTitles = _.concat(newTitles, titles);
      newTitles = _.uniq(newTitles);
    });
    info.partial = true;
    let newData = {
      __typename: 'SearchMovieObject',
      page: _page,
      lastPage: _lastPage,
      movies: newTitles,
    };
    return newData;
  };
};

export const getPaginatedSearchPeople = (): Resolver => {
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
    // const fieldKeys = `${fieldName}(${stringifyVariables(fieldArgs)})`;
    let newPeople = [] as string[];
    let _page = 0;
    let _lastPage = 0;
    fieldInfos.forEach((fieldInfo: any) => {
      const { fieldKey, arguments: args } = fieldInfo;
      if (args.search !== fieldArgs.search) return;
      const link = cache.resolve(entityKey, fieldKey) as string;
      const people = cache.resolve(link, 'people') as string[];
      _lastPage = cache.resolve(link, 'lastPage') as number;
      _page = cache.resolve(link, 'page') as number;
      newPeople = _.concat(newPeople, people);
      newPeople = _.uniq(newPeople);
    });
    info.partial = true;
    let newData = {
      __typename: 'SearchPeopleObject',
      page: _page,
      lastPage: _lastPage,
      people: newPeople,
    };
    return newData;
  };
};
