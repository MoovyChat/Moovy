import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ReplyParent,
  ReplyWindowParent,
  ShowReplyText,
} from "./replyWindow.styles";

import ReplyCard from "../replyCard/replyCard";
import { ViewportList } from "react-viewport-list";
import _ from "lodash";

import { useClient } from "urql";
import Loading from "../../../../../components/loading/loading";
import {
  Reply,
  useGetCommentRepliesQuery,
  GetCommentRepliesDocument,
} from "../../../../../generated/graphql";
import { CommentInfo } from "../../../../../helpers/interfaces";
import { useAppSelector } from "../../../../redux/hooks";

interface props {
  parentComment: CommentInfo;
  responseFromReplyWindow: (e: any) => void;
}
const ReplyWindow: React.FC<props> = ({
  responseFromReplyWindow,
  parentComment,
}) => {
  const [fetchingMore, setFetchingMore] = useState(false);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [count, setRepliesCount] = useState<number>(0);
  const graphqlClient = useClient();
  const [cursor, setCursor] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<any>(null);
  const replyWindowScrollSessionKey = `replyWindowScrollPosition${parentComment.id}`;
  const [res] = useGetCommentRepliesQuery({
    variables: {
      cid: parentComment.id,
      first: 5,
    },
    pause: parentComment.repliesCount === 0 && !open,
  });

  const fetchMore = useCallback(() => {
    const { pageInfo } = res?.data?.getCommentReplies || {};
    if (!res?.data || !pageInfo?.hasNextPage) {
      return;
    }
    setFetchingMore(() => true);
    graphqlClient
      .query(GetCommentRepliesDocument, {
        first: 5,
        after: cursor,
        cid: parentComment.id,
      })
      .toPromise()
      .then((moreData) => {
        const { data } = moreData;
        const _data = data.getCommentReplies;
        if (_data) {
          const pageInfo = _data.pageInfo;
          setCursor(() => pageInfo.endCursor as string);
          const nodes = _data.nodes as Reply[];
          setReplies((replies) =>
            _.chain(replies).concat(nodes).uniqBy("id").value()
          );
          setHasMore(() => _data.pageInfo.hasNextPage);
          setRepliesCount(() => _data.totalCount);
          setFetchingMore(() => false);
        }
      });
  }, [graphqlClient, res, fetchingMore, setFetchingMore]);

  useEffect(() => {
    const { data, fetching } = res;
    if (!fetching && data) {
      const _data = data.getCommentReplies;
      const nodes = _data.nodes as Reply[];
      setReplies(() => nodes);
      setHasMore(() => _data.pageInfo.hasNextPage);
      setRepliesCount(() => _data.totalCount);
    }
  }, [res]);

  const replyText = `${open ? "Hide" : "Show"} ${count} replies`;
  if (parentComment.type === "reply") return <></>;
  if (res?.fetching) return <Loading />;
  return (
    <ReplyWindowParent>
      {parentComment.repliesCount !== 0 && (
        <ShowReplyText
          className="reply-status"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((flag) => !flag);
          }}
        >
          {replyText}
        </ShowReplyText>
      )}

      <ReplyParent
        accentColor={accentColor}
        replySection={open}
        ref={parentRef}
        onScroll={() =>
          parentRef.current &&
          sessionStorage.setItem(
            replyWindowScrollSessionKey,
            `${parentRef.current.scrollTop}`
          )
        }
      >
        <ViewportList ref={listRef} viewportRef={parentRef} items={replies}>
          {(reply) => (
            <ReplyCard
              key={reply.id}
              type="reply"
              responseFromReplyWindow={responseFromReplyWindow}
              className="reply-card"
              reply={reply}
            />
          )}
        </ViewportList>
        {hasMore && replies.length > 0 && (
          <div
            className="show-more-replies"
            onClick={(e) => {
              e.stopPropagation();
              fetchMore();
            }}
          >
            show more replies
          </div>
        )}
      </ReplyParent>
    </ReplyWindowParent>
  );
};

export default ReplyWindow;
