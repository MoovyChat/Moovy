import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { MdStar, MdStarOutline } from "react-icons/md";
import { MovieMiniParent, OptionPerimeter } from "./movieMini.styles";
import React, { useEffect, useState } from "react";

import MiniCard from "../miniCard";

import { useUpdateUserMovieStatusMutation } from "../../../generated/graphql";
import { withUrqlClient } from "next-urql";
import { urqlClient } from "../../../helpers/urql/urqlClient";
import { Like } from "../../../pages/content/components/moovy/commentInterface/commentInterface.styles";
import { useAppSelector } from "../../../pages/redux/hooks";

interface props {
  title: string;
  id: string;
}
interface optionProps {
  id: string;
}

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
      }}
    >
      {title}
    </MovieMiniParent>
  );
};

const MovieOptions: React.FC<optionProps> = ({ id }) => {
  const [, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const user = useAppSelector((state) => state.user);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const [lk, setLike] = useState<boolean>(false);
  const [fav, setFav] = useState<boolean>(false);
  // Set the like and favorite on Initial load.
  useEffect(() => {
    updateUserLikeFavorite({
      uid: user.id,
      mid: id,
      options: {},
    }).then((response) => {
      const { data } = response;
      if (data) {
        const _data = data.updateUserMovieStats;
        if (_data) {
          if (_data.like) setLike(_data.like);
          if (_data.favorite) setFav(_data.favorite);
        }
      }
    });
  }, []);
  const LikeAndFav = (type: string, value: boolean) => {
    const options = type === "like" ? { like: value } : { favorite: value };
    updateUserLikeFavorite({
      uid: user.id,
      mid: id,
      options,
    }).then((res) => {
      const { data, error } = res;
      if (!error && data) {
        const _data = data.updateUserMovieStats;
        if (_data) {
          if (_data.like) setLike(_data.like);
          if (_data.favorite) setFav(_data.favorite);
        }
      }
    });
  };
  return (
    <OptionPerimeter>
      <div
        className="favorite"
        onClick={(e) => {
          e.stopPropagation();
          LikeAndFav("fav", !fav);
        }}
      >
        {!fav ? (
          <MdStarOutline className="star" size={20} />
        ) : (
          <MdStar className="star" size={20} color="gold" />
        )}
      </div>
      <Like
        accentColor={accentColor}
        className="like"
        onClick={(e) => {
          e.stopPropagation();
          LikeAndFav("like", !lk);
        }}
      >
        {lk ? (
          <AiFillLike className="icon" size={20} color={accentColor} />
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
