import { MouseEventHandler, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { EXT_URL } from '../../constants';
import Loading from '../loading/loading';
import { StyledSplashScreen } from './logoLoading.styles';
import { getIdFromNetflixURL } from '../../contentScript/contentScript.utils';
import { useFetchMovie } from '../../contentScript/hooks/useFetchMovie';
import { useInsertMovie } from '../../contentScript/hooks/useInsertMovie';

const LogoLoading = () => {
  const text = useAppSelector((state) => state.loading.loadingText);
  const networkError = useAppSelector((state) => state.loading.networkError);
  const isMovieLoaded = useAppSelector((state) => state.loading.isMovieLoaded);
  const [movieId, setMovieId] = useState<string>('');

  const movie = useFetchMovie(movieId);
  if (!movie) useInsertMovie(movieId);

  const refetchMovie: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.stopPropagation();
    const currentUrl = window.location.href;
    const id = await getIdFromNetflixURL(currentUrl);
    if (!id) return;
    setMovieId(() => id + '');
  };
  return (
    <StyledSplashScreen>
      <div className='logo'>
        <img src={`${EXT_URL}/Moovy/moovy-text-logo-white.png`} alt='logo' />
      </div>
      <div className='loading'>
        <Loading />
      </div>
      <div className='loading-text'>
        {networkError ? 'Server Error. Try refreshing the browser' : text}
      </div>
      {!isMovieLoaded && (
        <div className='fetch-movie' onClick={refetchMovie}>
          Refresh
        </div>
      )}
    </StyledSplashScreen>
  );
};

export default LogoLoading;
