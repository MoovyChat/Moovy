import { CommentThreadParent, StyledButton } from './commentThread.styles';
import {
  MdBlock,
  MdDelete,
  MdFavorite,
  MdFavoriteBorder,
  MdFlag,
  MdOutlineFavoriteBorder,
  MdOutlineMoreHoriz,
  MdReply,
  MdReport,
} from 'react-icons/md';
import {
  Movie,
  Title,
  User,
  useGetCommentOrReplyQuery,
  useGetCommentQuery,
  useGetMovieQuery,
  useGetTitleInfoMutation,
  useIsFollowingUserQuery,
  useToggleFollowMutation,
} from '../../generated/graphql';
import {
  ParsedText,
  getDateFormat,
  getFormattedNumber,
} from '../../utils/helpers';
import React, {
  MouseEventHandler,
  MutableRefObject,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Reply, textMap } from '../../utils/interfaces';
import { isServer, popupStates, textMapTypes } from '../../constants';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ChildHeader from '../../components/childHeader/childHeader';
import CommentButton from '../../components/comment-button/commentButton';
import CommentCard from '../../components/comment-card/commentCard';
import EmptyPage from '../../components/empty-page/emptyPage';
import FollowButton from '../../components/follow-button/followButton';
import { Image } from '../../components/Image/image';
import MiniCommentCard from '../../components/mini-comment-card/miniCommentCard';
import MovieInfo from '../../components/comment-card/movieInfo';
import ProfilePic from '../../components/profilePic/profilePic';
import ReplyCard from '../../components/comment-card/replyCard';
import { SpoilerTag } from '../../components/comment-card/commentCard.styles';
import { batch } from 'react-redux';
import { urqlClient } from '../../utils/urlClient';
import useFormatMessage from '../../hooks/useFormatMessage';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

type props = {
  type: string;
  comment: any;
  replies: any;
  userRef: MutableRefObject<User | null>;
  page?: number | 1;
  lastPage?: number | 1;
  setPage?: any;
  like: boolean;
  likesCount: number;
  likedUsers?: User[];
  updateLike: MouseEventHandler<HTMLSpanElement>;
};

const CommentTemplate: React.FC<props> = ({
  type,
  comment,
  replies,
  userRef,
  page,
  setPage,
  lastPage,
  like,
  likesCount,
  likedUsers,
  updateLike,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const popWindowOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [movieDetails] = useGetMovieQuery({
    variables: {
      mid: comment?.movieId!,
    },
    pause: isServer(),
  });
  const movieRef = useRef<Movie | null>(null);
  const titleRef = useRef<Title | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const [, getTitleInfo] = useGetTitleInfoMutation();
  const loggedInUser = useAppSelector((state) => state.user);
  const [showEpisodeInfo, setShowEpisodeInfo] = useState<boolean>(false);
  const [showTitleInfo, setShowTitleInfo] = useState<boolean>(false);
  const isReply = comment?.parentCommentId ? true : false;
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [cardHeight, setCardHeight] = useState<string>('');
  const [openOptionWindow, setOpenOptionWindow] = useState<boolean>(false);
  const [deleteAction, setDeleteAction] = useState<boolean>(false);

  const [amIFollowingThisUser] = useIsFollowingUserQuery({
    variables: {
      uid: loggedInUser.id,
      fid: comment.commentedUserId,
    },
    pause: isServer(),
  });

  useEffect(() => {
    ref && ref.current?.scrollIntoView();
  }, [ref.current]);

  // Get movie Info
  useEffect(() => {
    const { data, error, fetching } = movieDetails;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getMovie as Movie;
      movieRef.current = _data;
      getTitleInfo({ getTitleInfoId: _data.titleId }).then((titleInfo) => {
        const { data, error } = titleInfo;
        if (error) console.log(error);
        if (data) {
          const _data = data.getTitleInfo as Title;
          titleRef.current = _data;
        }
      });
    }
  }, [movieDetails]);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage(() => page! + 1);
      }
    }
  };

  const onEpisodeEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowEpisodeInfo(true);
  };
  const onEpisodeLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowEpisodeInfo(false);
  };

  const onTitleEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowTitleInfo(true);
  };
  const onTitleLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowTitleInfo(false);
  };

  useEffect(() => {
    if (!messageRef) return;
    if (!messageRef.current) return;
    const { clientHeight, scrollHeight } = messageRef.current;
    setCardHeight(() => `${scrollHeight}px`);
    if (clientHeight < scrollHeight) {
      setIsEllipsis(() => true);
    } else {
      setIsEllipsis(() => false);
    }
  }, [messageRef.current]);

  const deleteCommentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setDeleteAction(() => true);
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetPopupData(comment));
      if (type === 'comment') {
        dispatch(sliceSetSelectedElement(popupStates.DELETE_COMMENT));
      } else if (type === 'reply') {
        dispatch(sliceSetSelectedElement(popupStates.DELETE_REPLY));
      }
      setOpenOptionWindow(() => false);
    });
  };

  const showLikesWindowHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const _sentData = {
      data: likedUsers,
      type: 'Liked',
    };
    batch(() => {
      dispatch(sliceSetPopupData(_sentData));
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.OPEN_FOLLOW));
    });
  };

  const openCommentWindowHandler: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.ADD_REPLY));
      dispatch(sliceSetPopupData(comment));
    });
  };

  let formattedMsg = useFormatMessage(comment.message);

  return (
    <CommentThreadParent
      cardHeight={cardHeight}
      showMore={showMore}
      showEpisodeInfo={showEpisodeInfo}
      showTitleInfo={showTitleInfo}
      isReply={isReply}
      movieBg={movieRef.current?.stills as string}
      titleBg={titleRef.current?.boxart as string}>
      <ChildHeader
        className='comment-header'
        text={type.charAt(0).toUpperCase() + type.slice(1)}
      />
      <div className='main-container' onScroll={handleScroll}>
        {isReply && (
          <MiniCommentCard
            className='cc'
            id={comment?.parentReplyId! as string}
            type={
              comment?.parentCommentId === comment?.parentReplyId
                ? 'comment'
                : 'reply'
            }
            extendData={true}
          />
        )}
        <div className='comment-container' ref={ref}>
          <div className='inner'>
            <div className='comment-usr-detail'>
              <div className='user-container'>
                <div className='user'>
                  <ProfilePic
                    src={userRef.current?.photoUrl!}
                    user={userRef.current as User}
                    tooltip={true}
                  />
                </div>
                <div className='name'>{userRef.current?.nickname}</div>
              </div>
              <div className='options-container'>
                {userRef.current?.nickname !== loggedInUser.nickname &&
                  userRef &&
                  userRef.current && (
                    <FollowButton
                      userId={userRef.current?.id!}
                      nickName={userRef.current?.nickname!}
                    />
                  )}
                <div className='option'>
                  <div
                    className='option-icon'
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenOptionWindow(() => !openOptionWindow);
                    }}>
                    <MdOutlineMoreHoriz className='icon' size={20} />
                  </div>
                  {openOptionWindow && (
                    <div className='option-window'>
                      {userRef.current?.nickname === loggedInUser.nickname && (
                        <div
                          className='opo delete'
                          onClick={deleteCommentHandler}>
                          <div className='opo-icon'>
                            <MdDelete size={20} />
                          </div>
                          <div className='opo-text'>Delete</div>
                        </div>
                      )}
                      <div className='opo'>
                        <div className='opo-icon'>
                          <MdFlag size={20} />
                        </div>
                        <div className='opo-text'>Flag this comment</div>
                      </div>
                      <div className='opo'>
                        <div className='opo-icon'>
                          <MdBlock size={20} />
                        </div>
                        <div className='opo-text'>
                          Block @{userRef.current?.nickname}
                        </div>
                      </div>
                      <div className='opo'>
                        <div className='opo-icon'>
                          <MdReport size={20} />
                        </div>
                        <div className='opo-text'>
                          Report @{userRef.current?.nickname}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='comment-usr-msg'>
              <div className='cm-us-xt' ref={messageRef}>
                {formattedMsg.map((msg: textMap, index) =>
                  msg.type === textMapTypes.SPOILER ? (
                    <SpoilerTag key={index}>{msg.message}</SpoilerTag>
                  ) : (
                    <React.Fragment key={index}>
                      <span
                        key={index}
                        className={msg.type}
                        onClick={(e) => {
                          if (msg.type === 'user') {
                            navigate(`/profile/${msg.message.slice(1)}`);
                          }
                        }}>
                        {ParsedText(msg.message)}{' '}
                      </span>
                    </React.Fragment>
                  )
                )}
              </div>
              {isEllipsis && (
                <div
                  className='show-more'
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMore(!showMore);
                  }}>
                  {showMore ? 'Show less' : 'Show more'}
                </div>
              )}
            </div>
            <div className='comment-usr-time'>
              {getDateFormat(comment?.createdAt)}
            </div>
            <div className='movie-chips'>
              {titleRef && titleRef.current?.type === 'show' && (
                <React.Fragment>
                  <div
                    className='name title'
                    onMouseEnter={onTitleEnter}
                    onMouseLeave={onTitleLeave}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/show/${titleRef?.current?.id}`);
                    }}>
                    {titleRef.current?.title} {movieRef.current?.season}
                  </div>
                </React.Fragment>
              )}
              <div
                className='name'
                onMouseEnter={onEpisodeEnter}
                onMouseLeave={onEpisodeLeave}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/movie/${movieRef?.current?.id}`);
                }}>
                {movieRef.current?.name}
              </div>
            </div>
            <div className='show-details'>
              <div className='bg'>
                {showEpisodeInfo ? (
                  <Image
                    key='episode'
                    src={movieRef.current?.stills as string}
                    alt='background-image'
                  />
                ) : showTitleInfo ? (
                  <Image
                    key='title'
                    src={titleRef.current?.artwork as string}
                    alt='background-image'
                  />
                ) : (
                  <Image
                    src='https://png.pngtree.com/thumb_back/fh260/background/20210316/pngtree-black-abstract-fluorescent-line-background-image_587942.jpg'
                    alt='background-image'
                  />
                )}
              </div>
              {showEpisodeInfo ? (
                <MovieInfo movie={movieRef.current!} />
              ) : (
                showTitleInfo && <MovieInfo title={titleRef.current!} />
              )}
            </div>
            <div className='comment-usr-stats'>
              <div className='likes cus'>
                <span className='icon' onClick={updateLike}>
                  {like ? (
                    <MdFavorite size={20} fill='#ff005d' />
                  ) : (
                    <MdOutlineFavoriteBorder size={20} />
                  )}
                </span>
                <span className='count' onClick={showLikesWindowHandler}>
                  {getFormattedNumber(likesCount)} Likes
                </span>
              </div>
              <div className='comment cus'>
                <span className='icon' onClick={openCommentWindowHandler}>
                  <MdReply size={20} />
                </span>
                <span className='count'>
                  {getFormattedNumber(comment?.repliesCount!)} Replies
                </span>
              </div>
            </div>
            <div className='comment-replies'>
              {replies?.length! > 0 ? (
                replies?.map((reply: Reply) => (
                  <ReplyCard
                    comment={reply}
                    key={`reply${reply.id!}`}
                    isMain={true}
                  />
                ))
              ) : (
                <div className='no-data'>
                  <EmptyPage msg='No Replies yet' />
                </div>
              )}
            </div>
          </div>
        </div>
        <CommentButton type='comment' data={comment} />
      </div>
    </CommentThreadParent>
  );
};

export default withUrqlClient(urqlClient)(CommentTemplate);
