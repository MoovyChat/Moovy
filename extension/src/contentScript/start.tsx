import React, { useCallback, useEffect, useState } from 'react';
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
  sliceResetSettings,
  sliceSetSmoothWidth,
  sliceSetVideoSize,
} from '../redux/slices/settings/settingsSlice';
import {
  sliceSetNetworkError,
  sliceValidateMovieLoading,
} from '../redux/slices/loading/loadingSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import { COMMENT } from '../redux/actionTypes';
import CommentButton from './commentButton/commentButton';
import { StyledStart } from './start.styles';
import { getVideoElement } from './contentScript.utils';
import { isServerSide } from '../constants';
import { sliceAddMovieId } from '../redux/slices/movie/movieSlice';
import { sliceAddUser } from '../redux/slices/user/userSlice';
import { sliceComment } from '../redux/slices/comment/commentSlice';
import { sliceResetAudioNodes } from '../redux/slices/audioNodes';
import { sliceResetReply } from '../redux/slices/reply/replySlice';
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
  const [{ data, error, fetching }, _] = useGetUserQuery({
    variables: { uid: u?.id! },
    pause: isServerSide(),
  });
  const autoSkipValue = useAppSelector((state) => state.misc.autoSkip);
  const autoNextEpisodeValue = useAppSelector(
    (state) => state.misc.autoNextEpisode
  );
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  const [movieId, setMovieId] = useState<string>('');
  const [filterValues, setFilterValues] = useState<any>();
  const [selectedFilters, setSelectedFilters] = useState<filterType[]>([]);

  // const nodes = useAppSelector((state) => state.audioNodes);
  const [isBottomControlsVisible, setIsBottomControlsVisible] =
    useState<boolean>(false);
  const [visible, setIsVisible] = useState<boolean>(true);
  // const [audioSource, setAudioSource] =
  //   useState<MediaElementAudioSourceNode | null>(null);
  // const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const oldIntervalIds = useAppSelector((state) => state.misc.intervalIds);
  // useEffect(() => {
  //   if (audioSource || audioCtx) dispatch(sliceResetAudioNodes());
  // }, [user]);
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
    dispatch(sliceComment({ type: COMMENT.RESET }));
    dispatch(sliceResetReply());
    dispatch(sliceResetSettings());
    dispatch(sliceResetAudioNodes());
    dispatch(sliceValidateMovieLoading(false));
    getStoredUserLoginDetails().then((res) => {
      setU(res);
    });
  }, []);

  // useEffect(() => {
  //   async function manageAudio() {
  //     videoElement.then((ele) => {
  //       if (!ele) return;
  //       ele[0].playbackRate = manipulation.playbackRate;

  //       if (!nodes.audioContext) {
  //         const context = new AudioContext();
  //         stableDispatch(sliceSetAudioContext(context));
  //       }
  //       if (!nodes.audioContext) return;
  //       if (!nodes.audioSource) {
  //         try {
  //           const source = nodes.audioContext.createMediaElementSource(ele[0]);
  //           stableDispatch(sliceSetAudioSource(source));
  //         } catch (e) {}
  //       }
  //       // Create a MediaElementSourceNode
  //       if (!nodes.analyser) {
  //         const _analyser = nodes.audioContext.createAnalyser();
  //         stableDispatch(sliceSetAnalyser(_analyser));
  //       }
  //       if (!nodes.stereo) {
  //         const stereoPanner = nodes.audioContext.createStereoPanner();
  //         stableDispatch(sliceSetStereoPanNode(stereoPanner));
  //       }
  //       if (!nodes.distortion) {
  //         const distortion = nodes.audioContext.createWaveShaper();
  //         stableDispatch(sliceSetDistortion(distortion));
  //       }

  //       if (!nodes.gain) {
  //         const _gain = nodes.audioContext.createGain();
  //         stableDispatch(sliceSetGain(_gain));
  //       }
  //       if (!nodes.biQuadFilter) {
  //         let filter = nodes.audioContext.createBiquadFilter();
  //         stableDispatch(sliceSetBiQuadFilter(filter));
  //       }
  //       if (
  //         nodes.audioSource &&
  //         nodes.analyser &&
  //         nodes.stereo &&
  //         nodes.distortion &&
  //         nodes.gain &&
  //         nodes.biQuadFilter
  //       ) {
  //         // Connect the MediaElementSourceNode to the audio graph
  //         nodes.audioSource.connect(nodes.distortion);
  //         nodes.distortion.connect(nodes.biQuadFilter);
  //         nodes.biQuadFilter.connect(nodes.stereo);
  //         nodes.stereo.connect(nodes.gain);
  //         nodes.gain.connect(nodes.analyser);
  //         nodes.analyser.connect(nodes.audioContext.destination);

  //         // Configure filter
  //         nodes.biQuadFilter.type = manipulation.filterType as BiquadFilterType;
  //         nodes.biQuadFilter.frequency.value = manipulation.frequency;
  //         nodes.biQuadFilter.Q.value = manipulation.QValue;
  //         nodes.biQuadFilter.gain.value = manipulation.gain;
  //         nodes.stereo.pan.value = manipulation.stereo;
  //         nodes.gain.gain.value = manipulation.gain;
  //         nodes.distortion.curve = makeDistortionCurve(
  //           manipulation.distortionCurve
  //         );
  //         nodes.distortion.oversample =
  //           manipulation.distortionOverSample as OverSampleType;

  //         setAudioSource(nodes.audioSource);
  //         setAudioCtx(nodes.audioContext);
  //       }
  //     });
  //   }
  //   manageAudio();
  // }, [manipulation, videoElement, movieId, user, nodes.audioContext]);

  useEffect(() => {
    let bottomControlsObserver: MutationObserver | null = null;

    const handleMutation = (
      mutationsList: MutationRecord[],
      observer: MutationObserver
    ) => {
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

    startObserver();

    return () => {
      bottomControlsObserver?.disconnect();
      bottomControlsObserver = null;
    };
  }, []);

  useEffect(() => {
    async function applyTimeLineStyles() {
      let timelineBar = document.querySelector('[data-uia="timeline-bar"]');
      if (timelineBar) {
        const firstChild = timelineBar.firstChild as HTMLElement;
        const secondChild = timelineBar.childNodes[1] as HTMLElement;
        firstChild.style.backgroundColor = accentColor;
        firstChild.style.opacity = '0.5';
        secondChild.style.backgroundColor = accentColor;
      }
      let knowView = document.querySelector('[data-uia="timeline-knob"]');
      let knobElement = knowView as HTMLElement;
      if (knobElement) {
        knobElement.style.backgroundColor = accentColor;
      }
    }

    if (isBottomControlsVisible) {
      applyTimeLineStyles();
    }
  }, [isBottomControlsVisible, accentColor, visible]);

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
      dispatch(sliceResetAudioNodes());
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
  return (
    <StyledStart visible={isBottomControlsVisible}>
      <CommentButton visible={isBottomControlsVisible} />
      {/* <div className='main-audio'>
        <AudioVisualizer fftSize={1024} canvasRef={canvasRefObj} />
      </div> */}
    </StyledStart>
  );
};

export default withUrqlClient(urqlClient)(Start);
