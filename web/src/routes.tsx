import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutUs from './pages/about-us/aboutUs';
import BasicInfo from './pages/profile/basicInfo';
import Catalog from './pages/catalog/catalog';
import CommentThread from './pages/commentThread/commentThread';
import Comments from './pages/comments/comments';
import CommentsComponent from './pages/comments/commentsComponent';
import ContactUs from './pages/contact-us/contactUs';
import CookiePolicy from './pages/cookie-policy/cookiePolicy';
import DifferentProfile from './pages/profile/differentProfile';
import EmptyPage from './components/empty-page/emptyPage';
import FavTitles from './pages/favorites/favTitles';
import Favorites from './pages/favorites/favorites';
import Feed from './pages/feed/feed';
import LikedTitles from './pages/favorites/likedTitles';
import MovieThread from './pages/movieThread/movieThread';
import MoviesCatalog from './pages/catalog/moviesCatalog';
import NotFound from './pages/notFound/notFound';
import Notifications from './pages/notifications/NotificationsModule';
import Premium from './pages/premium/premium';
import PrivacyPolicy from './pages/privacy-policy/privacyPolicy';
import Replies from './pages/comments/replies';
import ReplyThread from './pages/commentThread/replyThread';
import SearchEpisodes from './pages/search-results/search-episodes';
import SearchMovies from './pages/search-results/search-movies';
import SearchPeople from './pages/search-results/search-people';
import SearchResults from './pages/search-results/searchResults';
import SearchShows from './pages/search-results/search-shows';
import ShowsCatalog from './pages/catalog/showsCatalog';
import ShowsThread from './pages/shows-thread/showsThread';
import ShowsThreadComponent from './pages/shows-thread/showsThreadParent.component';
import SplashScreen from './pages/splash-screen/splashScreen';
import TermsAndConditions from './pages/terms-and-conditions/termsAndConditions';
import VisitedTitles from './pages/favorites/visitedTitles';
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
          <Route path='search' element={<ShowsThreadComponent />}>
            <Route path=':search' element={<SearchResults />}>
              <Route
                path=''
                element={<EmptyPage msg='Choose any of the above options' />}
              />
              <Route index path='episodes' element={<SearchEpisodes />} />
              <Route path='shows' element={<SearchShows />} />
              <Route path='movies' element={<SearchMovies />} />
              <Route path='people' element={<SearchPeople />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='notifications' element={<Notifications />} />
          <Route path='activity' element={<Favorites />}>
            <Route index path=':id/favorites' element={<FavTitles />} />
            <Route path=':id/liked' element={<LikedTitles />} />
            <Route path=':id/history' element={<VisitedTitles />} />
            <Route path='*' element={<NotFound />} />
          </Route>
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
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/premium' element={<Premium />} />
        {/* <Route path='/welcome' element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(HomeRouter);
