import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './pages/app/app';
import CommentThread from './pages/commentThread/commentThread';
import Comments from './pages/comments/comments';
import Favorites from './pages/favorites/favorites';
import Feed from './pages/feed/feed';
import Home from './pages/home/home';
import MovieThread from './pages/movieThread/movieThread';
import NotFound from './pages/notFound/notFound';
import Notifications from './pages/notifications/notifications';
import Profile from './pages/profile/profile';
import React from 'react';
import Replies from './pages/replies/replies';
import Trending from './pages/trending/trending';

const HomeRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Feed />} />
          <Route path='comments' element={<Comments />} />
          <Route path='comment' element={<CommentThread />}>
            <Route path=':id' element={<CommentThread />} />
          </Route>
          <Route path='replies' element={<Replies />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='trending' element={<Trending />} />
          <Route path='profile' element={<Profile />} />
          <Route path='movie' element={<MovieThread />}>
            <Route path=':id' element={<MovieThread />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/welcome' element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomeRouter;
