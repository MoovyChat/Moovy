import Loading from "../loading/loading";
/* eslint-disable react/react-in-jsx-scope */
import { MouseEventHandler } from "react";
import { StyledSplashScreen } from "./logoLoading.styles";
import { getIdFromNetflixURL } from "../../pages/content/components/moovy/contentScript.utils";
import { useAppSelector, useAppDispatch } from "../../pages/redux/hooks";
import { sliceAddMovieId } from "../../pages/redux/slices/movie/movieSlice";
import { FULL_LOGO_TRANSPARENT } from "../../helpers/constants";

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
        <img src={FULL_LOGO_TRANSPARENT} alt="logo" />
      </div>
      <div className="loading">
        <Loading />
      </div>
      <div className="loading-text">
        {networkError ? "Server Error. Try refreshing the browser" : text}
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
