import { Fragment, UIEventHandler, useEffect, useRef, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { Comment } from '../../utils/interfaces';
import CommentCard from '../../components/comment-card/commentCard';
import { CommentParent } from './comments.styles';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import ViewportList from 'react-viewport-list';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useGetCommentsOfTheUserQuery } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

export interface allCommentsInterface {
  [key: string]: Comment[];
}

const Comments = () => {
  const user = useAppSelector((state) => state.user);
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [lastPage, setLastPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [{ data, fetching, error }] = useGetCommentsOfTheUserQuery({
    variables: { uid: user.id, limit: 15, page: page, asc: false },
    pause: isServer(),
  });

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((page) => page + 1);
      }
    }
  };

  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      setLastPage(data?.getCommentsOfTheUser?.lastPage!);
    }
  }, [fetching, data, error]);

  if (fetching) {
    return <Loading />;
  }
  const { comments } = data?.getCommentsOfTheUser!;
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
