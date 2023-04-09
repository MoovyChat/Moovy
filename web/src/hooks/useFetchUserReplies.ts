import {
  Comment,
  Exact,
  GetCommentsOfTheUserDocument,
  GetCommentsOfTheUserQuery,
  GetRepliesOfTheUserDocument,
  GetRepliesOfTheUserQuery,
  InputMaybe,
  Reply,
} from '../generated/graphql';
import { UseQueryState, useClient } from 'urql';

import _ from 'lodash';
import { useCallback } from 'react';

export const useFetchUserReplies = (
  id: string,
  setNodes: React.Dispatch<React.SetStateAction<Reply[]>>,
  res: UseQueryState<
    GetRepliesOfTheUserQuery,
    Exact<{
      uid: string;
      first: number;
      after?: InputMaybe<string> | undefined;
    }>
  >,
) => {
  const graphqlClient = useClient();
  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getRepliesOfTheUser || {};
    if (!res?.data || !pageInfo?.hasNextPage) {
      return;
    }
    graphqlClient
      .query(GetRepliesOfTheUserDocument, {
        first: 10,
        after: pageInfo?.endCursor,
        uid: id,
      })
      .toPromise()
      .then(moreData => {
        const { data, error } = moreData;
        console.log(moreData);
        const _data = data?.getRepliesOfTheUser!;
        const pageInfo = _data?.pageInfo;
        const nodes = _data?.nodes as any[];
        setNodes((data: any) =>
          _.chain(data).concat(nodes).uniqBy('id').value(),
        );
      });
  }, [res]);
  return { fetchMore };
};
