import { Fragment, UIEventHandler } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { Comment } from '../../utils/interfaces';
import CommentCard from '../../components/comment-card/commentCard';
import { CommentParent } from './comments.styles';
import Loading from '../loading/loading';
import { urqlClient } from '../../utils/urlClient';
import { withUrqlClient } from 'next-urql';

export interface allCommentsInterface {
  [key: string]: Comment[];
}
type props = {
  comments: Comment[];
  handleScroll: UIEventHandler<HTMLDivElement>;
  fetching: boolean;
};
const Comments: React.FC<props> = ({ comments, handleScroll, fetching }) => {
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
        <Loading />
      </div>
    );
  }
  return (
    <CommentParent>
      <Fragment>
        <ChildHeader text='Comments' className='comment-header' />
        <div className='child' onScroll={handleScroll}>
          {comments &&
            comments.map((comment) => (
              <CommentCard comment={comment} key={comment.id} />
            ))}
          <div className='extra'>{fetching && <Loading />}</div>
        </div>
      </Fragment>
    </CommentParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Comments);
