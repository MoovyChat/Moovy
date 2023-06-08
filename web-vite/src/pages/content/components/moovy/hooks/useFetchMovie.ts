import { useEffect, useMemo, useState } from "react";
import {
  useUpdateMovieViewCountMutation,
  useGetMovieQuery,
} from "../../../../../generated/graphql";
import { isServerSide } from "../../../../../helpers/constants";
import { Movie } from "../../../../../helpers/interfaces";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  sliceSetIsMovieExists,
  sliceValidateMovieLoading,
} from "../../../../redux/slices/loading/loadingSlice";
import {
  sliceResetMovie,
  sliceAddMovie,
  sliceUpdateViewsCount,
} from "../../../../redux/slices/movie/movieSlice";
import { getMovieIdFromURL } from "../contentScript.utils";

export const useFetchMovie = (movieId: string) => {
  const [mid, setMovieId] = useState<string>(movieId);
  const [movie, setMovie] = useState<Movie | null>(null);
  const dispatch = useAppDispatch();
  const [, incrementMovieViewCount] = useUpdateMovieViewCountMutation();
  const [getMovieInfo] = useGetMovieQuery({
    variables: { mid: mid },
    pause: isServerSide(),
  });

  useEffect(() => {
    const fetchUrl = async () => {
      const url = window.location.href;
      const id = await getMovieIdFromURL(url);
      setMovieId(() => id);
    };
    fetchUrl();
  }, [movieId]);

  useMemo(() => {
    if (!mid) return;
    if (movie) return;
    const { data, error, fetching } = getMovieInfo;
    if (error) {
      dispatch(sliceSetIsMovieExists(false));
      dispatch(sliceResetMovie());
    }
    if (!fetching && data) {
      const _data = data.getMovie;
      if (_data) {
        dispatch(sliceAddMovie(_data));
        dispatch(sliceValidateMovieLoading(true));
        // Increase views count
        incrementMovieViewCount({ mid: _data.id }).then((res) => {
          const { data } = res;
          if (data && data.updateMovieViewCount) {
            const _data = data.updateMovieViewCount + 1;
            dispatch(sliceUpdateViewsCount(_data as number));
          } else {
            dispatch(sliceUpdateViewsCount(1));
          }
        });
        setMovie(() => _data);
      }
    }
  }, [getMovieInfo, mid]);

  if (!mid) return null;
  return movie;
};
