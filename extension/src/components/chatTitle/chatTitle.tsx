import { MdStar, MdStarOutline } from 'react-icons/md';
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetMovieFavCountQuery,
  useUpdateMovieTitleMutation,
  useUpdateUserMovieStatusMutation,
} from '../../generated/graphql';

import { ChatTitleParent } from './chatTitle.styles';
import { colorLog } from '../../Utils/utilities';
import { getVideoTitleFromNetflixWatch } from '../../contentScript/contentScript.utils';
import { sliceAddMovieName } from '../../redux/slices/movie/movieSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

const ChatTitle = () => {
  const [fav, setFav] = useState<boolean>(false);
  const [favCount, SetFavCount] = useState<number>(0);
  const movieTitle = useAppSelector((state) => state.movie.name);
  const movieId = useAppSelector((state) => state.movie.mid);
  const userId = useAppSelector((state) => state.user.uid);
  const [_a, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const dispatch = useAppDispatch();
  const [tempTitle, setTempTitle] = useState<string>(movieTitle);
  // GraphQL: updateMovie and movieComments hooks.
  const [, updateMovieTitle] = useUpdateMovieTitleMutation();
  const [{ error, fetching, data }, _query] = useGetMovieFavCountQuery({
    variables: {
      mid: movieId,
    },
    pause: true,
  });
  useEffect(() => {
    if (movieId) _query();
  }, [movieId]);
  // Update Movie Favorite on the initial load.
  useEffect(() => {
    if (!movieId) return;
    updateUserLikeFavorite({
      uid: userId,
      mid: movieId,
      options: {},
    }).then((response) => {
      console.log(response);
      const { data, error } = response;
      if (error) console.log(error);
      if (data && data.updateUserMovieStats) {
        const { favorite } = data.updateUserMovieStats;
        if (favorite) setFav(favorite);
      }
    });
  }, [userId, movieId]);

  // Get Movie Fav count.
  useEffect(() => {
    if (error) {
      console.log(error);
      return;
    }
    if (!fetching && data) {
      SetFavCount(data.getMovieFavoriteCount ? data.getMovieFavoriteCount : 0);
    }
  }, [fetching]);

  // Update movie title.
  useMemo(() => {
    if (movieTitle) return;
    // Adding the Interval to grab the video title from DOM
    let interval = setInterval(() => {
      console.log('Fetching video title');
      if (movieTitle) {
        setTempTitle(movieTitle);
        clearInterval(interval);
        return;
      }
      let title = getVideoTitleFromNetflixWatch();
      if (title) {
        console.log('Fetched title: ', title);
        setTempTitle(title);
        // Update movie name in the database only if the name is not available.
        dispatch(sliceAddMovieName({ movieId, title }));
        updateMovieTitle({ mid: movieId, name: title });
        clearInterval(interval);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [movieId, movieTitle]);
  return (
    <ChatTitleParent className='chat-title'>
      <div className='logo'></div>
      <div className='title'>
        <div className='set'>{tempTitle}</div>
      </div>
      <div
        className='icon'
        onClick={(e) => {
          e.stopPropagation();
          updateUserLikeFavorite({
            uid: userId,
            mid: movieId,
            options: {
              favorite: !fav,
            },
          }).then((response) => {
            const { data, error } = response;
            if (error) console.log(error);
            const { favorite } = data?.updateUserMovieStats!;
            setFav(favorite!);
            SetFavCount(favCount + 1);
          });
        }}>
        <div className='fav-count'>
          <div className='box'>{favCount}</div>
        </div>
        {!fav ? (
          <MdStarOutline className='star' size={20} />
        ) : (
          <MdStar className='star' size={20} color='gold' />
        )}
      </div>
    </ChatTitleParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(ChatTitle);
