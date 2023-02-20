import { Movie, MovieFullInformation } from '../../Utils/interfaces';
import {
  sliceSetIsMovieExists,
  sliceSetIsMovieInsertionFinished,
  sliceSetIsMovieLoaded,
  sliceSetLoadingText,
  sliceValidateMovieLoading,
} from '../../redux/slices/loading/loadingSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';
import {
  useInsertMovieInfoMutation,
  useInsertMovieMutation,
} from '../../generated/graphql';

import { sliceAddMovie } from '../../redux/slices/movie/movieSlice';

export const useInsertMovie = (movieId: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const dispatch = useAppDispatch();
  const movieExists = useAppSelector((state) => state.loading.isMovieExists);
  // GraphQL
  const [, insertMovieInfo] = useInsertMovieInfoMutation();
  const [, insertMovie] = useInsertMovieMutation();
  useEffect(() => {
    let count = 0;
    if (!movieId) return;
    let interval = setInterval(() => {
      if (movieExists) {
        clearInterval(interval);
        return;
      }
      count += 500;
      if (count >= 5000) clearInterval(interval);
      if (movieId === null || movieId === undefined || movieId === '') {
        dispatch(sliceSetIsMovieExists(false));
        return;
      }
      chrome.runtime.sendMessage(
        { type: 'REQUEST_MOVIE_INFO', movieId },
        function (response) {
          if (movieExists) {
            clearInterval(interval);
            return;
          }

          let result: MovieFullInformation = response.result;
          if (result !== null) clearInterval(interval);
          let type = result?.type;
          let uniqueId =
            type !== 'movie' && result && result.seasons
              ? result.seasons[0]?.episodes[0]?.id
              : movieId;
          // insert the same data to the movie and title.
          insertMovieInfo({
            options: {
              id: uniqueId + '',
              year: result?.year,
              runtime: result?.runtime,
              title: result?.title!,
              synopsis: result?.synopsis!,
              storyart: result?.storyart!,
              rating: result?.rating!,
              boxart: result?.boxart!,
              artwork: result?.artwork!,
              type: result?.type!,
              advisories: result?.advisories!,
            },
          }).then(() => {
            console.log(type);
            if (type === 'movie') {
              insertMovie({
                options: {
                  id: movieId,
                  name: result?.title!,
                  season: '',
                  stills: result?.artwork!,
                  synopsis: result?.synopsis!,
                  thumbs: result?.boxart!,
                  parentTitleName: '',
                  likesCount: 0,
                  platformId: 1,
                  runtime: result?.runtime,
                  titleId: uniqueId + '',
                  year: result?.year,
                },
              }).then((res) => {
                if (res.error) console.log(res.error);
                const _data = res.data;
                if (_data) {
                  const movieData = _data.insertMovie as Movie;
                  dispatch(sliceAddMovie(movieData));
                  setMovie(() => movieData);
                  dispatch(sliceValidateMovieLoading(true));
                }
              });
              // TODO: Insert to redux.
            } else {
              let _seasons = result?.seasons!;
              const seasonCount = _seasons?.length;
              _seasons &&
                _seasons.map((season, sIndex) => {
                  const _episodes = season?.episodes;
                  const episodeCount = _episodes?.length;
                  // TODO: Find the episode and insert to redux
                  _episodes.map(async (episode, epIndex) => {
                    const res = await insertMovie({
                      options: {
                        id: episode?.id + '',
                        name: episode?.title!,
                        season: season?.title!,
                        stills: episode?.stills!,
                        synopsis: episode?.synopsis!,
                        thumbs: episode?.thumbs!,
                        parentTitleName: result?.title!,
                        likesCount: 0,
                        platformId: 1,
                        runtime: episode?.runtime,
                        titleId: uniqueId + '',
                        year: season?.year,
                      },
                    });
                    const { error, data } = res;
                    if (error) console.log(error);
                    if (data) {
                      const _data = data.insertMovie as Movie;
                      let text = `(S${
                        sIndex + 1
                      }/${seasonCount}): E${epIndex}/${episodeCount} - "${
                        _data.name
                      }" added to catalog`;
                      dispatch(sliceSetLoadingText(text));
                      if (
                        epIndex + 1 === episodeCount &&
                        sIndex + 1 === seasonCount
                      ) {
                        dispatch(sliceSetIsMovieInsertionFinished(true));
                      }
                      if (_data.id === movieId) {
                        setMovie(() => _data);
                        dispatch(sliceAddMovie(_data));
                        dispatch(sliceSetIsMovieLoaded(true));
                        dispatch(sliceSetIsMovieExists(true));
                      }
                    }
                  });
                });
            }
          });
          if (result && Object.keys(result).length > 1) clearInterval(interval);
        }
      );
      () => clearInterval(interval);
    }, 500);
  }, [movieId]);

  if (!movieId) return null;
  return movie;
};
