import { useEffect, useState } from "react";
import { batch } from "react-redux";
import {
  MovieFullInformation,
  useInsertMovieInformationMutation,
} from "../../../../../generated/graphql";
import { Movie } from "../../../../../helpers/interfaces";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  sliceSetIsMovieExists,
  sliceSetIsMovieInsertionFinished,
  sliceSetIsMovieLoaded,
  sliceSetLoadingText,
} from "../../../../redux/slices/loading/loadingSlice";
import { sliceAddMovie } from "../../../../redux/slices/movie/movieSlice";

export const useInsertMovie = (movieId: string) => {
  const [movieState, setMovie] = useState<Movie | null>(null);
  const dispatch = useAppDispatch();
  const movieExists = useAppSelector((state) => state.loading.isMovieExists);
  // GraphQL
  const [{ fetching }, insertMovieInfo] = useInsertMovieInformationMutation();

  useEffect(() => {
    let count = 0;
    if (!movieId) return;
    if (movieExists) return;
    const interval = setInterval(() => {
      count += 500;
      if (count >= 5000) clearInterval(interval);
      if (movieId === null || movieId === undefined || movieId === "") {
        dispatch(sliceSetIsMovieExists(false));
        return;
      }

      if (movieExists) {
        clearInterval(interval);
        return;
      }

      chrome.runtime.sendMessage(
        { type: "REQUEST_MOVIE_INFO", movieId },
        function (response) {
          const result: MovieFullInformation = response.result;
          if (result !== null) clearInterval(interval);

          if (fetching) {
            const text = `Adding ${result.title} to catalog`;
            dispatch(sliceSetLoadingText(text));
          }
          insertMovieInfo({ options: result, mid: movieId }).then((res) => {
            const { data, error } = res;
            if (error) console.log(error);
            if (data) {
              const movieRes = data.insertMovieInformation as Movie;
              setMovie(() => movieRes);

              batch(() => {
                dispatch(sliceAddMovie(movieRes));
                dispatch(sliceSetIsMovieLoaded(true));
                dispatch(sliceSetIsMovieExists(true));
                dispatch(sliceSetIsMovieInsertionFinished(true));
                dispatch(sliceSetLoadingText(""));
              });

              clearInterval(interval);
              return;
            }
          });
        }
      );

      () => clearInterval(interval);
    }, 500);
  }, [movieId]);
  if (movieExists) return null;
  if (!movieId) return null;
  return movieState;
};
