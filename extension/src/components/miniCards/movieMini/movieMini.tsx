import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { MdStar, MdStarOutline } from 'react-icons/md';
import { MovieMiniParent, OptionPerimeter } from './movieMini.styles';
import React, { useEffect, useState } from 'react';

import { Like } from '../../../contentScript/commentInterface/commentInterface.styles';
import MiniCard from '../miniCard';
import { colorLog } from '../../../Utils/utilities';
import { urqlClient } from '../../../Utils/urqlClient';
import { useAppSelector } from '../../../redux/hooks';
import { useUpdateUserMovieStatusMutation } from '../../../generated/graphql';
import { withUrqlClient } from 'next-urql';

type props = {
  title: string;
  id: string;
};
type optionProps = {
  id: string;
};

const redirectToMovie = (id: string) => {
  const url = `https://www.netflix.com/watch/${id}`;
  window.open(url);
};

const MovieBody: React.FC<props> = ({ title, id }) => {
  return (
    <MovieMiniParent
      onClick={(e) => {
        e.stopPropagation();
        redirectToMovie(id);
      }}>
      {title}
    </MovieMiniParent>
  );
};

const MovieOptions: React.FC<optionProps> = ({ id }) => {
  const [_r, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const user = useAppSelector((state) => state.user);
  const [lk, setLike] = useState<boolean>(false);
  const [fav, setFav] = useState<boolean>(false);
  // Set the like and favorite on Initial load.
  useEffect(() => {
    updateUserLikeFavorite({
      uid: user.id,
      mid: id,
      options: {},
    }).then((response) => {
      const { data, error } = response;
      if (error) colorLog(error);
      const { like, favorite } = data?.updateUserMovieStats!;
      if (like) setLike(like);
      if (favorite) setFav(favorite);
    });
  }, []);
  const LikeAndFav = (type: string, value: boolean) => {
    const options = type === 'like' ? { like: value } : { favorite: value };
    updateUserLikeFavorite({
      uid: user.id,
      mid: id,
      options,
    }).then((res) => {
      const { data, error } = res;
      if (error) colorLog(error);
      if (!error && data) {
        const { like, favorite } = data.updateUserMovieStats!;
        setLike(like!);
        setFav(favorite!);
      }
    });
  };
  return (
    <OptionPerimeter>
      <div
        className='favorite'
        onClick={(e) => {
          e.stopPropagation();
          LikeAndFav('fav', !fav);
        }}>
        {!fav ? (
          <MdStarOutline className='star' size={20} />
        ) : (
          <MdStar className='star' size={20} color='gold' />
        )}
      </div>
      <Like
        className='like'
        onClick={(e) => {
          e.stopPropagation();
          LikeAndFav('like', !lk);
        }}>
        {lk ? (
          <AiFillLike className='icon' size={20} color='#ff005d' />
        ) : (
          <AiOutlineLike size={20} />
        )}
      </Like>
    </OptionPerimeter>
  );
};

const MovieMini: React.FC<props> = ({ title, id }) => {
  return (
    <MiniCard
      body={<MovieBody title={title} id={id} />}
      options={<MovieOptions id={id} />}
    />
  );
};

export default withUrqlClient(urqlClient)(MovieMini);
