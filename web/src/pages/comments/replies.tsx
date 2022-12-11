import { Fragment, UIEventHandler } from 'react';

import { CommentParent } from './comments.styles';
import Loading from '../loading/loading';
import { Reply } from '../../utils/interfaces';
import ReplyCard from '../../components/comment-card/replyCard';
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
  return (
    <CommentParent>
      <Fragment>
        <div className='heading-container'>
          <div className='heading'>Replies</div>
          {/* <div className='sort'>
          <span>Sort</span> <MdSort size={20} />
        </div> */}
        </div>
        <div className='child' onScroll={handleScroll}>
          {replies &&
            replies.map((reply) => (
              <ReplyCard comment={reply} key={reply.id} />
            ))}
          <div className='extra'>{fetching && <Loading />}</div>
        </div>
      </Fragment>
    </CommentParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Replies);
