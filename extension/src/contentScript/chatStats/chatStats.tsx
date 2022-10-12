import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { BiComment, BiEdit, BiPaint } from 'react-icons/bi';
import React, { Dispatch, useEffect, useState } from 'react';
import { colorLog, getFormattedNumber } from '../../Utils/utilities';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
  sliceSetTheme,
} from '../../redux/slices/settings/settingsSlice';
import {
  sliceSetFavCount,
  sliceSetTotalCommentsOfTheMovie,
} from '../../redux/slices/movie/movieSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetMovieLikesQuery,
  useMovieCommentsUpdateSubscription,
  useMovieStatusSubscribeSubscription,
  useUpdateUserMovieStatusMutation,
} from '../../generated/graphql';

import { ChatStatContainer } from './chatStats.styles';
import { IoMdMoon } from 'react-icons/io';
import { MdOutlineWbSunny } from 'react-icons/md';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { globalUIStyles } from '../../Utils/interfaces';
import { sliceCheckEditBoxOpen } from '../../redux/slices/loading/loadingSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

type props = {
  viewStyles: boolean;
  setViewStyles: Dispatch<any>;
};

// Component: Displays the likes. comments count of the movie and provides the
// edit nick name option and paint features.
const ChatStats: React.FC<props> = ({ setViewStyles, viewStyles }) => {
  let icon_Size = 20;

  // Redux: App selector hooks.
  const movie = useAppSelector((state) => state.movie);
  const user = useAppSelector((state) => state.user);
  const commentsCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  // Redux: App dispatch hook.
  const dispatch = useAppDispatch();
  const [movieLikesSub] = useMovieStatusSubscribeSubscription();
  // GraphQL
  const [_a, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const [likesQuery, _lq] = useGetMovieLikesQuery({
    variables: {
      mid: movie.mid,
    },
  });
  const [commentsUpdateStatus] = useMovieCommentsUpdateSubscription();
  // React: useState hooks.
  const [like, setLike] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [favCount, setFavCount] = useState<number>(0);
  const [repliesCount, setRepliesCount] = useState<number>(0);
  const [uiStyles, setGlobalStyles] = useState<globalUIStyles>();
  const [pageError, setPageError] = useState<string>('');
  const [themeToggled, setThemeToggled] = useState<number>(0);
  const theme = useAppSelector((state) => state.settings.theme);
  // Set the like and favorite on Initial load.
  useEffect(() => {
    updateUserLikeFavorite({
      uid: user.uid,
      mid: movie.mid,
      options: {},
    }).then((response) => {
      const { data, error } = response;
      if (error) colorLog(error);
      const { like } = data?.updateUserMovieStats!;
      if (like) setLike(like);
    });
  }, []);

  // Get Likes Data on Initial Load.
  useEffect(() => {
    const likesData = likesQuery.data;
    const likesFetching = likesQuery.fetching;
    if (!likesFetching && likesData) {
      const _lc = likesData.getMovieLikes?.likesCount;
      if (_lc) setLikesCount(_lc);
    }
  }, [likesQuery]);

  // Checks the likes of the movie to determine if the movie is liked or not.
  useEffect(() => {
    if (!movieLikesSub.fetching && movieLikesSub.data) {
      const { userLikesCount } = movieLikesSub.data.movieStatusUpdate;
      setLikesCount(userLikesCount!);
    }
  }, [movieLikesSub]);

  // TODO: Discuss with team about subscriptions.
  // GraphQL Subscription: Get real time comment count.
  useEffect(() => {
    const { data, error, fetching } = commentsUpdateStatus;
    if (error) {
      setPageError(`${error.response}: ${error.message} `);
    } else {
      setPageError('');
      if (!fetching && data) {
        dispatch(sliceSetTotalCommentsOfTheMovie(data.movieCommentsUpdate));
      }
    }
  }, [commentsUpdateStatus]);

  // Get the comments, likes, replies count.
  // TODO: Get the stats from the database..
  useEffect(() => {
    if (movie) {
      // setCommentCount(movieInfo.commentsCount);
      // setRepliesCount(movieInfo.repliesCount!);
    }
    return () => {};
  }, []);

  // Text area: Stops the propagation of the keys.
  useEffect(() => {
    document.addEventListener('keydown', cancelEventT.bind(this), !0);
    function cancelEventT(e: KeyboardEvent) {
      let target = e.target as HTMLTextAreaElement;
      if (target.id === 'comment' || target.id === 'change-nick-name') {
        e.stopImmediatePropagation();
        e.stopPropagation();
      }
    }

    return () => {
      document.removeEventListener('keydown', cancelEventT);
    };
  }, []);

  // Change the nick name.
  const changeNickName = () => {
    dispatch(sliceCheckEditBoxOpen(true));
  };

  // GraphQL: Toggle like of the movie.
  const toggleLike = () => {
    updateUserLikeFavorite({
      uid: user?.uid,
      mid: movie.mid,
      options: {
        like: !like,
      },
    }).then((res) => {
      const { data, error } = res;
      if (error) colorLog(error);
      const isLike = data?.updateUserMovieStats!.like!;
      setLike(isLike);
    });
  };

  return (
    <ChatStatContainer like={like} themeToggled={theme}>
      <div className='capsule'>
        <div
          className='likes'
          onClick={(e) => {
            e.stopPropagation();
            toggleLike();
          }}>
          <span>{getFormattedNumber(likesCount)}</span>
          {like ? (
            <AiFillLike className='icon' size={icon_Size} />
          ) : (
            <AiOutlineLike size={icon_Size} />
          )}
        </div>
        <div className='comment'>
          <span>{getFormattedNumber(commentsCount)}</span>
          <BiComment size={icon_Size} />
        </div>
        <div
          className='theme-mode'
          onClick={(e) => {
            e.stopPropagation();
            theme === 'light'
              ? dispatch(sliceSetTheme('dark'))
              : dispatch(sliceSetTheme('light'));
            setThemeToggled(themeToggled + 1);
          }}>
          <div className='toggle-anim'>
            <div>
              <MdOutlineWbSunny size={icon_Size} />
            </div>
            <div style={{ transform: `rotateX(180deg) rotateY(180deg)` }}>
              <IoMdMoon size={icon_Size} />
            </div>
          </div>
        </div>
      </div>
      <div className='user' onClick={changeNickName}>
        <h4>{user.nickname}</h4>
        <BiEdit size={icon_Size} />
      </div>
      <div
        className='user'
        onClick={() => {
          dispatch(sliceSetPopSlide(true));
          dispatch(slicePopSlideContentType('video-styles'));
        }}>
        <h4>Paint</h4>
        <BiPaint size={icon_Size} />
      </div>
    </ChatStatContainer>
  );
};

export default withUrqlClient(urqlClient)(ChatStats);
