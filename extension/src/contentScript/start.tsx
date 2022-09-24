import { Movie, User } from '../Utils/interfaces';
import React, { useCallback, useEffect, useState } from 'react';
import {
  sliceAddMovie,
  sliceAddMovieId,
  sliceAddMovieName,
} from '../redux/slices/movie/movieSlice';
import { sliceAddUser, sliceResetUser } from '../redux/slices/user/userSlice';
import {
  useAddMovieIdToUserWatchListMutation,
  useGetUserQuery,
  useInsertMovieMutation,
} from '../generated/graphql';

import CommentButton from './commentButton/commentButton';
import { colorLog } from '../Utils/utilities';
import { sliceResetComments } from '../redux/slices/comment/commentSlice';
import { sliceResetReply } from '../redux/slices/reply/replySlice';
import { sliceResetSettings } from '../redux/slices/settings/settingsSlice';
import { useAppDispatch } from '../redux/hooks';

interface props {
  video_id: string;
  userDetails: User;
}

const Start: React.FC<props> = ({ video_id, userDetails }) => {
  const [user, setUser] = useState<User>();
  const dispatch = useAppDispatch();
  const [{ data, error, fetching }, _] = useGetUserQuery({
    variables: { uid: userDetails.uid },
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
    colorLog('"Start" component started');
    colorLog('Cleared Redux storage');
    // Clear redux cache.
    dispatch(sliceResetUser());
    dispatch(sliceResetComments());
    dispatch(sliceResetReply());
    dispatch(sliceResetSettings());
  }, []);

  useEffect(() => {
    if (error) colorLog(error);
    if (!fetching && data) {
      let u = data.getUser as User;
      colorLog(u);
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
        mid: video_id,
        name: '',
        likes: [],
        platformId: 1,
      },
    });
    movieStatus.then(async (res) => {
      // Add movie id to the user's watched list.
      await addMovieIdToUser({
        mid: video_id,
        uid: user?.uid! || data?.getUser?.uid!,
      });
      let sqlData = res.data?.insertMovie;
      let toRedux: Movie = {
        mid: sqlData?.mid!,
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
  }, [user?.uid!, video_id, data?.getUser?.uid!, stableDispatch]);

  useEffect(() => {
    //Redux: Clear movie name
    stableDispatch(sliceAddMovieName(''));
    //Redux: Add new movie id
    stableDispatch(sliceAddMovieId(video_id));
    return () => {};
  }, [stableDispatch, video_id]);

  return user?.uid ? <CommentButton /> : <></>;
};

export default Start;
