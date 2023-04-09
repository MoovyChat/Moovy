import AboutUs from '../pages/about-us/aboutUs';
import App from '../pages/app/app';
import BasicInfo from '../pages/profile/basicInfo';
import Catalog from '../pages/catalog/catalog';
import CommentThread from '../pages/commentThread/commentThread';
import Comments from '../pages/comments/comments';
import CommentsComponent from '../pages/comments/commentsComponent';
import ContactUs from '../pages/contact-us/contactUs';
import CookiePolicy from '../pages/cookie-policy/cookiePolicy';
import DifferentProfile from '../pages/profile/differentProfile';
import EmbedContent from '../pages/embed-content/embedContent';
import EmptyPage from '../components/empty-page/emptyPage';
import FavTitles from '../pages/favorites/favTitles';
import Favorites from '../pages/favorites/favorites';
import Feed from '../pages/feed/feed';
import GoogleLogIn from '../pages/login/google-log-in';
import Home from '../pages/home/home';
import LikedTitles from '../pages/favorites/likedTitles';
import MovieThread from '../pages/movieThread/movieThread';
import MoviesCatalog from '../pages/catalog/moviesCatalog';
import NotFound from '../pages/notFound/notFound';
import NotificationsModule from '../pages/notifications/NotificationsModule';
import Premium from '../pages/premium/premium';
import PrivacyPolicy from '../pages/privacy-policy/privacyPolicy';
import ProtectedRoutes from '../pages/protectedRoutes';
import Replies from '../pages/comments/replies';
import ReplyThread from '../pages/commentThread/replyThread';
import SearchEpisodes from '../pages/search-results/search-episodes';
import SearchMovies from '../pages/search-results/search-movies';
import SearchPeople from '../pages/search-results/search-people';
import SearchResults from '../pages/search-results/searchResults';
import SearchShows from '../pages/search-results/search-shows';
import ShowsCatalog from '../pages/catalog/showsCatalog';
import ShowsThread from '../pages/shows-thread/showsThread';
import ShowsThreadComponent from '../pages/shows-thread/showsThreadParent.component';
import TermsAndConditions from '../pages/terms-and-conditions/termsAndConditions';
import VisitedTitles from '../pages/favorites/visitedTitles';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'home',
        element: <Home />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Feed />,
          },
          {
            path: 'catalog',
            element: <Catalog />,
            errorElement: <NotFound />,
            children: [
              { index: true, element: <MoviesCatalog /> },
              { path: 'shows', element: <ShowsCatalog /> },
            ],
          },
          {
            path: 'profile/:id',
            element: <DifferentProfile />,
            errorElement: <NotFound />,
            children: [
              { index: true, element: <BasicInfo /> },
              {
                path: 'comments',
                element: <Comments />,
              },
              {
                path: 'replies',
                element: <Replies />,
              },
            ],
          },
          {
            path: 'activity',
            element: <Favorites />,
            errorElement: <NotFound />,
            children: [
              { index: true, path: ':id/favorites', element: <FavTitles /> },
              { path: ':id/liked', element: <LikedTitles /> },
              { path: ':id/history', element: <VisitedTitles /> },
            ],
          },
          {
            path: 'comments',
            element: <CommentsComponent type="Comments" />,
            errorElement: <NotFound />,
            children: [{ path: ':id', element: <Comments /> }],
          },
          {
            path: 'replies',
            element: <CommentsComponent type="Replies" />,
            errorElement: <NotFound />,
            children: [{ path: ':id', element: <Replies /> }],
          },
          {
            path: 'notifications',
            element: <NotificationsModule />,
          },
          {
            path: 'comment/:id',
            element: <CommentThread />,
            errorElement: <NotFound />,
          },
          {
            path: 'reply/:id',
            element: <ReplyThread />,
            errorElement: <NotFound />,
          },
          {
            path: 'search',
            element: <ShowsThreadComponent />,
            errorElement: <NotFound />,
            children: [
              {
                path: ':search',
                element: <SearchResults />,
                errorElement: <NotFound />,
                children: [
                  {
                    path: '',
                    element: (
                      <EmptyPage msg="Choose any of the above options" />
                    ),
                  },
                  {
                    index: true,
                    path: 'episodes',
                    element: <SearchEpisodes />,
                  },
                  { path: 'shows', element: <SearchShows /> },
                  { path: 'movies', element: <SearchMovies /> },
                  { path: 'people', element: <SearchPeople /> },
                ],
              },
            ],
          },
          {
            path: 'show/:id',
            element: <ShowsThread />,
            errorElement: <NotFound />,
          },
          {
            path: 'movie/:id',
            element: <MovieThread />,
            errorElement: <NotFound />,
          },
        ],
      },
    ],
  },
  {
    path: 'privacy',
    element: <PrivacyPolicy />,
  },
  {
    path: 'about-us',
    element: <AboutUs />,
  },
  {
    path: 'contact',
    element: <ContactUs />,
  },
  {
    path: 'terms-and-conditions',
    element: <TermsAndConditions />,
  },
  {
    path: 'cookie-policy',
    element: <CookiePolicy />,
  },
  {
    path: 'premium',
    element: <Premium />,
  },
  {
    path: 'embedded-content',
    element: <EmbedContent />,
  },
  {
    path: 'google-login',
    element: <GoogleLogIn />,
  },
]);
