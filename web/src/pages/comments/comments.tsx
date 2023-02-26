import { Fragment, UIEventHandler, useEffect, useRef, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import { Comment } from '../../utils/interfaces';
import CommentCard from '../../components/comment-card/commentCard';
import { CommentParent } from './comments.styles';
import EmptyPage from '../../components/empty-page/emptyPage';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import ViewportList from 'react-viewport-list';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useGetCommentsOfTheUserQuery } from '../../generated/graphql';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

export interface allCommentsInterface {
  [key: string]: Comment[];
}

const Comments = () => {
  const { id } = useParams();
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [lastPage, setLastPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    document.title = 'Comments - Moovy';
  }, []);

  const [{ data, fetching, error }] = useGetCommentsOfTheUserQuery({
    variables: { uid: id!, limit: 5, page: page, asc: false },
    pause: isServer() && !id,
  });

  // Scroll handler.
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

  //Scroll handler: Fallback - Find the scrollable parent element.
  useEffect(() => {
    const scrollComments = () => {
      if (!profileParent) return null;
      if (
        profileParent.scrollHeight - profileParent.scrollTop - 2 <=
        profileParent.clientHeight
      ) {
        if (page !== lastPage) {
          setPage((page) => page + 1);
        }
      }
    };
    var profileParent = document.getElementById('profile-parent');
    profileParent?.addEventListener('scroll', scrollComments);
    return () => profileParent?.removeEventListener('scroll', scrollComments);
  }, [page, lastPage]);

  if (fetching) {
    return <Loading />;
  }
  const { comments } = data?.getCommentsOfTheUser!;
  if (comments.length <= 0) {
    return <EmptyPage msg='No Comments!' />;
  }
  return (
    <CommentParent className='comments'>
      <Fragment>
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
