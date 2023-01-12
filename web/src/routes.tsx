import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BasicInfo from './pages/profile/basicInfo';
import Catalog from './pages/catalog/catalog';
import CommentThread from './pages/commentThread/commentThread';
import Comments from './pages/comments/comments';
import CommentsComponent from './pages/comments/commentsComponent';
import DifferentProfile from './pages/profile/differentProfile';
import Favorites from './pages/favorites/favorites';
import Feed from './pages/feed/feed';
import MovieThread from './pages/movieThread/movieThread';
import MoviesCatalog from './pages/catalog/moviesCatalog';
import NotFound from './pages/notFound/notFound';
import Notifications from './pages/notifications/NotificationsModule';
import Replies from './pages/comments/replies';
import ReplyThread from './pages/commentThread/replyThread';
import ShowsCatalog from './pages/catalog/showsCatalog';
import ShowsThread from './pages/shows-thread/showsThread';
import ShowsThreadComponent from './pages/shows-thread/showsThreadParent.component';
import SplashScreen from './pages/splash-screen/splashScreen';
import { urqlClient } from './utils/urlClient';
import { withUrqlClient } from 'next-urql';

const HomeRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SplashScreen />}>
          <Route index element={<Feed />} />
          <Route
            path='comments'
            element={<CommentsComponent type='Comments' />}>
            <Route path=':id' element={<Comments />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='comment' element={<ShowsThreadComponent />}>
            <Route path=':id' element={<CommentThread />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='reply' element={<ShowsThreadComponent />}>
            <Route path=':id' element={<ReplyThread />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='replies' element={<CommentsComponent type='Replies' />}>
            <Route path=':id' element={<Replies />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='notifications' element={<Notifications />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='catalog' element={<Catalog />}>
            <Route path='' index element={<MoviesCatalog />} />
            <Route path='shows' element={<ShowsCatalog />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='profile' element={<ShowsThreadComponent />}>
            <Route path=':id' element={<DifferentProfile />}>
              <Route path='' index element={<BasicInfo />} />
              <Route path='comments' element={<Comments />} />
              <Route path='replies' element={<Replies />} />
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='show' element={<ShowsThreadComponent />}>
            <Route path=':id' index element={<ShowsThread />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='movie' element={<ShowsThreadComponent />}>
            <Route path=':id' element={<MovieThread />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
        {/* <Route path='/welcome' element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(HomeRouter);
