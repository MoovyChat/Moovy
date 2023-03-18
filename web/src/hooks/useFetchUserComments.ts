import {
  Comment,
  Exact,
  GetCommentsOfTheUserDocument,
  GetCommentsOfTheUserQuery,
  InputMaybe,
} from '../generated/graphql';
import { UseQueryState, useClient } from 'urql';

import _ from 'lodash';
import { useCallback } from 'react';

export const useFetchUserComments = (
  id: string,
  setNodes: React.Dispatch<React.SetStateAction<Comment[]>>,
  res: UseQueryState<
    GetCommentsOfTheUserQuery,
    Exact<{
      uid: string;
      first: number;
      after?: InputMaybe<string> | undefined;
    }>
  >
) => {
  const graphqlClient = useClient();
  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getCommentsOfTheUser || {};
    if (!res?.data || !pageInfo?.hasNextPage) {
      return;
    }
    graphqlClient
      .query(GetCommentsOfTheUserDocument, {
        first: 10,
        after: pageInfo?.endCursor,
        uid: id,
      })
      .toPromise()
      .then((moreData) => {
        const { data, error } = moreData;
        console.log(moreData);
        const _data = data?.getCommentsOfTheUser!;
        const pageInfo = _data?.pageInfo;
        const nodes = _data?.nodes as any[];
        setNodes((data: any) =>
          _.chain(data).concat(nodes).uniqBy('id').value()
        );
      });
  }, [res]);
  return { fetchMore };
};
