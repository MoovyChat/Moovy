import './commentCard.css';

import { CardParent, SpoilerTag } from './commentCard.styles';
import {
  MdDelete,
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdReply,
} from 'react-icons/md';
import {
  Movie,
  Title,
  Users,
  useGetMovieQuery,
  useGetTitleInfoQuery,
  useGetUserQuery,
} from '../../generated/graphql';
import {
  ParsedText,
  getFormattedNumber,
  getTimeFrame,
} from '../../utils/helpers';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { isServer, popupStates, textMapTypes } from '../../constants';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CSSTransition } from 'react-transition-group';
import CardTemplateLoader from './cardTemplateLoader';
import { Image } from '../Image/image';
import LinkPreviewComponent from '../link-preview/linkPreview';
import MovieInfo from './movieInfo';
import ProfilePic from '../profilePic/profilePic';
import { batch } from 'react-redux';
import { textMap } from '../../utils/interfaces';
import useFormatMessage from '../../hooks/useFormatMessage';
import { useNavigate } from 'react-router-dom';

type props = {
  type: string;
  goToComment: MouseEventHandler<HTMLDivElement>;
  comment: any;
  updateLike: MouseEventHandler<HTMLSpanElement>;
  like: boolean;
  likeCount: number;
  isMain?: boolean;
};

const CardTemplate: React.FC<props> = ({
  goToComment,
  comment,
  updateLike,
  like,
  likeCount,
  isMain,
  type,
}) => {
  const navigate = useNavigate();
  const mounted = useRef<boolean>(false);
  const movieId = comment.movieId;
  const [showEpisodeInfo, setShowEpisodeInfo] = useState<boolean>(false);
  const [showTitleInfo, setShowTitleInfo] = useState<boolean>(false);
  const commentedUserId = comment.commentedUserId;
  const loggedInUser = useAppSelector(state => state.user);
  const isSameUserAsLoggedIn = commentedUserId === loggedInUser.id;
  const [movieRef, setMovieRef] = useState<Movie | null>(null);
  const [movieRefId, setMovieRefId] = useState<string>('');
  const [titleRef, setTitleRef] = useState<Title | null>(null);
  const userRef = useRef<Users | null>(null);
  let episodeEntered = useRef<boolean>(false);
  const commentRef = useRef<HTMLDivElement | null>(null);
  let titleEntered = useRef<boolean>(false);
  const isReply = !isNaN(parseInt(comment.parentCommentId));
  const messageRef = useRef<HTMLDivElement | null>(null);
  const [isEllipsis, setIsEllipsis] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [cardHeight, setCardHeight] = useState<string>('');
  let timeout = 1000;

  const [userInfo] = useGetUserQuery({
    variables: { uid: commentedUserId },
    pause: isSameUserAsLoggedIn && isServer(),
  });

  const [movieDetails] = useGetMovieQuery({
    variables: {
      mid: movieId,
    },
    pause: isMain || isServer(),
  });

  const [getTitleInfo] = useGetTitleInfoQuery({
    variables: {
      getTitleInfoId: movieRefId,
    },
  });

  // Check if the component is mounted or not for animation purposes.
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, [mounted.current]);

  const onEpisodeEnter: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    episodeEntered.current = true;
    setTimeout(() => {
      episodeEntered.current && setShowEpisodeInfo(true);
    }, timeout);
  };
  const onEpisodeLeave: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    episodeEntered.current = false;
    setTimeout(() => {
      setShowEpisodeInfo(false);
    }, timeout);
  };

  const onTitleEnter: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    titleEntered.current = true;
    setTimeout(() => {
      titleEntered.current && setShowTitleInfo(true);
    }, timeout);
  };
  const onTitleLeave: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    titleEntered.current = false;
    setTimeout(() => {
      setShowTitleInfo(false);
    }, timeout);
  };

  // Get movie Info
  useEffect(() => {
    if (isMain) return;
    const { data, error, fetching } = movieDetails;
    if (!fetching && data) {
      const _data = data.getMovie as Movie;
      setMovieRef(() => _data);
      setMovieRefId(() => _data.titleId);
    }
  }, [movieDetails, isMain]);

  useEffect(() => {
    const { data, fetching, error } = getTitleInfo;

    if (!fetching && data) {
      const _data = data.getTitleInfo as Title;
      setTitleRef(() => _data);
    }
  }, [getTitleInfo]);

  // Get user info.
  useEffect(() => {
    const { data, fetching, error } = userInfo;
    if (!fetching && data) {
      const _user = data.getUser as Users;
      userRef.current = _user;
    }
  }, [userRef.current, userInfo]);

  let formattedMsg = useFormatMessage(comment.message);

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

  const openCommentWindowHandler: MouseEventHandler<HTMLSpanElement> = e => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.ADD_REPLY));
      dispatch(sliceSetPopupData(comment));
    });
  };

  const showLikesWindowHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    // Send comment/reply id as data.
    const _sentData = {
      data: comment.id,
      type: 'Liked',
      isReply: isReply,
    };
    batch(() => {
      dispatch(sliceSetPopupData(_sentData));
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.OPEN_LIKES));
    });
  };

  const deleteCommentHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetPopupData(comment));
      if (type === 'comment') {
        dispatch(sliceSetSelectedElement(popupStates.DELETE_COMMENT));
      } else if (type === 'reply') {
        dispatch(sliceSetSelectedElement(popupStates.DELETE_REPLY));
      }
    });
  };

  const clickableDiv = document.querySelector('div') as HTMLDivElement;
  clickableDiv.setAttribute('tabindex', '0');
  clickableDiv.setAttribute('role', 'button');
  clickableDiv.setAttribute('href', '#');
  clickableDiv.addEventListener('click', function () {
    if (this.getAttribute('tabindex') === '0') {
      this.setAttribute('tabindex', '-1');
    } else {
      this.setAttribute('tabindex', '0');
    }
  });

  if (movieDetails.fetching || getTitleInfo.fetching)
    return <CardTemplateLoader />;
  return (
    <CSSTransition
      in={mounted.current}
      classNames="comment"
      timeout={300}
      nodeRef={commentRef}
    >
      <CardParent
        tabIndex={0}
        role="button"
        onClick={goToComment}
        showEpisodeInfo={showEpisodeInfo}
        showTitleInfo={showTitleInfo}
        episodePoster={movieRef?.stills}
        titlePoster={titleRef?.artwork}
        isHover={showEpisodeInfo || showTitleInfo}
        cardHeight={cardHeight}
        showMore={showMore}
      >
        <div className="bg">
          {!isMain && showEpisodeInfo ? (
            <Image
              key="episode"
              src={movieRef?.stills as string}
              alt="background-image"
            />
          ) : !isMain && showTitleInfo ? (
            <Image
              key="title"
              src={titleRef?.artwork as string}
              alt="background-image"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="content">
          <div className="user-pic">
            <div className="pic-container">
              <ProfilePic
                src={
                  isSameUserAsLoggedIn
                    ? loggedInUser.photoUrl!
                    : userRef.current?.photoUrl!
                }
                user={
                  isSameUserAsLoggedIn
                    ? loggedInUser
                    : (userRef.current as Users)
                }
                tooltip={true}
              />
            </div>
          </div>
          <div className="message" onClick={goToComment}>
            <div className="username">
              <div className="container">
                <div className="user">
                  {isSameUserAsLoggedIn
                    ? loggedInUser.nickname
                    : userRef.current?.nickname}
                </div>
                <div className="time">
                  {comment.createdAt === 'Posting...'
                    ? 'Posting...'
                    : getTimeFrame(comment.createdAt)}
                </div>
              </div>
              {isReply && (
                <div className="isReply">
                  <span>Replying to</span>{' '}
                  <span
                    className="ru"
                    onClick={e => {
                      e.stopPropagation();
                      navigate(`/home/profile/${comment.parentRepliedUser}`);
                    }}
                  >
                    @{comment.parentRepliedUser}
                  </span>
                </div>
              )}
            </div>
            <div className="msg" ref={messageRef} onClick={goToComment}>
              <div className="message-box" onClick={goToComment}>
                {formattedMsg.map((msg: textMap, index) =>
                  msg.type === textMapTypes.SPOILER ? (
                    <SpoilerTag key={index}>{msg.message}</SpoilerTag>
                  ) : (
                    <React.Fragment key={index}>
                      <span
                        key={index}
                        className={msg.type}
                        onClick={e => {
                          if (msg.type === 'user') {
                            e.stopPropagation();
                            navigate(`/home/profile/${msg.message.slice(1)}`);
                          }
                        }}
                      >
                        {ParsedText(msg.message)}{' '}
                      </span>
                    </React.Fragment>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        {!showEpisodeInfo && !showTitleInfo && (
          <LinkPreviewComponent text={comment.message} />
        )}
        {!showEpisodeInfo && !showTitleInfo && (
          <div className="options">
            <div className="likes c">
              <span className="icon" onClick={updateLike} tabIndex={0}>
                {like ? (
                  <MdFavorite size={20} fill="#ff005d" />
                ) : (
                  <MdOutlineFavoriteBorder size={20} />
                )}
              </span>
              <span
                className="count"
                onClick={showLikesWindowHandler}
                tabIndex={0}
              >
                {getFormattedNumber(likeCount)} Likes
              </span>
            </div>
            <div className="replies c">
              <span
                className="icon"
                onClick={openCommentWindowHandler}
                tabIndex={0}
              >
                <MdReply size={20} />
              </span>
              <span className="count">
                {getFormattedNumber(comment.repliesCount!)} Replies
              </span>
            </div>
            {isSameUserAsLoggedIn && (
              <div
                className="delete c"
                onClick={deleteCommentHandler}
                tabIndex={0}
              >
                <span className="icon">
                  <MdDelete size={20} />
                </span>
                <span className="count">Delete</span>
              </div>
            )}
          </div>
        )}
      </CardParent>
    </CSSTransition>
  );
};

export default CardTemplate;
