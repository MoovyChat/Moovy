import { MdChatBubbleOutline, MdFavorite, MdVisibility } from 'react-icons/md';
import { Movie, Title } from '../../generated/graphql';

import { MovieInfoParent } from './commentCard.styles';
import React from 'react';

type props = {
  movie?: Movie;
  title?: Title;
};
const MovieInfo: React.FC<props> = ({ movie, title }) => {
  return (
    <MovieInfoParent>
      <div className='title'>{movie ? movie.name : title?.title}</div>
      {movie && <div className='parent'>{movie?.parentTitleName}</div>}
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
          <div className='likes'>
            <div className='count'>{movie?.likesCount}</div>
            <div className='icon'>
              <MdFavorite size={20} fill='red' />
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
