import { Fragment, UIEventHandler, useEffect, useRef, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { CommentParent } from './comments.styles';
import Loading from '../loading/loading';
import { Reply } from '../../utils/interfaces';
import ReplyCard from '../../components/comment-card/replyCard';
import ViewportList from 'react-viewport-list';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useGetRepliesOfTheUserQuery } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

export interface allRepliesInterface {
  [key: string]: Reply[];
}
const Replies = () => {
  const user = useAppSelector((state) => state.user);
  const [lastPage, setLastPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [{ data, error, fetching }] = useGetRepliesOfTheUserQuery({
    variables: { uid: user.id, limit: 15, page: page, asc: false },
    pause: isServer(),
  });

  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      setLastPage(data?.getRepliesOfTheUser?.lastPage!);
    }
  }, [data, error, fetching]);
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((page) => page + 1);
      }
    }
  };
  if (fetching) {
    return <Loading />;
  }
  const { comments } = data?.getRepliesOfTheUser!;
  if (comments.length <= 0) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        You haven't made your first comment
      </div>
    );
  }
  return (
    <CommentParent>
      <Fragment>
        <ChildHeader text='Replies' className='comment-header' />
        <div className='child' onScroll={handleScroll} ref={parentRef}>
          <ViewportList ref={listRef} viewportRef={parentRef} items={comments}>
            {(reply, index) =>
              reply && <ReplyCard comment={reply} key={reply.id} />
            }
          </ViewportList>
          <div className='extra'>{fetching && <Loading />}</div>
        </div>
      </Fragment>
    </CommentParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Replies);
