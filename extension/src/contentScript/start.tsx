import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  sliceAddMovie,
  sliceAddMovieId,
} from '../redux/slices/movie/movieSlice';
import { sliceAddUser, sliceResetUser } from '../redux/slices/user/userSlice';
import {
  sliceResetSettings,
  sliceSetSmoothWidth,
} from '../redux/slices/settings/settingsSlice';
import { useGetMovieQuery, useGetUserQuery } from '../generated/graphql';

import { COMMENT } from '../redux/actionTypes';
import CommentButton from './commentButton/commentButton';
import { User } from '../Utils/interfaces';
import { colorLog } from '../Utils/utilities';
import { isNumber } from '../constants';
import { sliceComment } from '../redux/slices/comment/commentSlice';
import { sliceResetReply } from '../redux/slices/reply/replySlice';
import { urqlClient } from '../Utils/urqlClient';
import { useAppDispatch } from '../redux/hooks';
import { withUrqlClient } from 'next-urql';

interface props {
  video_id: string;
  userDetails: User;
}

const Start: React.FC<props> = ({ video_id, userDetails }) => {
  const [user, setUser] = useState<User>();
  const dispatch = useAppDispatch();
  const [{ data, error, fetching }, _] = useGetUserQuery({
    variables: { uid: userDetails.id },
  });
  const [movieId, setMovieId] = useState<string>(video_id);
  const [getMovieInfo] = useGetMovieQuery({ variables: { mid: movieId } });
  const [movieFetched, setMovieFetched] = useState<number>(0);

  const stableDispatch = useCallback(
    (args: any) => {
      return dispatch(args);
    },
    [dispatch]
  );

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('START.TSX', request);
    if (!sender.tab && request.type === 'RESET_MOVIE_ID') {
      if (isNumber(movieId)) {
        setMovieId(request.movieId);
        console.log({ movieId, video_id });
        dispatch(sliceSetSmoothWidth(0));
      }
      sendResponse({
        data: 'Movie ID got reset',
      });
    }
    return true;
  });

  useEffect(() => {
    colorLog('"Start" component initiated');
    colorLog('Cleared Redux storage');
    // Clear redux cache.
    dispatch(sliceResetUser());
    dispatch(sliceComment({ type: COMMENT.RESET }));
    dispatch(sliceResetReply());
    dispatch(sliceResetSettings());
  }, [movieId]);

  useEffect(() => {
    if (error) colorLog(error);
    if (!fetching && data) {
      let u = data.getUser as User;
      setUser(u);
      stableDispatch(sliceAddUser(u));
    }
    return () => {};
  }, [stableDispatch, fetching, data, error]);

  useMemo(() => {
    let { data, error, fetching } = getMovieInfo;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getMovie;
      console.log(_data);
      if (_data) {
        dispatch(sliceAddMovie(_data));
        setMovieFetched(1);
      } else {
        setMovieFetched(2);
      }
    }
  }, [getMovieInfo, stableDispatch]);

  useEffect(() => {
    //Redux: Add new movie id
    stableDispatch(sliceAddMovieId(movieId));
    return () => {};
  }, [stableDispatch, movieId]);

  return user?.id && movieId ? (
    <CommentButton
      movieFetched={movieFetched}
      setMovieFetched={setMovieFetched}
    />
  ) : (
    <></>
  );
};

export default withUrqlClient(urqlClient)(Start);
