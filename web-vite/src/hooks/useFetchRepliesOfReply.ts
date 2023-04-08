import {
  Exact,
  GetRepliesOfReplyDocument,
  GetRepliesOfReplyQuery,
  InputMaybe,
  Reply,
} from '../generated/graphql';
import { UseQueryState, useClient } from 'urql';

import _ from 'lodash';
import { useCallback } from 'react';

export const useFetchRepliesOfReply = (
  reply: Reply | null,
  setNodes: React.Dispatch<React.SetStateAction<Reply[]>>,
  res: UseQueryState<
    GetRepliesOfReplyQuery,
    Exact<{
      rid: string;
      first: number;
      after?: InputMaybe<string> | undefined;
    }>
  >,
  cursor: string,
  setCursor: React.Dispatch<React.SetStateAction<string>>
) => {
  const graphqlClient = useClient();
  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getRepliesOfReply || {};
    if (!res?.data || !pageInfo?.hasNextPage) {
      return;
    }
    graphqlClient
      .query(GetRepliesOfReplyDocument, {
        first: 5,
        after: cursor,
        rid: reply?.id,
      })
      .toPromise()
      .then((moreData) => {
        const { data, error } = moreData;
        console.log(data);
        const _data = data?.getRepliesOfReply!;
        const pageInfo = _data?.pageInfo;
        setCursor(() => pageInfo?.endCursor as string);
        const nodes = _data?.nodes as any[];
        setNodes((replies: any) =>
          _.chain(replies).concat(nodes).uniqBy('id').value()
        );
      });
  }, [res]);
  return { fetchMore };
};
