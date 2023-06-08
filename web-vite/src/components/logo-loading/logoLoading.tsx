import Loading from "../loading/loading";
/* eslint-disable react/react-in-jsx-scope */
import { MouseEventHandler } from "react";
import { StyledSplashScreen } from "./logoLoading.styles";
import { getIdFromNetflixURL } from "../../pages/content/components/moovy/contentScript.utils";
import { useAppSelector, useAppDispatch } from "../../pages/redux/hooks";
import { sliceAddMovieId } from "../../pages/redux/slices/movie/movieSlice";
import { FULL_LOGO_TRANSPARENT } from "../../helpers/constants";
import { sliceSetIsOpenChatWindow } from "../../pages/redux/slices/settings/settingsSlice";
import { handleMouseEnter, handleMouseLeave } from "../../pages/popup/utils";
import { MdOutlineExitToApp } from "react-icons/md";

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
      <div
        className="exit common"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(sliceSetIsOpenChatWindow(false));
        }}
        onMouseEnter={handleMouseEnter("Close Chat")}
        onMouseLeave={handleMouseLeave("")}
      >
        <MdOutlineExitToApp className="star" size={20} />
      </div>

      <div className="logo">
        <img src={FULL_LOGO_TRANSPARENT} alt="logo" />
      </div>
      <div className="loading">
        <Loading />
      </div>
      <div className="loading-text">
        {text
          ? text
          : networkError
          ? "Server Error. Try refreshing the browser"
          : "Something went wrong!"}
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
