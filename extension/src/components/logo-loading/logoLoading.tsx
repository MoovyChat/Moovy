import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { EXT_URL } from '../../constants';
import Loading from '../loading/loading';
/* eslint-disable react/react-in-jsx-scope */
import { MouseEventHandler } from 'react';
import { StyledSplashScreen } from './logoLoading.styles';
import { getIdFromNetflixURL } from '../../contentScript/contentScript.utils';
import { sliceAddMovieId } from '../../redux/slices/movie/movieSlice';

const LogoLoading = () => {
  const text = useAppSelector((state) => state.loading.loadingText);
  const networkError = useAppSelector((state) => state.loading.networkError);
  const isMovieLoaded = useAppSelector((state) => state.loading.isMovieLoaded);
  const dispatch = useAppDispatch();
  const refetchMovie: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    const currentUrl = window.location.href;
    const id = await getIdFromNetflixURL(currentUrl);
    if (!id) return;
    dispatch(sliceAddMovieId(id));
  };

  return (
    <StyledSplashScreen>
      <div className="logo">
        <img src={`${EXT_URL}/moovy/moovy-text-logo-white.webp`} alt="logo" />
      </div>
      <div className="loading">
        <Loading />
      </div>
      <div className="loading-text">
        {networkError ? 'Server Error. Try refreshing the browser' : text}
      </div>
      {!isMovieLoaded && (
        <div className="fetch-movie" onClick={refetchMovie}>
          Refresh
        </div>
      )}
    </StyledSplashScreen>
  );
};

export default LogoLoading;
