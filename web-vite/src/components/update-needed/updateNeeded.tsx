import React from "react";
import { MdOutlineExitToApp } from "react-icons/md";
import styled from "styled-components";
import { EXT_STORE_LINK, FULL_LOGO_TRANSPARENT } from "../../helpers/constants";
import { handleMouseEnter, handleMouseLeave } from "../../pages/popup/utils";
import { useAppDispatch } from "../../pages/redux/hooks";
import { sliceSetIsOpenChatWindow } from "../../pages/redux/slices/settings/settingsSlice";
import Loading from "../loading/loading";
import {
  HintText,
  StyledSplashScreen,
} from "../logo-loading/logoLoading.styles";

interface Props {
  currentVersion: string;
  latestVersion: string;
  releaseNotes: string; // New prop for release notes
}
const ChromeStoreButton = styled.button`
  background: url("https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/mPGKYBIR2uCP0ApchDXE.png")
    no-repeat center/cover;
  border: none;
  width: 150px; // Adjust width as per your need
  height: 50px; // Adjust height as per your need
  cursor: pointer;
  transition: transform 0.3s;
  box-shadow: 0 0 10px;
  border: 4px solid transparent;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const UpdateNeeded: React.FC<Props> = ({
  currentVersion,
  latestVersion,
  releaseNotes,
}) => {
  const dispatch = useAppDispatch();
  const goToExtensionUrl = () => {
    chrome.runtime.sendMessage({
      type: "OPEN_LINK",
      url: EXT_STORE_LINK,
    });
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
      <div className="moovychat-logo">
        <img src={FULL_LOGO_TRANSPARENT} alt="moovychat-logo" />
      </div>
      <div className="loading-text">
        <HintText>
          <div className="version-info">
            <h3>Update Available!</h3>
            <h4>Current Version: {currentVersion}</h4>
            <h4>Latest Version: {latestVersion}</h4>
          </div>
          {releaseNotes !== "" && (
            <div className="release-notes">
              <h2>Release Notes:</h2>
              <ul>
                {releaseNotes.split(".").map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="release-notes">
            <h2>How to Update:</h2>
            <ol>
              <li>Go to chrome://extensions/</li>
              <li>Uninstall the existing extension.</li>
              <li>Install the latest version of the extension.</li>
              <li>Reload the movie/show.</li>
            </ol>
          </div>
          <ChromeStoreButton
            onClick={() => goToExtensionUrl()}
          ></ChromeStoreButton>
        </HintText>
      </div>
    </StyledSplashScreen>
  );
};

export default UpdateNeeded;
