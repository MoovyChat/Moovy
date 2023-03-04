import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { BiComment, BiEdit, BiPaint } from 'react-icons/bi';
import {
  MdOutlineModeComment,
  MdOutlineRemoveRedEye,
  MdOutlineWbSunny,
  MdRemoveRedEye,
  MdThumbUp,
  MdThumbUpOffAlt,
} from 'react-icons/md';
import React, {
  Dispatch,
  MouseEventHandler,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
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
import { MOOVY_URL } from '../../constants';
import { getFormattedNumber } from '../../Utils/utilities';
import { sliceAddUserNickName } from '../../redux/slices/user/userSlice';
import { sliceCheckEditBoxOpen } from '../../redux/slices/loading/loadingSlice';
import { sliceSetTheme } from '../../redux/slices/misc/miscSlice';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

type props = {};

// Component: Displays the likes. comments count of the movie and provides the
// edit nick name option and paint features.
const ChatStats: React.FC<props> = memo(() => {
  const [iconSize] = useState(20);
  const dispatch = useAppDispatch();
  const { id: userId, nickname: userNickname } = useAppSelector(
    (state) => state.user
  );
  const {
    id: movieId,
    totalCommentsCountOfMovie,
    viewsCount,
  } = useAppSelector((state) => state.movie);
  const { accentColor, theme } = useAppSelector((state) => state.misc);
  const [movieLikesSub] = useMovieStatusUpdateSubscription();
  const [_a, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const [likesQuery, _lq] = useGetMovieLikesQuery({
    variables: {
      mid: movieId,
    },
  });
  const [commentsUpdateStatus] = useMovieCommentsUpdateSubscription();
  const [nickname, setNickName] = useState<string>(userNickname);
  const [like, setLike] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [repliesCount, setRepliesCount] = useState<number>(0);
  const [themeToggled, setThemeToggled] = useState<number>(0);
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
        const found = likes.map((l) => l.id === userId);
        if (found.length > 0) setLike(true);
        else setLike(false);
      }
      if (_lc) setLikesCount(_lc);
    }
  }, [likesQuery, userId]);

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
  }, [commentsUpdateStatus, dispatch]);

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

  // Go to user profile..
  const goToProfile = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      let url = `${MOOVY_URL}/profile/${userNickname}`;
      chrome.runtime.sendMessage({
        type: 'OPEN_LINK',
        url: url,
      });
    },
    [userNickname]
  );

  // GraphQL: Toggle like of the movie.
  const toggleLike = useCallback(() => {
    setLike(!like);
    updateUserLikeFavorite({
      uid: userId,
      mid: movieId,
      options: {
        like: !like,
      },
    });
  }, [like, movieId, updateUserLikeFavorite, userId]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(sliceSetTheme(newTheme));
    setThemeToggled((prev) => prev + 1);
  }, [dispatch, theme]);

  const goToVideoStyles = useCallback(() => {
    dispatch(sliceSetPopSlide(true));
    dispatch(slicePopSlideContentType('video-styles'));
  }, [dispatch]);

  return (
    <ChatStatContainer
      like={like}
      themeToggled={theme}
      accentColor={accentColor}>
      <div className='capsule'>
        <div className='likes' onClick={toggleLike}>
          <span>{getFormattedNumber(likesCount)}</span>
          {like ? (
            <MdThumbUp className='icon' size={iconSize} />
          ) : (
            <MdThumbUpOffAlt size={iconSize} />
          )}
        </div>
        <div className='div-cmt-count-style'>
          <span>{getFormattedNumber(totalCommentsCountOfMovie!)}</span>
          <MdOutlineModeComment size={iconSize} />
        </div>
        <div className='div-cmt-count-style'>
          <span>{getFormattedNumber(viewsCount!)}</span>
          <MdOutlineRemoveRedEye size={iconSize} />
        </div>
        <div className='theme-mode' onClick={toggleTheme}>
          <div className='toggle-anim'>
            <div>
              <MdOutlineWbSunny size={iconSize} />
            </div>
            <div style={{ transform: 'rotateX(180deg) rotateY(180deg)' }}>
              <IoMdMoon size={iconSize} />
            </div>
          </div>
        </div>
      </div>
      <div className='user'>
        <h4 onClick={goToProfile} className='nn'>
          {nickname ? nickname : userNickname}
        </h4>
      </div>
      <div className='user' onClick={goToVideoStyles}>
        <BiPaint size={iconSize} className='ic' />
      </div>
    </ChatStatContainer>
  );
});

export default withUrqlClient(urqlClient)(ChatStats);
