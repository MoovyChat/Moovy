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
import { isNumber } from '../constants';
import { sliceAddUser } from '../redux/slices/user/userSlice';
import { sliceComment } from '../redux/slices/comment/commentSlice';
import { sliceResetReply } from '../redux/slices/reply/replySlice';
import { urqlClient } from '../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

interface props {
  video_id: string;
  userDetails: User;
}

const Start: React.FC<props> = ({ video_id, userDetails }) => {
  const [u, setU] = useState<User>(userDetails);
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  const [videoElem, setVideoElem] = useState<HTMLVideoElement>();
  const [{ data, error, fetching }, _] = useGetUserQuery({
    variables: { uid: u?.id },
  });
  const [movieId, setMovieId] = useState<string>(video_id);
  const [getMovieInfo] = useGetMovieQuery({ variables: { mid: movieId } });
  const [movieFetched, setMovieFetched] = useState<number>(0);
  const [filterValues, setFilterValues] = useState<any>();
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);

  const [, incrementMovieViewCount] = useUpdateMovieViewCountMutation();

  const stableDispatch = useCallback(
    (args: any) => {
      return dispatch(args);
    },
    [dispatch]
  );

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
    if (!sender.tab && request.type === 'RESET_MOVIE_ID') {
      if (isNumber(movieId)) {
        setMovieId(() => request.movieId);
        dispatch(sliceSetSmoothWidth(0));
      }
      sendResponse({
        data: 'Movie ID got reset',
      });
    }
    return true;
  });

  useEffect(() => {
    colorLog('"Start" component initiated');
    colorLog('Cleared Redux storage');
    // Clear redux cache.
    dispatch(sliceComment({ type: COMMENT.RESET }));
    dispatch(sliceResetReply());
    dispatch(sliceResetSettings());
    if (userDetails.id === '') {
      // console.log('Checking details', userDetails);
      getStoredUserLoginDetails().then((res) => {
        // console.log('Checking user', res);
        setU(res);
      });
    } else {
      setU(userDetails);
    }
  }, [movieId]);

  useEffect(() => {
    if (error) colorLog(error);
    if (!fetching && data) {
      let _u = data.getUser as User;
      stableDispatch(sliceAddUser(_u));
    }
    return () => {};
  }, [stableDispatch, fetching, data, error]);

  useMemo(() => {
    let { data, error, fetching } = getMovieInfo;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getMovie;
      if (_data) {
        if (movie.id && movie.name) {
          console.log('Movie loaded');
        } else {
          dispatch(sliceAddMovie(_data));
          // Increase views count
          incrementMovieViewCount({ mid: _data.id }).then((res) => {
            const { error, data } = res;
            if (error) colorLog(error);
            if (data) {
              const _data = data.updateMovieViewCount!;
              dispatch(sliceUpdateViewsCount(_data as number));
            }
          });
        }
        setMovieFetched(1);
      } else {
        setMovieFetched(2);
      }
    }
  }, [getMovieInfo, stableDispatch]);

  useEffect(() => {
    //Redux: Add new movie id
    stableDispatch(sliceAddMovieId(movieId));
    return () => {};
  }, [stableDispatch, movieId]);

  return (
    <CommentButton
      movieFetched={movieFetched}
      setMovieFetched={setMovieFetched}
    />
  );
};

export default withUrqlClient(urqlClient)(Start);
