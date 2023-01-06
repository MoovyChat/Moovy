import {
  MdChatBubbleOutline,
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdVisibility,
} from 'react-icons/md';
import {
  Movie,
  Title,
  useGetOnlyUserMovieStatsQuery,
  useUpdateUserMovieStatsMutation,
} from '../../generated/graphql';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MovieInfoParent } from './commentCard.styles';
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
      <div className='title' onClick={titleClickHandler}>
        {movie ? movie.name : title?.title}
      </div>
      {movie && (
        <div className='parent' onClick={parentClickHandler}>
          {movie?.parentTitleName}
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
              title.advisories?.map((adv) => <div className='year'>{adv}</div>)}
            {title?.rating && <div className='year'>{title?.rating}</div>}
          </React.Fragment>
        )}
      </div>
      <div className='synopsis'>
        <div className='a'>Synopsis</div>
        <div className='b'>{movie ? movie.synopsis : title?.synopsis}</div>
      </div>
      {movie && (
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
      )}
    </MovieInfoParent>
  );
};

export default MovieInfo;
