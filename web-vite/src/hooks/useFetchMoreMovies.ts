import {
  Exact,
  GetMoviesByTitleIdDocument,
  GetMoviesByTitleIdQuery,
  InputMaybe,
  Movie,
} from '../generated/graphql';
import { UseQueryState, useClient } from 'urql';

import _ from 'lodash';
import { useCallback } from 'react';

export const useFetchMoreMovies = (
  tid: string,
  setNodes: React.Dispatch<React.SetStateAction<Movie[]>>,
  res: UseQueryState<
    GetMoviesByTitleIdQuery,
    Exact<{
      tid: string;
      first: number;
      after?: InputMaybe<string> | undefined;
    }>
  >
) => {
  const graphqlClient = useClient();
  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getMoviesByTitleId || {};
    if (!res?.data) {
      return;
    }
    graphqlClient
      .query(GetMoviesByTitleIdDocument, {
        first: 10,
        after: pageInfo?.endCursor,
        tid: tid,
      })
      .toPromise()
      .then((moreData) => {
        const { data, error } = moreData;
        const _data = data?.getMoviesByTitleId!;
        const nodes = _data?.nodes as any[];
        setNodes((data: any) =>
          _.chain(data).concat(nodes).uniqBy('id').value()
        );
      });
  }, [res]);
  return { fetchMore };
};
