import {
  Exact,
  FeedItem,
  GetFeedDocument,
  GetFeedQuery,
  InputMaybe,
  Reply,
} from '../generated/graphql';
import { UseQueryState, useClient } from 'urql';

import _ from 'lodash';
import { useCallback } from 'react';

export const useFetchMoreFeed = (
  id: string,
  setNodes: React.Dispatch<React.SetStateAction<FeedItem[]>>,
  res: UseQueryState<
    GetFeedQuery,
    Exact<{
      uid: string;
      first: number;
      after?: InputMaybe<string> | undefined;
    }>
  >,
  cursor: string,
  setCursor: React.Dispatch<React.SetStateAction<string>>
) => {
  const graphqlClient = useClient();
  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getFeed || {};
    if (!res?.data || !pageInfo?.hasNextPage) {
      return;
    }
    graphqlClient
      .query(GetFeedDocument, {
        first: 10,
        after: cursor,
        uid: id,
      })
      .toPromise()
      .then((moreData) => {
        const { data, error } = moreData;
        console.log({ data });
        const _data = data?.getFeed!;
        const pageInfo = _data?.pageInfo;
        setCursor(() => pageInfo?.endCursor as string);
        const nodes = _data?.nodes as any[];
        setNodes((data: any) =>
          _.chain(data).concat(nodes).uniqBy('id').value()
        );
      });
  }, [res]);
  return { fetchMore };
};
