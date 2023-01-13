import { Movie, MovieFullInformation } from '../../Utils/interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useInsertMovieInfoMutation,
  useInsertMovieMutation,
  useInsertVisitedMutation,
} from '../../generated/graphql';

import ChatWindow from '../createChatWindow/chatWindow';
import { CommentHeader } from './commentButton.styles';
import { GoCommentDiscussion } from 'react-icons/go';
import LogoLoading from '../../components/logo-loading/logoLoading';
import { MdChevronRight } from 'react-icons/md';
import { Provider as ReduxProvider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { getPlayerViewElement } from '../contentScript.utils';
import { getStoredCheckedStatus } from '../../Utils/storage';
import { sliceAddMovie } from '../../redux/slices/movie/movieSlice';
import { sliceSetIsOpenChatWindow } from '../../redux/slices/settings/settingsSlice';
import { store } from '../../redux/store';
import { v4 } from 'uuid';

const Loader = (chatElement: HTMLDivElement) => {
  const playerElement = getPlayerViewElement();
  const existingChatWindow = document.getElementsByClassName('chat-interface');
  if (playerElement !== null && !existingChatWindow[0]) {
    playerElement.appendChild(chatElement);
    createRoot(chatElement).render(
      <ReduxProvider store={store}>
        <ChatWindow />
      </ReduxProvider>
    );
  }
};

export const createChatWindow = (_chatWindowSize: string) => {
  let chatElement = document.createElement('div');
  let chatElementId = 'NComments';
  chatElement.id = chatElementId;
  chatElement.className = chatElementId;
  chatElement.style.cssText = `
      background-color: transparent !important;
    `;
  Loader(chatElement);
};

type props = {
  movieFetched: number;
  setMovieFetched: any;
};
const CommentButton: React.FC<props> = ({ movieFetched, setMovieFetched }) => {
  // Redux: App selectors.
  // Settings > openChatWindow, smoothWidth, chatWindowSize
  // User > uid, name
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );

  const smoothWidth = useAppSelector((state) => state.settings.smoothWidth);
  const chatWindowSize = useAppSelector(
    (state) => state.settings.chatWindowSize
  );
  const movieId = useAppSelector((state) => state.movie.id);
  // Redux: App Dispatch hook.
  const dispatch = useAppDispatch();

  // React: useState React hook.
  // isVisible is used to toggle chat icon visibility.
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // GraphQL
  const [, insertMovieInfo] = useInsertMovieInfoMutation();
  const [, insertMovie] = useInsertMovieMutation();
  const stableDispatch = useCallback(
    (args: any) => {
      return dispatch(args);
    },
    [dispatch]
  );

  // Logs user view history.
  // useEffect(() => {
  //   let sessionId = v4();
  //   let visitInterval = setInterval(() => {
  //     if (movieId && userId)
  //       insertVisited({
  //         uid: userId,
  //         mid: movieId,
  //         insertVisitedId: sessionId,
  //         time: 5,
  //       }).then((res) => {
  //         const { data, error } = res;
  //         if (error) {
  //           clearInterval(visitInterval);
  //           console.log(error);
  //         }
  //         if (data) {
  //           const _data = data.insertVisited;
  //         }
  //       });
  //     else clearInterval(visitInterval);
  //   }, 300000);
  //   () => clearInterval(visitInterval);
  // }, [userId, movieId]);

  useEffect(() => {
    // Listen for the activation of comment icon when user is logged in for the
    // first time when playing the video. TOGGLE COMMENT ICON
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (!sender.tab && request.checked === true) {
        getStoredCheckedStatus().then((res) => {
          setIsVisible(res);
        });
        sendResponse({ data: `Comment status changed` });
        return true;
      }
    });
    // Checking for isCommentIconEnabled without the listener.
    getStoredCheckedStatus().then((res) => {
      setIsVisible(res);
    });
    return () => {};
  }, [setIsVisible]);

  useMemo(() => {
    let count = 0;
    let interval = setInterval(() => {
      if (movieFetched === 0 || movieFetched === 1) {
        clearInterval(interval);
        return;
      }
      count += 500;
      if (count >= 5000) clearInterval(interval);
      chrome.runtime.sendMessage(
        { type: 'MOVIE_INFO', movieId },
        function (response) {
          if (movieFetched === 0 || movieFetched === 1) {
            clearInterval(interval);
            return;
          }
          console.log('RESPONSE FROM BACKGROUND', response.result);
          let result: MovieFullInformation = response.result;
          if (result !== null) clearInterval(interval);
          let type = result.type;
          let uniqueId =
            type !== 'movie' && result && result.seasons
              ? result.seasons[0]?.episodes[0]?.id
              : movieId;
          // insert the same data to the movie and title.
          insertMovieInfo({
            options: {
              id: uniqueId + '',
              year: result.year,
              runtime: result.runtime,
              title: result.title!,
              synopsis: result.synopsis!,
              storyart: result.storyart!,
              rating: result.rating!,
              boxart: result.boxart!,
              artwork: result.artwork!,
              type: result.type!,
              advisories: result.advisories!,
            },
          }).then(() => {
            if (type === 'movie') {
              insertMovie({
                options: {
                  id: movieId,
                  name: result.title!,
                  season: '',
                  stills: result.artwork!,
                  synopsis: result.synopsis!,
                  thumbs: result.boxart!,
                  parentTitleName: '',
                  likesCount: 0,
                  platformId: 1,
                  runtime: result.runtime,
                  titleId: uniqueId + '',
                  year: result.year,
                },
              }).then((res) => {
                if (res.error) console.log(res.error);
                const _data = res.data;
                if (_data) {
                  const movieData = _data.insertMovie as Movie;
                  stableDispatch(sliceAddMovie(movieData));
                  setMovieFetched(1);
                }
              });
              // TODO: Insert to redux.
            } else {
              let _seasons = result.seasons!;
              _seasons.map((season) => {
                const _episodes = season.episodes;
                // TODO: Find the episode and insert to redux
                _episodes.map((episode) => {
                  insertMovie({
                    options: {
                      id: episode.id + '',
                      name: episode.title!,
                      season: season.title!,
                      stills: episode.stills!,
                      synopsis: episode.synopsis!,
                      thumbs: episode.thumbs!,
                      parentTitleName: result.title!,
                      likesCount: 0,
                      platformId: 1,
                      runtime: episode.runtime,
                      titleId: uniqueId + '',
                      year: season.year,
                    },
                  }).then((res) => {
                    const { error, data } = res;
                    if (error) console.log(error);
                    if (data) {
                      const _data = data.insertMovie as Movie;
                      if (_data.id === movieId) {
                        stableDispatch(sliceAddMovie(_data));
                        setMovieFetched(1);
                      }
                    }
                  });
                });
              });
            }
          });
          if (Object.keys(result).length > 1) clearInterval(interval);
        }
      );
      () => clearInterval(interval);
    }, 500);
  }, [movieId, movieFetched]);

  if (!movieFetched && !movieId) return <GoCommentDiscussion size={40} />;

  if (!isVisible) return <></>;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setTimeout(() => {
          let nComments = document.getElementById('NComments');
          if (nComments === null) {
            dispatch(sliceSetIsOpenChatWindow(true));
            createChatWindow(chatWindowSize);
          } else dispatch(sliceSetIsOpenChatWindow(!openChatWindow));
        }, 100);
      }}>
      <CommentHeader
        isVisible={true}
        id='comment-header'
        className='comment-header'
        chatWindowSize={smoothWidth + ''}
        openChatWindow={openChatWindow}>
        {openChatWindow ? (
          <MdChevronRight size={40} />
        ) : (
          <GoCommentDiscussion size={40} />
        )}
      </CommentHeader>
    </div>
  );
};

export default CommentButton;
