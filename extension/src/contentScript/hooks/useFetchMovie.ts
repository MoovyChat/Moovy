import {
  sliceAddMovie,
  sliceResetMovie,
  sliceUpdateViewsCount,
} from '../../redux/slices/movie/movieSlice';
import {
  sliceSetIsMovieExists,
  sliceValidateMovieLoading,
} from '../../redux/slices/loading/loadingSlice';
import {
  useGetMovieQuery,
  useUpdateMovieViewCountMutation,
} from '../../generated/graphql';
import { useMemo, useState } from 'react';

import { Movie } from '../../Utils/interfaces';
import { isServerSide } from '../../constants';
import { useAppDispatch } from '../../redux/hooks';

export const useFetchMovie = (movieId: string) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const dispatch = useAppDispatch();
  const [, incrementMovieViewCount] = useUpdateMovieViewCountMutation();
  const [getMovieInfo] = useGetMovieQuery({
    variables: { mid: movieId },
    pause: isServerSide(),
  });

  useMemo(() => {
    if (!movieId) return;
    if (movie) return;
    let { data, error, fetching } = getMovieInfo;
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
          const { error, data } = res;
          if (data) {
            const _data = data.updateMovieViewCount! + 1;
            dispatch(sliceUpdateViewsCount(_data as number));
          }
        });
        setMovie(() => _data);
      }
    }
  }, [getMovieInfo, movieId]);

  if (!movieId) return null;
  return movie;
};
