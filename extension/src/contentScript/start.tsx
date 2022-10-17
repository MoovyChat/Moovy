import { Movie, User } from '../Utils/interfaces';
import React, { useCallback, useEffect, useState } from 'react';
import {
  sliceAddMovie,
  sliceAddMovieId,
} from '../redux/slices/movie/movieSlice';
import { sliceAddUser, sliceResetUser } from '../redux/slices/user/userSlice';
import {
  useAddMovieIdToUserWatchListMutation,
  useGetUserQuery,
  useInsertMovieMutation,
} from '../generated/graphql';

import { COMMENT } from '../redux/actionTypes';
import CommentButton from './commentButton/commentButton';
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
  const [_movieInsertStatus, insertMovie] = useInsertMovieMutation();
  const [_status, addMovieIdToUser] = useAddMovieIdToUserWatchListMutation();

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

  //Add the movie to the user watch list and increase count.
  useEffect(() => {
    // Insert the movie into the database.
    // If the movie is already exist in database, stored movie will be returned
    // instead.
    const movieStatus = insertMovie({
      options: {
        id: video_id,
        name: '',
        likes: [],
        platformId: 1,
      },
    });
    movieStatus.then(async (res) => {
      // Add movie id to the user's watched list.
      await addMovieIdToUser({
        mid: video_id,
        uid: user?.id! || data?.getUser?.id!,
      });
      let sqlData = res.data?.insertMovie;
      let toRedux: Movie = {
        id: sqlData?.id!,
        likes: sqlData?.likes!,
        likesCount: sqlData?.likes!.length || 0,
        name: sqlData?.name!,
        commentsLoadedCount: 0,
        totalCommentsCountOfMovie: 0,
        createdAt: sqlData?.createdAt,
        platformId: sqlData?.platformId,
        updatedAt: sqlData?.updatedAt,
        totalRepliesCountOfMovie: 0,
      };
      // Set the movie details to the redux.
      stableDispatch(sliceAddMovie(toRedux));
    });
    return () => {};
  }, [user?.id!, video_id, data?.getUser?.id!, stableDispatch]);

  useEffect(() => {
    //Redux: Add new movie id
    stableDispatch(sliceAddMovieId(video_id));
    return () => {};
  }, [stableDispatch, video_id]);

  return user?.id ? <CommentButton /> : <></>;
};

export default withUrqlClient(urqlClient)(Start);
