import { Movie, MovieFullInformation, User } from '../Utils/interfaces';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  sliceAddMovie,
  sliceAddMovieId,
  sliceSetFetched,
} from '../redux/slices/movie/movieSlice';
import { sliceAddUser, sliceResetUser } from '../redux/slices/user/userSlice';
import {
  useAddMovieIdToUserWatchListMutation,
  useGetMovieQuery,
  useGetUserQuery,
  useInsertMovieMutation,
} from '../generated/graphql';

import { COMMENT } from '../redux/actionTypes';
import CommentButton from './commentButton/commentButton';
import { batch } from 'react-redux';
import { colorLog } from '../Utils/utilities';
import { sliceComment } from '../redux/slices/comment/commentSlice';
import { sliceResetReply } from '../redux/slices/reply/replySlice';
import { sliceResetSettings } from '../redux/slices/settings/settingsSlice';
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
  const [getMovieInfo] = useGetMovieQuery({ variables: { mid: video_id } });
  const [movieFetched, setMovieFetched] = useState<number>(0);
  const stableDispatch = useCallback(
    (args: any) => {
      return dispatch(args);
    },
    [dispatch]
  );

  useEffect(() => {
    colorLog('"Start" component initiated');
    colorLog('Cleared Redux storage');
    // Clear redux cache.
    dispatch(sliceResetUser());
    dispatch(sliceComment({ type: COMMENT.RESET }));
    dispatch(sliceResetReply());
    dispatch(sliceResetSettings());
  }, []);

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
    stableDispatch(sliceAddMovieId(video_id));
    return () => {};
  }, [stableDispatch, video_id]);

  return user?.id ? (
    <CommentButton
      movieFetched={movieFetched}
      setMovieFetched={setMovieFetched}
    />
  ) : (
    <></>
  );
};

export default withUrqlClient(urqlClient)(Start);
