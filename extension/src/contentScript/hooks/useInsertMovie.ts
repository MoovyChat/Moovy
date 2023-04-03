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
  useInsertMovieInformationMutation,
  useInsertMovieMutation,
} from '../../generated/graphql';

import { sliceAddMovie } from '../../redux/slices/movie/movieSlice';

export const useInsertMovie = (movieId: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const dispatch = useAppDispatch();
  const movieExists = useAppSelector((state) => state.loading.isMovieExists);
  // GraphQL
  const [{ fetching }, insertMovieInfo] = useInsertMovieInformationMutation();
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

          if (fetching) {
            let text = `Adding ${result.title} to catalog`;
            dispatch(sliceSetLoadingText(text));
          }
          insertMovieInfo({ options: result, mid: movieId }).then((res) => {
            const { data, error } = res;
            if (error) console.log(error);
            if (data) {
              const movieRes = data.insertMovieInformation as Movie;
              setMovie(() => movieRes);
              dispatch(sliceAddMovie(movieRes));
              dispatch(sliceSetIsMovieLoaded(true));
              dispatch(sliceSetIsMovieExists(true));
              dispatch(sliceSetIsMovieInsertionFinished(true));
              dispatch(sliceSetLoadingText(''));
              clearInterval(interval);
              return;
            }
          });
        }
      );
      () => clearInterval(interval);
    }, 500);
  }, [movieId]);

  if (!movieId) return null;
  return movie;
};
