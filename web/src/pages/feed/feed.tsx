import { CURRENT_DOMAIN, isServer } from '../../constants';
import { FeedItem, useGetFeedQuery } from '../../generated/graphql';
import { Suspense, lazy } from 'react';
import { UIEventHandler, useEffect, useRef, useState } from 'react';

// import ChildHeader from '../../components/childHeader/childHeader';
import { CommentParent } from '../comments/comments.styles';
// import EmptyPage from '../../components/empty-page/emptyPage';
// import FeedComment from './feed-comment/feedComment';
// import FeedReply from './feed-reply/feedReply';
import { Helmet } from 'react-helmet';
// import Loading from '../loading/loading';
// import NotFound from '../notFound/notFound';
import ViewportList from 'react-viewport-list';
import loadable from '@loadable/component';
import { useAppSelector } from '../../redux/hooks';
import { useFetchMoreFeed } from '../../hooks/useFetchMoreFeed';

const FeedComment = loadable(() => import('./feed-comment/feedComment'));
const FeedReply = loadable(() => import('./feed-reply/feedReply'));
const Loading = loadable(() => import('../loading/loading'));
const NotFound = loadable(() => import('../notFound/notFound'));

const EmptyPage = loadable(
  () => import('../../components/empty-page/emptyPage')
);

const ChildHeader = loadable(
  () => import('../../components/childHeader/childHeader')
);
const Feed = () => {
  const user = useAppSelector((state) => state.user);
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<FeedItem[]>([]);
  const [cursor, setCursor] = useState<string>('');
  const [feedQuery] = useGetFeedQuery({
    variables: {
      uid: user?.id,
      first: 10,
      after: cursor,
    },
    pause: isServer(),
  });

  const { fetchMore } = useFetchMoreFeed(
    user.id,
    setItems,
    feedQuery,
    cursor,
    setCursor
  );

  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      console.log('fetching more');
      fetchMore();
    }
  };

  useEffect(() => {
    const { error, data, fetching } = feedQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getFeed;
      setItems(() => _data.nodes as FeedItem[]);
    }
  }, [feedQuery]);

  if (feedQuery.error) return <NotFound />;
  if (items.length <= 0) {
    return (
      <>
        <Helmet>
          <title>{`Feed`}</title>
          <meta name='description' content={`Feed`} />
          <link rel='canonical' href={`${CURRENT_DOMAIN}`} />
        </Helmet>
        <ChildHeader text='Feed' className='feed-header' />
        <EmptyPage msg='Your Feed is empty!' />
      </>
    );
  }
  return (
    <>
      <ChildHeader text='Feed' className='feed-header' />
      <Helmet>
        <title>{`Feed`}</title>
        <meta name='description' content={`Feed`} />
        <link rel='canonical' href={`${CURRENT_DOMAIN}`} />
      </Helmet>
      <CommentParent>
        <div className='child' ref={parentRef} onScroll={handleScroll}>
          <ViewportList ref={listRef} viewportRef={parentRef} items={items}>
            {(item, index) =>
              item.type === 'comment' ? (
                <FeedComment key={index + item.id} id={item.id}></FeedComment>
              ) : (
                <FeedReply key={index + item.id} id={item.id}></FeedReply>
              )
            }
          </ViewportList>
          <div className='extra'>{feedQuery.fetching && <Loading />}</div>
        </div>
      </CommentParent>
    </>
  );
};

export default Feed;
