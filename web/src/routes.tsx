import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import { urqlClient } from './utils/urlClient';
import { withUrqlClient } from 'next-urql';

const BasicInfo = lazy(() => import('./pages/profile/basicInfo'));
const Catalog = lazy(() => import('./pages/catalog/catalog'));
const CommentThread = lazy(() => import('./pages/commentThread/commentThread'));
const Comments = lazy(() => import('./pages/comments/comments'));
const CommentsComponent = lazy(
  () => import('./pages/comments/commentsComponent')
);
const ContactUs = lazy(() => import('./pages/contact-us/contactUs'));
const CookiePolicy = lazy(() => import('./pages/cookie-policy/cookiePolicy'));
const DifferentProfile = lazy(() => import('./pages/profile/differentProfile'));
const EmbedContent = lazy(() => import('./pages/embed-content/embedContent'));
const EmptyPage = lazy(() => import('./components/empty-page/emptyPage'));
const FavTitles = lazy(() => import('./pages/favorites/favTitles'));
const Favorites = lazy(() => import('./pages/favorites/favorites'));
const Feed = lazy(() => import('./pages/feed/feed'));
const GoogleLogIn = lazy(() => import('./pages/login/google-log-in'));
const LikedTitles = lazy(() => import('./pages/favorites/likedTitles'));
const MovieThread = lazy(() => import('./pages/movieThread/movieThread'));
const MoviesCatalog = lazy(() => import('./pages/catalog/moviesCatalog'));
const NotFound = lazy(() => import('./pages/notFound/notFound'));
const Notifications = lazy(
  () => import('./pages/notifications/NotificationsModule')
);
const Premium = lazy(() => import('./pages/premium/premium'));
const PrivacyPolicy = lazy(
  () => import('./pages/privacy-policy/privacyPolicy')
);
const Replies = lazy(() => import('./pages/comments/replies'));
const ReplyThread = lazy(() => import('./pages/commentThread/replyThread'));
const SearchEpisodes = lazy(
  () => import('./pages/search-results/search-episodes')
);
const SearchMovies = lazy(() => import('./pages/search-results/search-movies'));
const SearchPeople = lazy(() => import('./pages/search-results/search-people'));
const SearchResults = lazy(
  () => import('./pages/search-results/searchResults')
);
const SearchShows = lazy(() => import('./pages/search-results/search-shows'));
const ShowsCatalog = lazy(() => import('./pages/catalog/showsCatalog'));
const ShowsThread = lazy(() => import('./pages/shows-thread/showsThread'));
const ShowsThreadComponent = lazy(
  () => import('./pages/shows-thread/showsThreadParent.component')
);
const SplashScreen = lazy(() => import('./pages/splash-screen/splashScreen'));
const TermsAndConditions = lazy(
  () => import('./pages/terms-and-conditions/termsAndConditions')
);
const VisitedTitles = lazy(() => import('./pages/favorites/visitedTitles'));

const AboutUs = lazy(() => import('./pages/about-us/aboutUs'));
const Admin = lazy(() => import('./pages/admin/admin'));

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
