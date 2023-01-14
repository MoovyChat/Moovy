import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { User, filterType } from '../Utils/interfaces';
import { addBorder, applyFilter } from './videoStyles/videoStyles.help';
import {
  getStoredBorder,
  getStoredFilterValues,
  getStoredResizeValue,
  getStoredUserLoginDetails,
  getStoredVideoFilters,
} from '../Utils/storage';
import {
  sliceAddMovie,
  sliceAddMovieId,
  sliceUpdateViewsCount,
} from '../redux/slices/movie/movieSlice';
import {
  sliceResetSettings,
  sliceSetSmoothWidth,
  sliceSetVideoSize,
} from '../redux/slices/settings/settingsSlice';
import {
  sliceSetIsMovieExists,
  sliceSetNetworkError,
  sliceValidateMovieLoading,
} from '../redux/slices/loading/loadingSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  useGetMovieQuery,
  useGetUserQuery,
  useUpdateMovieViewCountMutation,
} from '../generated/graphql';

import { COMMENT } from '../redux/actionTypes';
import CommentButton from './commentButton/commentButton';
import { colorLog } from '../Utils/utilities';
import { getVideoElement } from './contentScript.utils';
import { isServerSide } from '../constants';
import { sliceAddUser } from '../redux/slices/user/userSlice';
import { sliceComment } from '../redux/slices/comment/commentSlice';
import { sliceResetReply } from '../redux/slices/reply/replySlice';
import { urqlClient } from '../Utils/urqlClient';
import { useFetchMovie } from './hooks/useFetchMovie';
import { withUrqlClient } from 'next-urql';

interface props {
  userDetails?: User;
}

const Start: React.FC<props> = () => {
  const [u, setU] = useState<User | null>(null);
  const dispatch = useAppDispatch();
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const [{ data, error, fetching }, _] = useGetUserQuery({
    variables: { uid: u?.id! },
    pause: isServerSide(),
  });
  const knobColor = useAppSelector((state) => state.misc.knobColor);
  const [movieId, setMovieId] = useState<string>('');
  const [filterValues, setFilterValues] = useState<any>();
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);

  const stableDispatch = useCallback(
    (args: any) => {
      return dispatch(args);
    },
    [dispatch]
  );

  useEffect(() => {
    colorLog('"Start" component initiated');
    colorLog('Cleared Redux storage');
    // Clear redux cache.
    dispatch(sliceComment({ type: COMMENT.RESET }));
    dispatch(sliceResetReply());
    dispatch(sliceResetSettings());
    dispatch(sliceValidateMovieLoading(false));
    getStoredUserLoginDetails().then((res) => {
      setU(res);
    });
  }, []);

  // This interval will run continuously through out the session.
  useEffect(() => {
    async function applyTimeLineStyles() {
      let timelineBar = document.querySelector('[data-uia="timeline-bar"]');
      if (timelineBar) {
        const firstChild = timelineBar.firstChild as HTMLElement;
        const secondChild = timelineBar.childNodes[1] as HTMLElement;
        firstChild.style.backgroundColor = knobColor;
        firstChild.style.opacity = '0.5';
        secondChild.style.backgroundColor = knobColor;
      }
      let knowView = document.querySelector('[data-uia="timeline-knob"]');
      let knobElement = knowView as HTMLElement;
      if (knobElement) {
        knobElement.style.backgroundColor = knobColor;
      }
    }
    let interval = setInterval(() => {
      applyTimeLineStyles();
    }, 100);
    return () => clearInterval(interval);
  }, [knobColor]);

  // Set the pre-saved video styles.
  useEffect(() => {
    async function applyVideoStyles() {
      let playerView = document.querySelector('[data-uia="player"]');
      let canvas = playerView as HTMLElement;
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
    let interval = setInterval(() => {
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
      dispatch(sliceComment({ type: COMMENT.RESET }));
      dispatch(sliceResetReply());
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
      console.log({ error });
      const networkError = error.networkError;
      if (networkError) dispatch(sliceSetNetworkError(true));
      else dispatch(sliceSetNetworkError(false));
    }
    if (!fetching && data) {
      let _u = data.getUser as User;
      stableDispatch(sliceAddUser(_u));
    }
    return () => {};
  }, [stableDispatch, fetching, data, error]);

  useFetchMovie(movieId);

  useEffect(() => {
    //Redux: Add new movie id
    stableDispatch(sliceAddMovieId(movieId));
    return () => {};
  }, [stableDispatch, movieId]);

  if (!videoElem) return <></>;
  return <CommentButton />;
};

export default withUrqlClient(urqlClient)(Start);
