import React, { useCallback, useEffect, useState } from "react";

import CommentButton from "./commentButton/commentButton";

import {
  getMovieIdFromURL,
  getVideoElement,
  getVideoPlatform,
} from "./contentScript.utils";

import { useFetchMovie } from "./hooks/useFetchMovie";

import { withUrqlClient } from "next-urql";
import { useGetUserQuery } from "../../../../generated/graphql";
import {
  BOTTOMS_CONTROL,
  SKIP_BUTTON,
  isServerSide,
} from "../../../../helpers/constants";
import { User } from "../../../../helpers/interfaces";
import {
  getStoredCheckedStatus,
  getStoredUserLoginDetails,
} from "../../../../helpers/storage";
import { urqlClient } from "../../../../helpers/urql/urqlClient";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  sliceSetNetworkError,
  sliceValidateMovieLoading,
} from "../../../redux/slices/loading/loadingSlice";
import { sliceAddMovieId } from "../../../redux/slices/movie/movieSlice";
import {
  sliceResetSettings,
  sliceSetSmoothWidth,
} from "../../../redux/slices/settings/settingsSlice";
import { sliceAddUser } from "../../../redux/slices/user/userSlice";
import { StyledStart } from "./start.styles";

interface Props {
  userDetails?: User;
}

const Start: React.FC<Props> = () => {
  const [u, setU] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const [{ data, error, fetching }] = useGetUserQuery({
    variables: { uid: u && u.id ? u.id : "" },
    pause: isServerSide(),
  });
  const [isCommentEnabled, setIsCommentEnabled] = useState<boolean>(false);
  const autoSkipValue = useAppSelector((state) => state.misc.autoSkip);
  const [movieId, setMovieId] = useState<string>("");
  const [filterValues, setFilterValues] = useState<any>();
  const [isBottomControlsVisible, setIsBottomControlsVisible] =
    useState<boolean>(false);
  const oldIntervalIds = useAppSelector((state) => state.misc.intervalIds);
  const stableDispatch = useCallback(
    (args: any) => {
      return dispatch(args);
    },
    [dispatch]
  );

  useEffect(() => {
    const fetchUrl = async () => {
      const url = window.location.href;
      const id = await getMovieIdFromURL(url);
      setMovieId(() => id);
    };
    fetchUrl();
  }, [movieId]);

  useEffect(() => {
    oldIntervalIds.forEach((interval) => clearInterval(interval));
  }, []);

  useEffect(() => {
    // Clear redux cache.

    dispatch(sliceResetSettings());
    dispatch(sliceValidateMovieLoading(false));
    getStoredUserLoginDetails().then((res) => {
      setU(res);
    });
    getStoredCheckedStatus().then((res) => {
      setIsCommentEnabled(res);
    });
  }, []);

  useEffect(() => {
    // Listen for a refresh message from the pop-up
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "icon-status") {
        setIsCommentEnabled(() => message.checked);
      }
    });
  }, []);

  useEffect(() => {
    let bottomControlsObserver: MutationObserver | null = null;

    const handleMutation = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        const targetElement = mutation.target as HTMLElement;
        const currentUrl = window.location.href;
        let platform = getVideoPlatform(currentUrl);

        // For Netflix
        if (
          platform === "netflix" &&
          mutation.type === "attributes" &&
          mutation.attributeName === "style"
        ) {
          const bottomControls = document.querySelector(BOTTOMS_CONTROL);
          const skipButton = document.querySelector(
            SKIP_BUTTON
          ) as HTMLElement | null;
          if (skipButton && autoSkipValue) {
            skipButton.click();
          }
          if (bottomControls) {
            setIsBottomControlsVisible(() => true);
          } else {
            setIsBottomControlsVisible(() => false);
          }
        }
        // For Aha
        else if (
          platform === "aha" &&
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          typeof targetElement.className === "string" &&
          targetElement.className.includes("player-container__controls")
        ) {
          let className = targetElement.className as string;
          if (className.includes("player-container__show")) {
            setIsBottomControlsVisible(() => true);
          } else {
            setIsBottomControlsVisible(() => false);
          }
        }
      }
    };

    const startObserver = () => {
      bottomControlsObserver = new MutationObserver(handleMutation);
      bottomControlsObserver.observe(document.documentElement, {
        attributes: true,
        subtree: true,
      });
    };

    const handleRefresh = () => {
      if (bottomControlsObserver) {
        bottomControlsObserver.disconnect();
        bottomControlsObserver = null;
      }
      startObserver();
    };
    startObserver();
    // You might need to add dependencies here depending on your React component

    // Listen for a refresh message from the pop-up
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === "refresh") {
        handleRefresh();
      }
    });

    return () => {
      bottomControlsObserver?.disconnect();
      bottomControlsObserver = null;
    };
  }, []);

  //Set the pre-saved video styles.
  useEffect(() => {
    async function applyVideoStyles() {
      // const playerView = document.querySelector('[data-uia="player"]');
      // const canvas = playerView as HTMLElement;
      // Get selected filters from the local storage.
      // getStoredFilterValues().then((filters) => setFilterValues(filters));
      // Get stored resize value.
      // getStoredResizeValue().then((res) => {
      //   dispatch(sliceSetVideoSize(res));
      //   if (canvas && res !== "100") {
      //     getStoredBorder().then((border) => {
      //       addBorder(canvas, res, border);
      //     });
      //   }
      // });
      getVideoElement().then((res) => {
        setVideoElem(res[0]);
      });
    }
    const interval = setInterval(() => {
      applyVideoStyles().then(() => {
        // videoElem && filterValues && applyFilter(filterValues, videoElem);
      });
      if (videoElem) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, [movieId, videoElem]);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.type === "SET_MOVIE_ID") {
        // Clear redux cache.
        console.log("SET_MOVIE_ID", { request });
        dispatch(sliceResetSettings());
        dispatch(sliceValidateMovieLoading(false));
        setMovieId(() => request.movieId);
        dispatch(sliceSetSmoothWidth(0));
        sendResponse({
          data: "Movie ID got reset",
        });
      } else if (request.type === "RESET_MOVIE_ID") {
        console.log("RESET_MOVIE_ID", { request });
        setMovieId(() => request.movieId);
        dispatch(sliceSetSmoothWidth(0));
        sendResponse({
          data: "Movie ID got reset",
        });
      }
      return true;
    });
  }, []);

  useEffect(() => {
    if (error) {
      const networkError = error.networkError;
      if (networkError) dispatch(sliceSetNetworkError(true));
      else dispatch(sliceSetNetworkError(false));
    }
    if (!fetching && data) {
      const _u = data.getUser as User;
      stableDispatch(sliceAddUser(_u));
    }
  }, [stableDispatch, fetching, data, error]);

  useFetchMovie(movieId);

  useEffect(() => {
    //Redux: Add new movie id
    stableDispatch(sliceAddMovieId(movieId));
  }, [stableDispatch, movieId]);

  if (!videoElem) return <></>;
  return (
    <StyledStart visible={isBottomControlsVisible && isCommentEnabled}>
      <CommentButton visible={isBottomControlsVisible && isCommentEnabled} />
    </StyledStart>
  );
};

export default withUrqlClient(urqlClient)(Start);
