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
  useMovieStatusUpdateSubscription,
  useUpdateUserMovieStatusMutation,
} from '../../generated/graphql';

import { ChatStatContainer } from './chatStats.styles';
import { IoMdMoon } from 'react-icons/io';
import { MdOutlineWbSunny } from 'react-icons/md';
import { globalUIStyles } from '../../Utils/interfaces';
import { sliceAddUserNickName } from '../../redux/slices/user/userSlice';
import { sliceCheckEditBoxOpen } from '../../redux/slices/loading/loadingSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

type props = {};

// Component: Displays the likes. comments count of the movie and provides the
// edit nick name option and paint features.
const ChatStats: React.FC<props> = () => {
  let icon_Size = 20;

  // Redux: App selector hooks.
  const movie = useAppSelector((state) => state.movie);
  const user = useAppSelector((state) => state.user);
  const commentsCount = useAppSelector(
    (state) => state.movie.totalCommentsCountOfMovie
  );
  // Redux: App dispatch hook.
  const dispatch = useAppDispatch();
  const [movieLikesSub] = useMovieStatusUpdateSubscription();
  // GraphQL
  const [_a, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const [likesQuery, _lq] = useGetMovieLikesQuery({
    variables: {
      mid: movie.id,
    },
  });
  const [commentsUpdateStatus] = useMovieCommentsUpdateSubscription();
  // React: useState hooks.
  const [nickname, setNickName] = useState<string>(user.nickname);
  const [like, setLike] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);
  // TODO: Comments + replies count
  const [repliesCount, setRepliesCount] = useState<number>(0);
  const [themeToggled, setThemeToggled] = useState<number>(0);
  const theme = useAppSelector((state) => state.settings.theme);

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!sender.tab && request.type === 'EDIT_NICK_NAME') {
      const editedNickName = request.name;
      dispatch(sliceAddUserNickName(editedNickName));
      setNickName(editedNickName);
      sendResponse({
        data: 'Request fulfilled',
      });
    }
    return true;
  });

  // Get Likes Data on Initial Load.
  useEffect(() => {
    const likesData = likesQuery.data;
    const likesFetching = likesQuery.fetching;
    if (!likesFetching && likesData) {
      const _lc = likesData.getMovieLikes?.likesCount;
      const likes = likesData.getMovieLikes?.likes;
      if (likes) {
        const found = likes.map((l) => l.id === user.id);
        if (found.length > 0) setLike(true);
        else setLike(false);
      }
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
      console.log(error);
    } else {
      if (!fetching && data) {
        if (data.movieCommentsUpdate)
          dispatch(sliceSetTotalCommentsOfTheMovie(data.movieCommentsUpdate));
      }
    }
  }, [commentsUpdateStatus]);

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
    setLike(!like);
    updateUserLikeFavorite({
      uid: user?.id,
      mid: movie.id,
      options: {
        like: !like,
      },
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
          <span>{getFormattedNumber(commentsCount!)}</span>
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
        <h4>{nickname ? nickname : user.nickname}</h4>
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
