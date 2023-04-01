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
// import Home from './pages/home/home';
import LogoLoading from './pages/logo-loading/logoLoading';
import Premium from './pages/premium/premium';
import PrivacyPolicy from './pages/privacy-policy/privacyPolicy';
import ProtectedRoutes from './pages/protectedRoutes';
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
import { Suspense } from 'react';
import TermsAndConditions from './pages/terms-and-conditions/termsAndConditions';
// import VisitedTitles from './pages/favorites/visitedTitles';
import { lazyLoad } from './lazyLoad';
import { urqlClient } from './utils/urlClient';
import { withUrqlClient } from 'next-urql';

const Feed = lazyLoad('./pages/feed/feed');
const Home = lazyLoad('./pages/home/home');
const BasicInfo = lazyLoad('./pages/profile/basicInfo');
const Catalog = lazyLoad('./pages/catalog/catalog');
const CommentThread = lazyLoad('./pages/commentThread/commentThread');
const Comments = lazyLoad('./pages/comments/comments');
const CommentsComponent = lazyLoad('./pages/comments/commentsComponent');
const DifferentProfile = lazyLoad('./pages/profile/differentProfile');
const EmptyPage = lazyLoad('./components/empty-page/emptyPage');
const FavTitles = lazyLoad('./pages/favorites/favTitles');
const Favorites = lazyLoad('./pages/favorites/favorites');
const LikedTitles = lazyLoad('./pages/favorites/likedTitles');
const MovieThread = lazyLoad('./pages/movieThread/movieThread');
const MoviesCatalog = lazyLoad('./pages/catalog/moviesCatalog');
const NotFound = lazyLoad('./pages/notFound/notFound');
const Notifications = lazyLoad('./pages/notifications/NotificationsModule');
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

const VisitedTitles = lazyLoad('./pages/favorites/visitedTitles');

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
