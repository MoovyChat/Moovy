/// <reference types="chrome"/>

import React, {
  MouseEventHandler,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";

import { StyledErrorPage, StyledIFrameButton } from "./errorPage.styles";

import { MdOutlineExitToApp } from "react-icons/md";
import { useGetUserMutMutation } from "../../generated/graphql";
import { FULL_LOGO_TRANSPARENT, MOOVY_URL } from "../../helpers/constants";
import { requestTypes } from "../../helpers/enums";
import { User } from "../../helpers/interfaces";
import { handleMouseEnter, handleMouseLeave } from "../../pages/popup/utils";
import { useAppDispatch } from "../../pages/redux/hooks";
import { sliceSetIsOpenChatWindow } from "../../pages/redux/slices/settings/settingsSlice";
import { sliceAddUser } from "../../pages/redux/slices/user/userSlice";
import { withUrqlClient } from "next-urql";
import { urqlClient } from "../../helpers/urql/urqlClient";
import Loading from "../loading/loading";

type props = {
  text: string;
};
const ErrorPage: React.FC<props> = ({ text }) => {
  const dispatch = useAppDispatch();
  const [err, setErr] = useState<string>("");
  const [, getUser] = useGetUserMutMutation();
  const [iFrameLoaded, setIFrameLoaded] = useState<boolean>(false);

  const refetchToChrome = () => {
    chrome.runtime.sendMessage(
      { type: requestTypes.REFETCH_USER },
      function (response) {
        const userFromExtension = response as User;
        dispatch(sliceAddUser(userFromExtension));
        if (response) {
          getUser({ uid: userFromExtension.id }).then((res) => {
            const { error, data } = res;
            if (error) {
              setErr(() => "Error: Unable to fetch user.");
            }
            if (data) {
              const _data = data.getUserMut as User;
              dispatch(sliceAddUser(_data));
            }
          });
        }
      }
    );
  };

  const refetchUser: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    refetchToChrome();
  };
  const url = `${MOOVY_URL}/embed-login`;

  useEffect(() => {
    const handleIframeMessage = (event) => {
      // Make sure the message is from the expected origin (e.g., your domain)
      // if (event.origin !== 'http://your-domain.com') return;

      if (event.data === "LoginCompleted") {
        // Handle button click here
        // Refetch the login details.
        refetchToChrome();
      }
    };

    window.addEventListener("message", handleIframeMessage, false);

    // Cleanup
    return () => {
      window.removeEventListener("message", handleIframeMessage, false);
    };
  }, []);

  const iFrameLoadHandler: ReactEventHandler<HTMLIFrameElement> = () => {
    setIFrameLoaded(true);
  };

  return (
    <StyledErrorPage>
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
        <img src={FULL_LOGO_TRANSPARENT} alt="Moovy" />
      </div>
      <div className="iframe-container">
        {!iFrameLoaded && <Loading />}
        <StyledIFrameButton
          src={url}
          onLoad={iFrameLoadHandler}
          isLoaded={iFrameLoaded}
        />
      </div>
      <div className="divider">
        <div className="line" />
        <span className="text">or</span>
        <div className="line" />
      </div>
      <div className="text">{text}</div>
      <div className="refetch" onClick={refetchUser}>
        Refetch User details
      </div>
      {err && <div className="err text">{err}</div>}
    </StyledErrorPage>
  );
};

export default withUrqlClient(urqlClient)(ErrorPage);
