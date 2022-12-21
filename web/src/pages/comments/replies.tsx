import { Fragment, UIEventHandler, useRef } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { CommentParent } from './comments.styles';
import Loading from '../loading/loading';
import { Reply } from '../../utils/interfaces';
import ReplyCard from '../../components/comment-card/replyCard';
import ViewportList from 'react-viewport-list';
import { urqlClient } from '../../utils/urlClient';
import { withUrqlClient } from 'next-urql';

export interface allRepliesInterface {
  [key: string]: Reply[];
}
type props = {
  replies: Reply[];
  handleScroll: UIEventHandler<HTMLDivElement>;
  fetching: boolean;
};
const Replies: React.FC<props> = ({ replies, handleScroll, fetching }) => {
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  if (fetching) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Loading />
      </div>
    );
  }
  if (replies.length <= 0) {
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
          <ViewportList ref={listRef} viewportRef={parentRef} items={replies}>
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
