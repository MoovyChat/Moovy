import React, { useCallback, useEffect, useState } from 'react';
import { User, filterType } from '../Utils/interfaces';
import { addBorder, applyFilter } from './videoStyles/videoStyles.help';
import {
  getStoredBorder,
  getStoredCheckedStatus,
  getStoredFilterValues,
  getStoredResizeValue,
  getStoredUserLoginDetails,
  getStoredVideoFilters,
} from '../Utils/storage';
import {
  sliceResetSettings,
  sliceSetSmoothWidth,
  sliceSetVideoSize,
} from '../redux/slices/settings/settingsSlice';
import {
  sliceSetNetworkError,
  sliceValidateMovieLoading,
} from '../redux/slices/loading/loadingSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import CommentButton from './commentButton/commentButton';
import { StyledStart } from './start.styles';
import { getVideoElement } from './contentScript.utils';
import { isServerSide } from '../constants';
import { sliceAddMovieId } from '../redux/slices/movie/movieSlice';
import { sliceAddUser } from '../redux/slices/user/userSlice';
import { urqlClient } from '../Utils/urqlClient';
import { useFetchMovie } from './hooks/useFetchMovie';
import { useGetUserQuery } from '../generated/graphql';
import { withUrqlClient } from 'next-urql';

interface props {
  userDetails?: User;
}

const Start: React.FC<props> = () => {
  const [u, setU] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const [{ data, error, fetching }] = useGetUserQuery({
    variables: { uid: u && u.id ? u.id : '' },
    pause: isServerSide(),
  });
  const [isCommentEnabled, setIsCommentEnabled] = useState<boolean>(false);
  const autoSkipValue = useAppSelector((state) => state.misc.autoSkip);
  const [movieId, setMovieId] = useState<string>('');
  const [filterValues, setFilterValues] = useState<any>();
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);
  // const nodes = useAppSelector((state) => state.audioNodes);
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
      if (message.type === 'icon-status') {
        setIsCommentEnabled(() => message.checked);
      }
    });
  }, []);

  useEffect(() => {
    let bottomControlsObserver: MutationObserver | null = null;

    const handleMutation = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'style'
        ) {
          const bottomControls = document.querySelector(
            '.watch-video--bottom-controls-container'
          ) as HTMLElement | null;
          const skipButton = document.querySelector(
            '.watch-video--skip-content-button'
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

    // Listen for a refresh message from the pop-up
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === 'refresh') {
        handleRefresh();
      }
    });

    return () => {
      bottomControlsObserver?.disconnect();
      bottomControlsObserver = null;
    };
  }, []);

  // Set the pre-saved video styles.
  useEffect(() => {
    async function applyVideoStyles() {
      const playerView = document.querySelector('[data-uia="player"]');
      const canvas = playerView as HTMLElement;
      // Get stored is Filter open boolean value.
      getStoredFilterValues().then((res) => setFilterValues(res));
      // Get selected filters from the local storage.
      getStoredVideoFilters().then((filters) => setSelectedFilters(filters));
      // Get stored resize value.
      getStoredResizeValue().then((res) => {
        dispatch(sliceSetVideoSize(res));
        if (canvas && res !== '100') {
          getStoredBorder().then((border) => {
            addBorder(canvas, res, border);
          });
        }
      });
      getVideoElement().then((res) => {
        setVideoElem(res[0]);
      });
    }
    const interval = setInterval(() => {
      applyVideoStyles().then(() => {
        applyFilter(selectedFilters, filterValues, videoElem);
      });
      if (videoElem) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, [movieId, videoElem]);

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (!sender.tab && request.type === 'SET_MOVIE_ID') {
      // Clear redux cache.

      dispatch(sliceResetSettings());
      dispatch(sliceValidateMovieLoading(false));
      setMovieId(() => request.movieId + '');
      dispatch(sliceSetSmoothWidth(0));
      sendResponse({
        data: 'Movie ID got reset',
      });
    } else if (!sender.tab && request.type === 'RESET_MOVIE_ID') {
      setMovieId(() => request.movieId + '');
      dispatch(sliceSetSmoothWidth(0));
      sendResponse({
        data: 'Movie ID got reset',
      });
    }
    return true;
  });

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
