/* eslint-disable react/react-in-jsx-scope */

import { MdOutlineExitToApp, MdStar, MdStarOutline } from "react-icons/md";

import { useEffect, useMemo, useState, useRef } from "react";
import {
  useGetMovieFavCountQuery,
  useGetOnlyUserMovieStatsQuery,
  useUpdateMovieTitleMutation,
  useUpdateUserMovieStatusMutation,
} from "../../generated/graphql";

import { withUrqlClient } from "next-urql";
import { batch } from "react-redux";
import { LOGO_128, RED_LOGO_128, isServerSide } from "../../helpers/constants";
import { iconsEnum } from "../../helpers/enums";
import { urqlClient } from "../../helpers/urql/urqlClient";
import { getVideoTitleFromNetflixWatch } from "../../pages/content/components/moovy/contentScript.utils";
import { handleMouseEnter, handleMouseLeave } from "../../pages/popup/utils";
import { useAppDispatch, useAppSelector } from "../../pages/redux/hooks";
import { sliceAddMovieName } from "../../pages/redux/slices/movie/movieSlice";
import {
  sliceSetChatMode,
  sliceSetIsOpenChatWindow,
} from "../../pages/redux/slices/settings/settingsSlice";
import {
  sliceSetToastBody,
  sliceSetToastVisible,
} from "../../pages/redux/slices/toast/toastSlice";
import { ChatTitleParent } from "./chatTitle.styles";
import {
  sliceSetToolTipMessage,
  sliceSetTooltipVisible,
} from "../../pages/redux/slices/tooltip/tooltipSlice";

const ChatTitle = () => {
  const [fav, setFav] = useState<boolean>(false);
  const [toggleMode, setToggleMode] = useState<boolean>(false);
  const [src, setSrc] = useState(LOGO_128);
  const logoDiv = useRef(null);
  const [favCount, SetFavCount] = useState<number>(0);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const movieTitle = useAppSelector((state) => state.movie.name);
  const movieId = useAppSelector((state) => state.movie.id);
  const userId = useAppSelector((state) => state.user.id);
  const [, updateUserLikeFavorite] = useUpdateUserMovieStatusMutation();
  const dispatch = useAppDispatch();
  const chatMode = useAppSelector((st) => st.settings.chatMode);
  const [tempTitle, setTempTitle] = useState<string>(movieTitle);
  // GraphQL: updateMovie and movieComments hooks.
  const [, updateMovieTitle] = useUpdateMovieTitleMutation();
  const [hoverText, setHoverText] = useState(
    toggleMode ? "Switch to Nest" : "Switch to Global Chat"
  );

  const [{ error, fetching, data }, _query] = useGetMovieFavCountQuery({
    variables: {
      mid: movieId,
    },
    pause: true,
  });
  const [movieStats] = useGetOnlyUserMovieStatsQuery({
    variables: { uid: userId, mid: movieId },
    pause: isServerSide(),
  });
  useMemo(() => {
    const { fetching, data } = movieStats;
    if (!fetching && data) {
      const _data = data.getOnlyUserMovieStats;
      const _fav = _data?.favorite;
      _fav && setFav(() => _fav);
    }
  }, [movieStats]);
  useEffect(() => {
    if (movieId) _query();
  }, [movieId]);
  // Update Movie Favorite on the initial load.
  useEffect(() => {
    if (!movieId) return;
    updateUserLikeFavorite({
      uid: userId,
      mid: movieId,
      options: {},
    }).then((response) => {
      const { data } = response;
      if (data && data.updateUserMovieStats) {
        const { favorite } = data.updateUserMovieStats;
        if (favorite !== null && favorite !== undefined) setFav(favorite);
      }
    });
  }, [userId, movieId]);

  // Get Movie Fav count.
  useEffect(() => {
    if (error) {
      return;
    }
    if (!fetching && data) {
      SetFavCount(data.getMovieFavoriteCount ? data.getMovieFavoriteCount : 0);
    }
  }, [fetching]);

  // Update movie title.
  useMemo(() => {
    if (movieTitle) return;
    // Adding the Interval to grab the video title from DOM
    const interval = setInterval(() => {
      if (movieTitle) {
        setTempTitle(movieTitle);
        clearInterval(interval);
        return;
      }
      const title = getVideoTitleFromNetflixWatch();
      if (title) {
        setTempTitle(title);
        // Update movie name in the database only if the name is not available.
        dispatch(sliceAddMovieName({ movieId, title }));
        updateMovieTitle({ mid: movieId, name: title });
        clearInterval(interval);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [movieId, movieTitle]);

  useEffect(() => {
    if (logoDiv.current) {
      logoDiv.current.classList.add("wiggle");
      const timer = setTimeout(() => {
        logoDiv.current.classList.remove("wiggle");
      }, 500); // 500ms matches the animation duration in the CSS file
      return () => clearTimeout(timer);
    }
  }, [src]);

  const handleToggle = () => {
    setToggleMode(() => !toggleMode);
    dispatch(sliceSetChatMode(toggleMode ? "global" : "nest"));
    setHoverText(toggleMode ? "Switch to Nest" : "Switch to Global Chat");
  };

  const handleMouseEnterForLogo = () => {
    setHoverText(() =>
      toggleMode ? "Switch to Nest" : "Switch to Global Chat"
    );
    dispatch(sliceSetTooltipVisible(true));
    dispatch(sliceSetToolTipMessage(hoverText));
  };

  const handleMouseLeaveForLogo = () => {
    setHoverText(toggleMode ? "Switch to Global Chat" : "Switch to Nest");
    dispatch(sliceSetTooltipVisible(false));
    dispatch(sliceSetToolTipMessage(""));
  };

  return (
    <ChatTitleParent className="chat-title">
      <div
        className="exit common"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(sliceSetIsOpenChatWindow(false));
        }}
        onMouseEnter={handleMouseEnter("Close Chat")}
        onMouseLeave={handleMouseLeave("")}
      >
        <MdOutlineExitToApp className="star" size={20} />
      </div>
      <div
        className="logo"
        onClick={handleToggle}
        onMouseEnter={handleMouseEnterForLogo}
        onMouseLeave={handleMouseLeaveForLogo}
      >
        <img
          src={toggleMode ? RED_LOGO_128 : LOGO_128}
          alt="logo"
          width="25"
          height="25"
        />
      </div>

      <div className="title">
        <div className="set">{movieTitle ? movieTitle : tempTitle}</div>
      </div>
      <div
        className="icon common"
        onClick={(e) => {
          e.stopPropagation();
          updateUserLikeFavorite({
            uid: userId,
            mid: movieId,
            options: {
              favorite: !fav,
            },
          }).then((response) => {
            const { data } = response;
            let toastBody = {
              icon: "",
              message: "",
            };
            if (data && data.updateUserMovieStats) {
              const { favorite } = data.updateUserMovieStats;
              if (favorite !== null && favorite !== undefined) {
                setFav(favorite);
                if (!favorite) {
                  toastBody = {
                    icon: iconsEnum.REMOVE_FAVORITES,
                    message: "Removed from favorites",
                  };
                  SetFavCount(favCount - 1);
                } else {
                  toastBody = {
                    icon: iconsEnum.ADD_FAVORITES,
                    message: "Added to favorites",
                  };
                  SetFavCount(favCount + 1);
                }
                batch(() => {
                  dispatch(sliceSetToastVisible(true));
                  dispatch(sliceSetToastBody(toastBody));
                });
              }
            }
          });
        }}
        onMouseEnter={handleMouseEnter("Favorite")}
        onMouseLeave={handleMouseLeave("")}
      >
        <div className="fav-count">
          <div className="box">{favCount}</div>
        </div>
        {!fav ? (
          <MdStarOutline className="star" size={20} />
        ) : (
          <MdStar className="star" size={20} color={accentColor} />
        )}
      </div>
    </ChatTitleParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(ChatTitle);
