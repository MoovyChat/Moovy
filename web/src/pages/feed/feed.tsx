import ChildHeader from '../../components/childHeader/childHeader';
import { FeedParent } from './feed.styles';
import Moovy from '../../svgs/moovy-text.png';
import Reel from '../../static/images/reel.png';

const Feed = () => {
  return (
    <>
      <ChildHeader text='Feed' className='feed-header' />
      <FeedParent>
        <div className='logo'>
          <img src={Moovy} alt='Moovy' />
        </div>
        <div className='text'>Your Feed is empty!</div>
      </FeedParent>
    </>
  );
};

export default Feed;
