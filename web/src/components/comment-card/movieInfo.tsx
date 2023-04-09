import {
  HistoryObject,
  Movie,
  Title,
  useGetOnlyUserMovieStatsQuery,
  useGetVisitedQuery,
  useUpdateUserMovieStatsMutation,
} from '../../generated/graphql';
import {
  MdAccessTime,
  MdChatBubbleOutline,
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdTimer,
  MdVisibility,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MovieInfoParent } from './commentCard.styles';
import { VisitedInterface } from '../../utils/interfaces';
import { getShortDateFormat } from '../../utils/helpers';
import { isServer } from '../../constants';
import { useAppSelector } from '../../redux/hooks';

type props = {
  movie?: Movie;
  title?: Title;
};
const MovieInfo: React.FC<props> = ({ movie, title }) => {
  const location = useLocation();
  const [like, setLike] = useState<boolean>(false);
  const navigate = useNavigate();
  const [, setCommentLike] = useUpdateUserMovieStatsMutation();
  const user = useAppSelector((state) => state.user);
  const [visitedData, setVisited] = useState<VisitedInterface | null>(null);
  const [visited] = useGetVisitedQuery({
    variables: {
      uid: user.id,
      mid: movie?.id!,
    },
    pause: isServer() || title ? true : false,
  });

  // Set history data
  useEffect(() => {
    const { data, error, fetching } = visited;
    if (!fetching && data) {
      const _data = data.getVisited!;
      console.log(_data);
      if (_data !== null) {
        const history = _data.history;
        const parsedHistory: VisitedInterface | null = JSON.parse(
          history.slice(-1)[0]
        );
        setVisited(() => parsedHistory);
      }
    }
  }, [visited]);
  const [getUserMovieStats] = useGetOnlyUserMovieStatsQuery({
    variables: { uid: user.id!, mid: movie?.id! },
    pause: isServer(),
  });

  const parentClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (movie) {
      if (location.pathname !== `/show/${movie.titleId!}`)
        navigate(`/show/${movie.titleId!}`);
    }
  };
  const titleClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (title) {
      if (location.pathname !== `/movie/${title.id!}`)
        navigate(`/movie/${title.id!}`);
    } else {
      if (location.pathname !== `/movie/${movie?.id!}`)
        navigate(`/movie/${movie?.id!}`);
    }
  };
  const updateLike: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setLike(!like);
    setCommentLike({
      uid: user.id!,
      mid: movie?.id!,
      options: {
        like: !like,
      },
    }).then((res) => {
      const { data, error } = res;
      if (error) console.log(error);
      if (data) {
        const _data = data.updateUserMovieStats!;
        const likeStatus = _data.like!;
        setLike(likeStatus);
      }
    });
  };

  useEffect(() => {
    const { data, error, fetching } = getUserMovieStats;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data?.getOnlyUserMovieStats!;
      const likeStatus = _data?.like!;
      likeStatus && setLike(() => likeStatus);
    }
  }, [getUserMovieStats]);
  return (
    <MovieInfoParent>
      <div className='title'>
        <span onClick={titleClickHandler}>
          {movie ? movie.name : title?.title}
        </span>
      </div>
      {movie && movie.parentTitleName && (
        <div className='parent'>
          <span onClick={parentClickHandler}>{movie?.parentTitleName}</span>
        </div>
      )}
      <div className='group'>
        {movie ? (
          <React.Fragment>
            {movie.season && <div className='year'>{`${movie.season}`}</div>}
            {movie.year && <div className='year'> Year {movie.year}</div>}
            <div className='year'>
              {movie.runtime && `${Math.round(movie.runtime / 60)} min`}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='year'>{title && title.type}</div>
            {title &&
              title.advisories?.map((adv, index) => (
                <div className='year' key={index}>
                  {adv}
                </div>
              ))}
            {title?.rating && <div className='year'>{title?.rating}</div>}
          </React.Fragment>
        )}
      </div>
      <div className='synopsis'>
        <div className='a'>Synopsis</div>
        <div className='b'>{movie ? movie.synopsis : title?.synopsis}</div>
      </div>
      {movie && (
        <div className='stats-container'>
          <div className='stats'>
            <div className='likes' onClick={updateLike}>
              <div className='count'>{movie?.likesCount}</div>
              <div className='icon'>
                {like ? (
                  <MdFavorite size={20} fill='#ff005d' />
                ) : (
                  <MdOutlineFavoriteBorder size={20} />
                )}
              </div>
            </div>
            <div className='comments'>
              <div className='count'>{movie?.commentCount}</div>
              <div className='icon'>
                <MdChatBubbleOutline size={20} fill='violet' />
              </div>
            </div>
            <div className='views'>
              <div className='count'>{movie?.viewsCount}</div>
              <div className='icon'>
                <MdVisibility size={20} fill='#00dfff' />
              </div>
            </div>
          </div>
          {visitedData && visitedData?.visitTime && (
            <div className='stats '>
              <div className='likes history'>
                <div className='icon'>
                  <MdAccessTime size={20} />
                </div>
                <div className='count'>
                  {getShortDateFormat(visitedData?.visitTime + '')}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </MovieInfoParent>
  );
};

export default MovieInfo;
