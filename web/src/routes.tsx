import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutUs from './pages/about-us/aboutUs';
import Admin from './pages/admin/admin';
import App from './pages/app/app';
// import BasicInfo from './pages/profile/basicInfo';
// import Catalog from './pages/catalog/catalog';
// import CommentThread from './pages/commentThread/commentThread';
// import Comments from './pages/comments/comments';
// import CommentsComponent from './pages/comments/commentsComponent';
import ContactUs from './pages/contact-us/contactUs';
import CookiePolicy from './pages/cookie-policy/cookiePolicy';
// import DifferentProfile from './pages/profile/differentProfile';
import EmbedContent from './pages/embed-content/embedContent';
// import EmptyPage from './components/empty-page/emptyPage';
// import FavTitles from './pages/favorites/favTitles';
// import Favorites from './pages/favorites/favorites';
// import Feed from './pages/feed/feed';
import GoogleLogIn from './pages/login/google-log-in';
import Premium from './pages/premium/premium';
import PrivacyPolicy from './pages/privacy-policy/privacyPolicy';
import ProtectedRoutes from './pages/protectedRoutes';
import TermsAndConditions from './pages/terms-and-conditions/termsAndConditions';
// import Replies from './pages/comments/replies';
// import ReplyThread from './pages/commentThread/replyThread';
// import SearchEpisodes from './pages/search-results/search-episodes';
// import SearchMovies from './pages/search-results/search-movies';
// import SearchPeople from './pages/search-results/search-people';
// import SearchResults from './pages/search-results/searchResults';
// import SearchShows from './pages/search-results/search-shows';
// import ShowsCatalog from './pages/catalog/showsCatalog';
// import ShowsThread from './pages/shows-thread/showsThread';
// import ShowsThreadComponent from './pages/shows-thread/showsThreadParent.component';
import { lazy } from 'react';
import { urqlClient } from './utils/urlClient';
import { withUrqlClient } from 'next-urql';

const Feed = lazy(() => import('./pages/feed/feed'));
const Home = lazy(() => import('./pages/home/home'));
const BasicInfo = lazy(() => import('./pages/profile/basicInfo'));
const Catalog = lazy(() => import('./pages/catalog/catalog'));
const CommentThread = lazy(() => import('./pages/commentThread/commentThread'));
const Comments = lazy(() => import('./pages/comments/comments'));
const CommentsComponent = lazy(
  () => import('./pages/comments/commentsComponent')
);
const DifferentProfile = lazy(() => import('./pages/profile/differentProfile'));
const EmptyPage = lazy(() => import('./components/empty-page/emptyPage'));
const FavTitles = lazy(() => import('./pages/favorites/favTitles'));
const Favorites = lazy(() => import('./pages/favorites/favorites'));
const LikedTitles = lazy(() => import('./pages/favorites/likedTitles'));
const MovieThread = lazy(() => import('./pages/movieThread/movieThread'));
const MoviesCatalog = lazy(() => import('./pages/catalog/moviesCatalog'));
const NotFound = lazy(() => import('./pages/notFound/notFound'));
const Notifications = lazy(
  () => import('./pages/notifications/NotificationsModule')
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
const VisitedTitles = lazy(() => import('./pages/favorites/visitedTitles'));


// Define the application's routing logic using the `react-router-dom` package

const HomeRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* Set up the routing logic for other pages */}
        <Route path='privacy' element={<PrivacyPolicy />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='terms-and-conditions' element={<TermsAndConditions />} />
        <Route path='cookie-policy' element={<CookiePolicy />} />
        <Route path='premium' element={<Premium />} />
        <Route path='embedded-content' element={<EmbedContent />} />
        <Route path='google-login' element={<GoogleLogIn />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='home' element={<Home />}>
            <Route index element={<Feed />} />
            <Route path='catalog' element={<Catalog />}>
              <Route index element={<MoviesCatalog />} />
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

            <Route path='activity' element={<Favorites />}>
              <Route index path=':id/favorites' element={<FavTitles />} />
              <Route path=':id/liked' element={<LikedTitles />} />
              <Route path=':id/history' element={<VisitedTitles />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            {/* Set up the routing logic for the comments and replies pages */}
            <Route
              path='comments'
              element={<CommentsComponent type='Comments' />}>
              <Route path=':id' element={<Comments />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            <Route
              path='replies'
              element={<CommentsComponent type='Replies' />}>
              <Route path=':id' element={<Replies />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='notifications' element={<Notifications />} />
            <Route path='comment' element={<ShowsThreadComponent />}>
              <Route path=':id' element={<CommentThread />} />
              <Route path='*' element={<NotFound />} />
            </Route>
            <Route path='reply' element={<ShowsThreadComponent />}>
              <Route path=':id' element={<ReplyThread />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            {/* Set up the routing logic for the search results page */}
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
          <Route path='admin' element={<Admin />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(HomeRouter);
