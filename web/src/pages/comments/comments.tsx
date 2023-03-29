import { CURRENT_DOMAIN, isServer } from '../../constants';
import { Comment, useGetCommentsOfTheUserQuery } from '../../generated/graphql';
import { Fragment, UIEventHandler, useEffect, useRef, useState } from 'react';

import CommentCard from '../../components/comment-card/commentCard';
import { CommentParent } from './comments.styles';
import EmptyPage from '../../components/empty-page/emptyPage';
import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import ViewportList from 'react-viewport-list';
import { urqlClient } from '../../utils/urlClient';
import { useFetchUserComments } from '../../hooks/useFetchUserComments';
import { useParams } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const Comments = () => {
  const { id } = useParams();
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [cursor, setCursor] = useState<string>('');
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    document.title = 'Comments - Moovy';
  }, []);

  const [userComments] = useGetCommentsOfTheUserQuery({
    variables: { uid: id!, first: 10, after: '' },
    pause: isServer() && !id,
  });

  useEffect(() => {
    const { fetching, data } = userComments;
    if (!fetching && data) {
      const _data = data.getCommentsOfTheUser;
      const _comments = _data.nodes as Comment[];
      setComments(_comments);
    }
  }, [userComments]);

  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      console.log('fetching more');
      fetchMore();
    }
  };

  const { fetchMore } = useFetchUserComments(id!, setComments, userComments);

  // //Scroll handler: Fallback - Find the scrollable parent element.
  // useEffect(() => {
  //   const scrollComments = () => {
  //     if (!profileParent) return null;
  //     if (
  //       profileParent.scrollHeight - profileParent.scrollTop - 2 <=
  //       profileParent.clientHeight
  //     ) {
  //       if (page !== lastPage) {
  //         setPage((page) => page + 1);
  //       }
  //     }
  //   };
  //   var profileParent = document.getElementById('profile-parent');
  //   profileParent?.addEventListener('scroll', scrollComments);
  //   return () => profileParent?.removeEventListener('scroll', scrollComments);
  // }, [page, lastPage]);

  if (comments.length <= 0) {
    return <EmptyPage msg='No Comments!' />;
  }
  return (
    <CommentParent className='comments'>
      <Helmet>
        <title>{`${id}: Comments`}</title>
        <meta name='description' content={`${id} comments`} />
        <link rel='canonical' href={`${CURRENT_DOMAIN}/comments/${id}`} />
      </Helmet>
      <Fragment>
        <div className='child' ref={parentRef} onScroll={handleScroll}>
          <ViewportList ref={listRef} viewportRef={parentRef} items={comments}>
            {(comment, index) =>
              comment && <CommentCard comment={comment} key={comment.id} />
            }
          </ViewportList>
          <div className='extra'>{userComments.fetching && <Loading />}</div>
        </div>
      </Fragment>
    </CommentParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Comments);
