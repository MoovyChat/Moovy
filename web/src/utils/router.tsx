import AboutUs from '../pages/about-us/aboutUs';
import Admin from '../pages/admin/adminLayout';
import App from '../pages/app/app';
import ContactUs from '../pages/contact-us/contactUs';
import CookiePolicy from '../pages/cookie-policy/cookiePolicy';
import EmbedContent from '../pages/embed-content/embedContent';
import GoogleLogIn from '../pages/login/google-log-in';
import Premium from '../pages/premium/premium';
import PrivacyPolicy from '../pages/privacy-policy/privacyPolicy';
import TermsAndConditions from '../pages/terms-and-conditions/termsAndConditions';
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import GoogleLoginForExtension from '../pages/login/google-log-in-for-extension';
import Mail from '../pages/admin/mail';
import AdminDatabase from '../pages/admin/adminDatabase';
import AdminIntro from '../pages/admin/adminIntro';

const Feed = lazy(() => import('../pages/feed/feed'));
const Home = lazy(() => import('../pages/home/home'));
const BasicInfo = lazy(() => import('../pages/profile/basicInfo'));
const Catalog = lazy(() => import('../pages/catalog/catalog'));
const CommentThread = lazy(
  () => import('../pages/commentThread/commentThread'),
);
const Comments = lazy(() => import('../pages/comments/comments'));
const CommentsComponent = lazy(
  () => import('../pages/comments/commentsComponent'),
);
const DifferentProfile = lazy(
  () => import('../pages/profile/differentProfile'),
);
const EmptyPage = lazy(() => import('../components/empty-page/emptyPage'));
const FavTitles = lazy(() => import('../pages/favorites/favTitles'));
const Favorites = lazy(() => import('../pages/favorites/favorites'));
const LikedTitles = lazy(() => import('../pages/favorites/likedTitles'));
const MovieThread = lazy(() => import('../pages/movieThread/movieThread'));
const MoviesCatalog = lazy(() => import('../pages/catalog/moviesCatalog'));
const NotFound = lazy(() => import('../pages/notFound/notFound'));
const NotificationsModule = lazy(
  () => import('../pages/notifications/NotificationsModule'),
);
const Replies = lazy(() => import('../pages/comments/replies'));
const ReplyThread = lazy(() => import('../pages/commentThread/replyThread'));
const SearchEpisodes = lazy(
  () => import('../pages/search-results/search-episodes'),
);
const SearchMovies = lazy(
  () => import('../pages/search-results/search-movies'),
);
const SearchPeople = lazy(
  () => import('../pages/search-results/search-people'),
);
const SearchResults = lazy(
  () => import('../pages/search-results/searchResults'),
);
const SearchShows = lazy(() => import('../pages/search-results/search-shows'));
const ShowsCatalog = lazy(() => import('../pages/catalog/showsCatalog'));
const ShowsThread = lazy(() => import('../pages/shows-thread/showsThread'));
const ShowsThreadComponent = lazy(
  () => import('../pages/shows-thread/showsThreadParent.component'),
);
const VisitedTitles = lazy(() => import('../pages/favorites/visitedTitles'));

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
      {
        path: 'admin',
        element: <Admin />,
        errorElement: <NotFound />,

        children: [
          {
            path: 'admin',
            element: <AdminIntro />,
            errorElement: <NotFound />,
          },
          {
            path: 'mail',
            element: <Mail />,
            errorElement: <NotFound />,
          },
          {
            path: 'database',
            element: <AdminDatabase />,
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
  {
    path: 'embed-login',
    element: <GoogleLoginForExtension />,
  },
]);
