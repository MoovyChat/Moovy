import { Fragment, UIEventHandler, useEffect, useRef, useState } from 'react';
import { Reply, useGetRepliesOfTheUserQuery } from '../../generated/graphql';

import { CommentParent } from './comments.styles';
import EmptyPage from '../../components/empty-page/emptyPage';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import ReplyCard from '../../components/comment-card/replyCard';
import ViewportList from 'react-viewport-list';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useFetchUserReplies } from '../../hooks/useFetchUserReplies';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

export interface allRepliesInterface {
  [key: string]: Reply[];
}
const Replies = () => {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Replies - Moovy';
  }, []);
  const listRef = useRef<any>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [userReplies] = useGetRepliesOfTheUserQuery({
    variables: { uid: id!, first: 10 },
    pause: isServer() && !id,
  });

  useEffect(() => {
    const { data, fetching } = userReplies;
    if (!fetching && data) {
      const _data = data.getRepliesOfTheUser;
      const _replies = _data.nodes as Reply[];
      setReplies(_replies);
    }
  }, [userReplies]);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      fetchMore();
    }
  };

  const { fetchMore } = useFetchUserReplies(id!, setReplies, userReplies);

  if (!id || userReplies.error) return <NotFound />;

  if (replies.length <= 0) {
    return <EmptyPage msg='No Replies!' />;
  }
  return (
    <CommentParent>
      <Fragment>
        <div className='child' onScroll={handleScroll} ref={parentRef}>
          <ViewportList ref={listRef} viewportRef={parentRef} items={replies}>
            {(reply, index) =>
              reply && <ReplyCard comment={reply} key={reply.id} />
            }
          </ViewportList>
          <div className='extra'>{userReplies.fetching && <Loading />}</div>
        </div>
      </Fragment>
    </CommentParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Replies);
