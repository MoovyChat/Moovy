import ChildHeader from '../../components/childHeader/childHeader';
import EmptyPage from '../../components/empty-page/emptyPage';
import { FeedParent } from './feed.styles';
import Moovy from '../../svgs/moovy-text.png';
import Reel from '../../static/images/reel.png';
import { useEffect } from 'react';

const Feed = () => {
  return (
    <>
      <ChildHeader text='Feed' className='feed-header' />
      <EmptyPage msg='Your Feed is empty!' />
    </>
  );
};

export default Feed;
