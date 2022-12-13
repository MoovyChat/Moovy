import { BrowserRouter, Route, Routes, json } from 'react-router-dom';
import { Comment, Reply } from './utils/interfaces';
import React, { UIEventHandler, useEffect, useState } from 'react';
import {
  useGetCommentsOfTheUserQuery,
  useGetRepliesOfTheUserQuery,
} from './generated/graphql';

import App from './pages/app/app';
import CommentThread from './pages/commentThread/commentThread';
import Comments from './pages/comments/comments';
import DifferentProfile from './pages/profile/differentProfile';
import Favorites from './pages/favorites/favorites';
import Feed from './pages/feed/feed';
import Home from './pages/home/home';
import MovieThread from './pages/movieThread/movieThread';
import NotFound from './pages/notFound/notFound';
import Notifications from './pages/notifications/NotificationsModule';
import Replies from './pages/comments/replies';
import ReplyThread from './pages/commentThread/replyThread';
import Trending from './pages/trending/trending';
import _ from 'lodash';
import { isServer } from './constants';
import { urqlClient } from './utils/urlClient';
import { useAppSelector } from './redux/hooks';
import { withUrqlClient } from 'next-urql';

const HomeRouter = () => {
  const user = useAppSelector((state) => state.user);
  const [comments, setComments] = useState<Comment[]>([]);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [page, setPage] = useState<number>(1);
  const [replyPage, setReplyPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [replyLastPage, setReplyLastPage] = useState<number>(1);
  const [{ data, fetching, error }] = useGetCommentsOfTheUserQuery({
    variables: { uid: user.id, limit: 15, page: page, asc: false },
    pause: isServer(),
  });

  const [replyData] = useGetRepliesOfTheUserQuery({
    variables: { uid: user.id, limit: 15, page: replyPage, asc: false },
    pause: isServer(),
  });

  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      const allComments: Comment[] | undefined =
        data.getCommentsOfTheUser?.comments;
      let newComments = _.chain(comments)
        .concat(allComments!)
        .uniqBy('id')
        .value();
      setComments(newComments);
      setLastPage(data?.getCommentsOfTheUser?.lastPage!);
    }
  }, [fetching, data, error]);

  useEffect(() => {
    const { data, error, fetching } = replyData;
    if (error) console.log(error);
    if (!fetching && data) {
      const allReplies: Reply[] | undefined =
        data.getRepliesOfTheUser?.comments;
      let newReplies = _.chain(replies)
        .concat(allReplies!)
        .uniqBy('id')
        .value();
      setReplies(newReplies);
      setReplyLastPage(data?.getRepliesOfTheUser?.lastPage!);
    }
  }, [replyData]);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      if (page !== lastPage) {
        setPage((page) => page + 1);
      }
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Feed />} />
          <Route
            path='comments'
            element={
              <Comments
                comments={comments}
                handleScroll={handleScroll}
                fetching={fetching}
              />
            }
          />
          <Route path='comment' element={<CommentThread />}>
            <Route path=':id' element={<CommentThread />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='reply' element={<ReplyThread />}>
            <Route path=':id' element={<ReplyThread />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route
            path='replies'
            element={
              <Replies
                replies={replies}
                handleScroll={handleScroll}
                fetching={replyData.fetching}
              />
            }
          />
          <Route path='notifications' element={<Notifications />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='trending' element={<Trending />} />
          <Route path='profile' element={<DifferentProfile />}>
            <Route path=':id' element={<DifferentProfile />} />
          </Route>
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

export default withUrqlClient(urqlClient, { ssr: true })(HomeRouter);
