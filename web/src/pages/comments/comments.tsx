import { Fragment, UIEventHandler, useRef } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { Comment } from '../../utils/interfaces';
import CommentCard from '../../components/comment-card/commentCard';
import { CommentParent } from './comments.styles';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import ViewportList from 'react-viewport-list';
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
        <ChildHeader text='Comments' className='comment-header' />
        <div className='child' ref={parentRef} onScroll={handleScroll}>
          <ViewportList ref={listRef} viewportRef={parentRef} items={comments}>
            {(comment, index) =>
              comment && <CommentCard comment={comment} key={comment.id} />
            }
          </ViewportList>
          <div className='extra'>{fetching && <Loading />}</div>
        </div>
      </Fragment>
    </CommentParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Comments);
