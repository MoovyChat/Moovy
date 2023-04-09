import {
  Exact,
  GetPaginatedTitlesDocument,
  GetPaginatedTitlesQuery,
  InputMaybe,
  Title,
} from '../generated/graphql';
import { UseQueryState, useClient } from 'urql';

import _ from 'lodash';
import { useCallback } from 'react';

export const useFetchMoreTitles = (
  type: string,
  setNodes: React.Dispatch<React.SetStateAction<Title[]>>,
  res: UseQueryState<
    GetPaginatedTitlesQuery,
    Exact<{
      type: string;
      first: number;
      after?: InputMaybe<string> | undefined;
    }>
  >
) => {
  const graphqlClient = useClient();
  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getPaginatedTitles || {};
    if (!res?.data || !pageInfo?.hasNextPage) {
      return;
    }
    graphqlClient
      .query(GetPaginatedTitlesDocument, {
        first: 9,
        after: pageInfo?.endCursor,
        type: type,
      })
      .toPromise()
      .then((moreData) => {
        const { data, error } = moreData;
        const _data = data?.getPaginatedTitles!;
        const nodes = _data?.nodes as any[];
        setNodes((data: any) =>
          _.chain(data).concat(nodes).uniqBy('id').value()
        );
      });
  }, [res]);
  return { fetchMore };
};
