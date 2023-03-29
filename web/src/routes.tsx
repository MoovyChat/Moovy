import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Feed from './pages/feed/feed';
import SplashScreen from './pages/splash-screen/splashScreen';
import { lazyLoad } from './lazyLoad';
import { urqlClient } from './utils/urlClient';
import { withUrqlClient } from 'next-urql';

const BasicInfo = lazyLoad('./pages/profile/basicInfo');
const Catalog = lazyLoad('./pages/catalog/catalog');
const CommentThread = lazyLoad('./pages/commentThread/commentThread');
const Comments = lazyLoad('./pages/comments/comments');
const CommentsComponent = lazyLoad('./pages/comments/commentsComponent');
const ContactUs = lazyLoad('./pages/contact-us/contactUs');
const CookiePolicy = lazyLoad('./pages/cookie-policy/cookiePolicy');
const DifferentProfile = lazyLoad('./pages/profile/differentProfile');
const EmbedContent = lazyLoad('./pages/embed-content/embedContent');
const EmptyPage = lazyLoad('./components/empty-page/emptyPage');
const FavTitles = lazyLoad('./pages/favorites/favTitles');
const Favorites = lazyLoad('./pages/favorites/favorites');
const GoogleLogIn = lazyLoad('./pages/login/google-log-in');
const LikedTitles = lazyLoad('./pages/favorites/likedTitles');
const MovieThread = lazyLoad('./pages/movieThread/movieThread');
const MoviesCatalog = lazyLoad('./pages/catalog/moviesCatalog');
const NotFound = lazyLoad('./pages/notFound/notFound');
const Notifications = lazyLoad('./pages/notifications/NotificationsModule');
const Premium = lazyLoad('./pages/premium/premium');
const PrivacyPolicy = lazyLoad('./pages/privacy-policy/privacyPolicy');
const Replies = lazyLoad('./pages/comments/replies');
const ReplyThread = lazyLoad('./pages/commentThread/replyThread');
const SearchEpisodes = lazyLoad('./pages/search-results/search-episodes');
const SearchMovies = lazyLoad('./pages/search-results/search-movies');
const SearchPeople = lazyLoad('./pages/search-results/search-people');
const SearchResults = lazyLoad('./pages/search-results/searchResults');
const SearchShows = lazyLoad('./pages/search-results/search-shows');
const ShowsCatalog = lazyLoad('./pages/catalog/showsCatalog');
const ShowsThread = lazyLoad('./pages/shows-thread/showsThread');
const ShowsThreadComponent = lazyLoad(
  './pages/shows-thread/showsThreadParent.component'
);
const TermsAndConditions = lazyLoad(
  './pages/terms-and-conditions/termsAndConditions'
);
const VisitedTitles = lazyLoad('./pages/favorites/visitedTitles');

const AboutUs = lazyLoad('./pages/about-us/aboutUs');
const Admin = lazyLoad('./pages/admin/admin');

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
        <Route path='/embedded-content' element={<EmbedContent />} />
        <Route path='/google-login' element={<GoogleLogIn />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='/welcome' element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(HomeRouter);
