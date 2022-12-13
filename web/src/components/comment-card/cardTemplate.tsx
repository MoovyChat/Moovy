import {
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineModeComment,
} from 'react-icons/md';
import {
  Movie,
  Title,
  User,
  useGetMovieQuery,
  useGetTitleInfoMutation,
  useGetUserQuery,
} from '../../generated/graphql';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { getFormattedNumber, getTimeFrame } from '../../utils/helpers';

import { CardParent } from './commentCard.styles';
import MovieInfo from './movieInfo';
import ProfilePic from '../profilePic/profilePic';
import { isServer } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

type props = {
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
}) => {
  const navigate = useNavigate();
  const movieId = comment.movieId;
  const [showEpisodeInfo, setShowEpisodeInfo] = useState<boolean>(false);
  const [showTitleInfo, setShowTitleInfo] = useState<boolean>(false);
  const commentedUserId = comment.commentedUserId;
  const loggedInUser = useAppSelector((state) => state.user);
  const isSameUserAsLoggedIn = commentedUserId === loggedInUser.id;
  const movieRef = useRef<Movie | null>(null);
  const titleRef = useRef<Title | null>(null);
  const userRef = useRef<User | null>(null);
  let episodeEntered = useRef<boolean>(false);
  let titleEntered = useRef<boolean>(false);
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

  const [, getTitleInfo] = useGetTitleInfoMutation();

  const onEpisodeEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    episodeEntered.current = true;
    setTimeout(() => {
      episodeEntered.current && setShowEpisodeInfo(true);
    }, timeout);
  };
  const onEpisodeLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    episodeEntered.current = false;
    setTimeout(() => {
      setShowEpisodeInfo(false);
    }, timeout);
  };

  const onTitleEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    titleEntered.current = true;
    setTimeout(() => {
      titleEntered.current && setShowTitleInfo(true);
    }, timeout);
  };
  const onTitleLeave: MouseEventHandler<HTMLDivElement> = (e) => {
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
  }, [movieDetails, isMain]);

  // Get user info.
  useEffect(() => {
    const { data, fetching, error } = userInfo;
    if (error) console.log(error);
    if (!fetching && data) {
      const _user = data.getUser as User;
      userRef.current = _user;
    }
  }, [userRef.current]);
  return (
    <CardParent
      onClick={goToComment}
      showEpisodeInfo={showEpisodeInfo}
      showTitleInfo={showTitleInfo}
      episodePoster={movieRef.current?.stills}
      titlePoster={titleRef.current?.artwork}
      isHover={showEpisodeInfo || showTitleInfo}>
      <div className='bg'>
        {!isMain && showEpisodeInfo ? (
          <img
            key='episode'
            src={movieRef.current?.stills as string}
            alt='background-image'
          />
        ) : !isMain && showTitleInfo ? (
          <img
            key='title'
            src={titleRef.current?.artwork as string}
            alt='background-image'
          />
        ) : (
          <img
            src='https://png.pngtree.com/thumb_back/fh260/background/20210316/pngtree-black-abstract-fluorescent-line-background-image_587942.jpg'
            alt='background-image'
          />
        )}
      </div>
      <div className='content'>
        <div className='user-pic'>
          <div className='pic-container'>
            <ProfilePic
              src={
                isSameUserAsLoggedIn
                  ? loggedInUser.photoUrl!
                  : userRef.current?.photoUrl!
              }
            />
          </div>
        </div>
        <div className='message'>
          <div className='username'>
            <div className='container'>
              <div className='user'>
                {isSameUserAsLoggedIn
                  ? loggedInUser.nickname
                  : userRef.current?.nickname}
              </div>
              <div className='time'>{getTimeFrame(comment.createdAt)}</div>
            </div>
            {!isMain && (
              <div className='movie'>
                {titleRef && titleRef.current?.type === 'show' && (
                  <React.Fragment>
                    <div
                      className='name title'
                      onMouseEnter={onTitleEnter}
                      onMouseLeave={onTitleLeave}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}>
                      {titleRef.current?.title} {movieRef.current?.season}
                    </div>
                  </React.Fragment>
                )}
                <div
                  className='name episode'
                  onMouseEnter={onEpisodeEnter}
                  onMouseLeave={onEpisodeLeave}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/movie/${movieRef?.current?.id}`);
                  }}>
                  {movieRef.current?.name}
                </div>
              </div>
            )}
          </div>
          <div className='msg'>
            {!isMain && showEpisodeInfo ? (
              <MovieInfo movie={movieRef.current!} />
            ) : !isMain && showTitleInfo ? (
              <MovieInfo title={titleRef.current!} />
            ) : (
              `${comment.message}`
            )}
          </div>
        </div>
      </div>
      {!showEpisodeInfo && !showTitleInfo && (
        <div className='options'>
          <div className='likes c'>
            <span className='icon' onClick={updateLike}>
              {like ? (
                <MdFavorite size={20} fill='#ff005d' />
              ) : (
                <MdOutlineFavoriteBorder size={20} />
              )}
            </span>
            <span className='count'>{getFormattedNumber(likeCount)} Likes</span>
          </div>
          <div className='likes c'>
            <span className='icon'>
              <MdOutlineModeComment size={20} />
            </span>
            <span className='count'>
              {getFormattedNumber(comment.repliesCount!)} Replies
            </span>
          </div>
        </div>
      )}
    </CardParent>
  );
};

export default CardTemplate;
