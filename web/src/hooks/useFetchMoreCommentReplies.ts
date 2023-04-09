import {
  Comment,
  Exact,
  GetCommentRepliesDocument,
  GetCommentRepliesQuery,
  InputMaybe,
  PageInfo,
  Reply,
} from '../generated/graphql';
import { UseQueryState, useClient } from 'urql';
import { useCallback, useState } from 'react';

import _ from 'lodash';

export const useFetchMoreRepliesOfComment = (
  comment: Comment | undefined,
  setNodes: React.Dispatch<React.SetStateAction<Reply[]>>,
  res: UseQueryState<
    GetCommentRepliesQuery,
    Exact<{
      cid: string;
      first: number;
      after?: InputMaybe<string> | undefined;
    }>
  >,
  cursor: string,
  setCursor: React.Dispatch<React.SetStateAction<string>>,
) => {
  const graphqlClient = useClient();
  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getCommentReplies || {};
    if (!res?.data || !pageInfo?.hasNextPage) {
      return;
    }
    graphqlClient
      .query(GetCommentRepliesDocument, {
        first: 5,
        after: cursor,
        cid: comment?.id,
      })
      .toPromise()
      .then(moreData => {
        const { data, error } = moreData;
        const _data = data.getCommentReplies!;
        const pageInfo = _data.pageInfo;
        setCursor(() => pageInfo.endCursor as string);
        const nodes = _data.nodes as any[];
        setNodes((replies: any) =>
          _.chain(replies).concat(nodes).uniqBy('id').value(),
        );
      });
  }, [res]);
  return { fetchMore };
};
