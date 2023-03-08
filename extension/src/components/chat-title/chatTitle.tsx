import { EXT_URL, isServerSide } from '../../constants';
import { MdStar, MdStarOutline } from 'react-icons/md';
import {
  sliceSetToastBody,
  sliceSetToastVisible,
} from '../../redux/slices/toast/toastSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useMemo, useState } from 'react';
import {
  useGetMovieFavCountQuery,
  useGetOnlyUserMovieStatsQuery,
  useUpdateMovieTitleMutation,
  useUpdateUserMovieStatusMutation,
} from '../../generated/graphql';

import { ChatTitleParent } from './chatTitle.styles';
import { batch } from 'react-redux';
import { getVideoTitleFromNetflixWatch } from '../../contentScript/contentScript.utils';
import { iconsEnum } from '../../Utils/enums';
import { sliceAddMovieName } from '../../redux/slices/movie/movieSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

const ChatTitle = () => {
  const [fav, setFav] = useState<boolean>(false);
  const [favCount, SetFavCount] = useState<number>(0);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const movieTitle = useAppSelector((state) => state.movie.name);
  const movieId = useAppSelector((state) => state.movie.id);
  const userId = useAppSelector((state) => state.user.id);
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
  const [movieStats] = useGetOnlyUserMovieStatsQuery({
    variables: { uid: userId, mid: movieId },
    pause: isServerSide(),
  });
  useMemo(() => {
    const { error, fetching, data } = movieStats;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getOnlyUserMovieStats;
      const _fav = _data?.favorite!;
      setFav(() => _fav);
    }
  }, [movieStats]);
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
      const { data, error } = response;
      if (error) console.log(error);
      if (data && data.updateUserMovieStats) {
        const { favorite } = data.updateUserMovieStats;
        if (favorite !== null && favorite !== undefined) setFav(favorite);
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
      if (movieTitle) {
        setTempTitle(movieTitle);
        clearInterval(interval);
        return;
      }
      let title = getVideoTitleFromNetflixWatch();
      if (title) {
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
      <div className='logo'>
        <img src={`${EXT_URL}/Moovy/moovyIcon.png`} alt='logo' />
      </div>
      <div className='title'>
        <div className='set'>{movieTitle ? movieTitle : tempTitle}</div>
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
            let toastBody = {
              icon: '',
              message: '',
            };
            if (error) console.log(error);
            if (data && data.updateUserMovieStats) {
              const { favorite } = data?.updateUserMovieStats!;
              if (favorite !== null && favorite !== undefined) {
                setFav(favorite);
                if (!favorite) {
                  toastBody = {
                    icon: iconsEnum.REMOVE_FAVORITES,
                    message: 'Removed from favorites',
                  };
                  SetFavCount(favCount - 1);
                } else {
                  toastBody = {
                    icon: iconsEnum.ADD_FAVORITES,
                    message: 'Added to favorites',
                  };
                  SetFavCount(favCount + 1);
                }
                batch(() => {
                  dispatch(sliceSetToastVisible(true));
                  dispatch(sliceSetToastBody(toastBody));
                });
              }
            }
          });
        }}>
        <div className='fav-count'>
          <div className='box'>{favCount}</div>
        </div>
        {!fav ? (
          <MdStarOutline className='star' size={20} />
        ) : (
          <MdStar className='star' size={20} color={accentColor} />
        )}
      </div>
    </ChatTitleParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(ChatTitle);
