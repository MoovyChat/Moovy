import { UIEventHandler, useEffect, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import EmptyPage from '../../components/empty-page/emptyPage';
import FeedComment from './feed-comment/feedComment';
import { FeedObject } from '../../utils/interfaces';
import { FeedParent } from './feed.styles';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import { isServer } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { useGetFeedQuery } from '../../generated/graphql';

const Feed = () => {
  const user = useAppSelector((state) => state.user);
  const [items, setItems] = useState<FeedObject[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    document.title = 'Moovy';
  }, []);
  const [feedQuery] = useGetFeedQuery({
    variables: {
      uid: user.id,
      page: page,
      limit: 10,
    },
    pause: isServer(),
  });

  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    const { error, data, fetching } = feedQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getFeed! as FeedObject[];
      setItems(() => _data);
    }
  }, [feedQuery]);

  if (feedQuery.fetching) return <Loading />;
  if (feedQuery.error) return <NotFound />;
  if (items.length <= 0) {
    return (
      <>
        <ChildHeader text='Feed' className='feed-header' />
        <EmptyPage msg='Your Feed is empty!' />
      </>
    );
  }
  return (
    <>
      <ChildHeader text='Feed' className='feed-header' />
      <FeedParent onScroll={handleScroll}>
        {items.map((item) =>
          item.type === 'comment' ? (
            <FeedComment
              id={item.id}
              commentedUserId={item.commentedUserId}></FeedComment>
          ) : (
            <></>
          )
        )}
      </FeedParent>
    </>
  );
};

export default Feed;
