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
  sliceSetNetworkError,
  sliceSetNetworkErrorMessage,
} from "../../../../redux/slices/loading/loadingSlice";
import { sliceAddMovie } from "../../../../redux/slices/movie/movieSlice";
import { getMovieIdFromURL } from "../contentScript.utils";

interface MovieResponse {
  result: { data: MovieFullInformation | null; error: string | null };
}

const sendMessage = (message) => {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, function (response) {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
};

export const useInsertMovie = (movieId: string) => {
  const [movieState, setMovie] = useState<Movie | null>(null);
  const dispatch = useAppDispatch();
  const movieExists = useAppSelector((state) => state.loading.isMovieExists);
  // GraphQL
  const [{ fetching }, insertMovieInfo] = useInsertMovieInformationMutation();

  useEffect(() => {
    const fetchMovieInfo = async () => {
      let count = 0;
      while (count < 5000) {
        count += 500;
        if (
          movieId === null ||
          movieId === undefined ||
          movieId === "" ||
          movieExists
        ) {
          dispatch(sliceSetIsMovieExists(false));
          break;
        }

        const currentUrl = window.location.href;
        try {
          const response = (await sendMessage({
            type: "REQUEST_MOVIE_INFO",
            currentUrl,
          })) as MovieResponse;

          const responseData: MovieFullInformation = response.result.data;

          const error = response.result.error;
          if (error) {
            dispatch(sliceSetNetworkErrorMessage(error));
            dispatch(sliceSetNetworkError(true));
          }
          if (responseData) {
            const text = `Adding ${responseData.title} to catalog`;
            dispatch(sliceSetLoadingText(text));
            const res = await insertMovieInfo({
              options: responseData,
              mid: movieId,
            });
            const { data, error } = res;
            if (error) {
              dispatch(sliceSetNetworkErrorMessage(error.message));
              dispatch(sliceSetNetworkError(true));
            }
            if (data) {
              const movieRes = data.insertMovieInformation as Movie;
              setMovie(() => movieRes);

              batch(() => {
                dispatch(sliceAddMovie(movieRes));
                dispatch(sliceSetIsMovieLoaded(true));
                dispatch(sliceSetIsMovieExists(true));
                dispatch(sliceSetIsMovieInsertionFinished(true));
                dispatch(sliceSetLoadingText(""));
                dispatch(sliceSetNetworkErrorMessage(""));
                dispatch(sliceSetNetworkError(false));
              });
              break;
            }
          }
          if (responseData !== null) break;
        } catch (error) {
          console.error("Error sending message:", error);
          dispatch(sliceSetNetworkErrorMessage(error));
          dispatch(sliceSetNetworkError(true));
        }
        await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms before the next iteration
      }
    };

    fetchMovieInfo();
  }, [movieId]);

  if (movieExists) return null;
  if (!movieId) return null;
  return movieState;
};
