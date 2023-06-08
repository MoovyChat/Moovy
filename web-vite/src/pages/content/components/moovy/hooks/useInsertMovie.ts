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
import { getMovieIdFromURL } from "../contentScript.utils";

interface MovieResponse {
  result: MovieFullInformation;
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
          const result: MovieFullInformation = response.result;
          const IdFromUrl = await getMovieIdFromURL(currentUrl);
          if (fetching) {
            const text = `Adding ${IdFromUrl} to catalog`;
            dispatch(sliceSetLoadingText(text));
          }
          const res = await insertMovieInfo({ options: result, mid: movieId });
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
            break;
          }
          if (result !== null) break;
        } catch (error) {
          console.error("Error sending message:", error);
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
