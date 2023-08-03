import "./fonts.scss";

import { DragBar, Perimeter } from "./chatInterface.styles";

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Profile } from "../../../../../generated/graphql";

import { withUrqlClient } from "next-urql";
import { createRoot } from "react-dom/client";
import { User } from "../../../../../helpers/interfaces";
import { urqlClient } from "../../../../../helpers/urql/urqlClient";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { sliceSetIsProfileNeedsToBeUpdated } from "../../../../redux/slices/misc/miscSlice";
import {
  sliceResetPopUp,
  sliceSetChatWindowSize,
} from "../../../../redux/slices/settings/settingsSlice";
import { persistor, store } from "../../../../redux/store";
import { getPlayerViewElement, getVideoElement } from "../contentScript.utils";
import { SocketContext } from "../context/socketContextFile";
import useMousePosition from "../hooks/useMouseMove";
import AnimateMessages from "../moovy-nest/animateMessages/animateMessages";
import ChatWindowParentComponent from "./chatWindowParentComponent";

type props = {
  user: User;
  divRef?: React.MutableRefObject<HTMLDivElement | null>;
  dragRef?: React.MutableRefObject<HTMLDivElement | null>;
  widthRef: React.MutableRefObject<number>;
  videoWidthRef: React.MutableRefObject<number>;
  openChatWindow: boolean;
  profile: Profile | null | undefined;
  profileFetching: boolean;
};
const ChatInterface: React.FC<props> = ({
  user,
  dragRef,
  widthRef,
  videoWidthRef,
  openChatWindow,
  profile,
  profileFetching,
}) => {
  const commentIcon = document.getElementById("comment-header");
  const [pos, setPosition] = useState({ x: 0, y: 0 });
  const { movie, misc, settings } = useAppSelector((state) => state);
  const font = misc.font;
  const { enableBackground } = misc;
  const chatWindowSize = settings.chatWindowSize || "30";
  const thumbs = movie.thumbs;
  const divRef = useRef<HTMLDivElement | null>(null);
  const videoElem = getPlayerViewElement();

  const windowTransition = `cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s;`;
  const dispatch = useAppDispatch();
  const position = useMousePosition();

  const [customLoading, setCustomLoading] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(true);

  const socket = useContext(SocketContext);
  const roomId = useAppSelector((state) => state.socket.roomId);
  const platform = movie?.platform;

  useEffect(() => {
    setCustomLoading(() => true);
    const timeout = setTimeout(() => {
      !profileFetching && setCustomLoading(() => false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [profileFetching]);

  useEffect(() => {
    if (!profileFetching) {
      if (profile === null || profile === undefined)
        dispatch(sliceSetIsProfileNeedsToBeUpdated(true));
      else if (!profile.fullname || !profile.dob) {
        dispatch(sliceSetIsProfileNeedsToBeUpdated(true));
      } else dispatch(sliceSetIsProfileNeedsToBeUpdated(false));
    }
  }, [profile, profileFetching]);

  useEffect(() => {
    let videoPlayer;
    let seekingInProgress = false;

    const getVideoPlayer = async () => {
      const videoElements = await getVideoElement();
      if (videoElements) {
        videoPlayer = videoElements[0];
        videoPlayer.addEventListener("seeking", handleSeeking);
        videoPlayer.addEventListener("seeked", handleSeeked);
        videoPlayer.addEventListener("play", handlePlay);
        videoPlayer.addEventListener("pause", handlePause);
      }
    };

    const handleSeeking = () => {
      seekingInProgress = true;
    };

    const handleSeeked = () => {
      if (roomId) {
        socket.emit("seektime", videoPlayer.currentTime, roomId, user);
      }
      seekingInProgress = false;
    };

    const handlePlay = () => {
      if (!seekingInProgress && videoPlayer.paused === false) {
        if (roomId) socket.emit("play", roomId, user);
      }
    };

    const handlePause = () => {
      if (!seekingInProgress && videoPlayer.paused === true) {
        if (roomId) socket.emit("pause", roomId, user);
      }
    };

    if (socket) {
      getVideoPlayer();
      let url = window.location.href;
      socket.emit("show-change", url, roomId, movie);
    }

    return () => {
      if (videoPlayer) {
        videoPlayer.removeEventListener("seeking", handleSeeking);
        videoPlayer.removeEventListener("seeked", handleSeeked);
        videoPlayer.removeEventListener("play", handlePlay);
        videoPlayer.removeEventListener("pause", handlePause);
      }
    };
  }, [socket, roomId, movie.id]);

  // Animations on initial button click.
  useEffect(() => {
    if (!divRef.current || !commentIcon || !videoElem) return;

    if (platform === "disneyplus") {
      const disneyPlusBottomContainer = document.querySelector(
        ".btm-media-overlays-container"
      ) as HTMLElement;

      if (disneyPlusBottomContainer) {
        disneyPlusBottomContainer.style.zIndex = "1";
      }
    }

    const commonTransition = `transition: all 1s ${windowTransition};`;
    let videoElemMaxWidth = `max-width: ${
      openChatWindow ? 100 - parseInt(chatWindowSize) || 70 : 100
    }% !important;`;

    const zIndexForAha = platform === "aha" ? "z-index: 10;" : "";

    if (platform === "aha") {
      videoElemMaxWidth += `
      width: 100%;
      height: 100%;
      position: absolute;
    `;
    }

    if (openChatWindow) {
      commentIcon.style.cssText = `
      right: ${chatWindowSize}%;
      ${commonTransition}
    `;
      divRef.current.style.cssText = `
      max-width: ${chatWindowSize || 30}%;
      ${zIndexForAha}
    `;
    } else {
      commentIcon.style.cssText = `
      right: 5px;
      ${commonTransition}
    `;
      divRef.current.style.cssText = `
      max-width: 0%;
      ${zIndexForAha}
    `;
    }

    videoElem.style.cssText = `
    ${videoElemMaxWidth}
    transition: max-width 1s ${windowTransition};
    left: 0;
  `;
  }, [openChatWindow, divRef?.current, commentIcon, videoElem, platform]);

  // Drag the chat window
  useMemo(() => {
    let onMouseMoveEventListener: any;
    let dragging = false;
    const onMouseUpEventListener = (event: MouseEvent) => {
      event.stopPropagation();
      if (!divRef.current || !commentIcon) return;
      dragging = false;
      document.body.style.cursor = "default";
      const defaultChatWidth = 100 - videoWidthRef.current;
      divRef.current.style.cssText = `
          max-width: ${defaultChatWidth}%;
          transition: max-width 1s ${windowTransition};
      `;
      commentIcon.style.cssText = `
          right: ${defaultChatWidth}%;
          opacity: 1;
          transition: right 1s ${windowTransition};
      `;
      document.body.removeEventListener("mousemove", onMouseMoveEventListener);
      document.body.removeEventListener("mouseup", onMouseUpEventListener);
    };
    if (dragRef && dragRef.current) {
      dragRef.current.onmousedown = (event) => {
        event.stopPropagation();
        dragging = true;
        onMouseMoveEventListener = (e: MouseEvent) => {
          e.stopPropagation();
          if (dragging) {
            setDisplay(true);
            document.body.style.cursor = "col-resize";
            const bodyWidth = document.body.clientWidth;
            if (divRef && divRef.current && commentIcon) {
              const newWidth = bodyWidth - e.pageX - 6;
              // Sets the chat window size.
              let newChatWindowSize = (newWidth / bodyWidth) * 100;
              if (newChatWindowSize < 30) newChatWindowSize = 30;
              dispatch(sliceSetChatWindowSize(newChatWindowSize));
              divRef.current.style.cssText = `
                max-width: ${newChatWindowSize}%;
                transition: none;
              `;
              commentIcon.style.cssText = `
                right: ${newChatWindowSize}%;
                transition: none;
              `;
              if (videoElem) {
                widthRef.current = (newWidth / bodyWidth) * 100;
                videoWidthRef.current = 100 - widthRef.current;
                if (videoWidthRef.current > 70) videoWidthRef.current = 70;
                videoElem.style.cssText = `
                  max-width: ${videoWidthRef.current}% !important;
                  left: 0;
                `;
              }
            }
          }
        };
        onMouseMoveEventListener = document.body.addEventListener(
          "mousemove",
          onMouseMoveEventListener,
          { passive: true }
        );
        document.body.addEventListener("mouseup", onMouseUpEventListener, {
          once: true,
          passive: true,
        });
      };
    }
  }, [position]);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (divRef.current !== null) {
      const rect = divRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setPosition({ x, y });
    }
  };

  useEffect(() => {
    setDisplay(() => {
      if (!openChatWindow) return false;
      return true;
    });
  }, [openChatWindow]);

  const handleOutsideClick = (event: MouseEvent) => {
    const popSlide = document.querySelector(".pop-slide");
    if (popSlide && !popSlide.contains(event.target as Node)) {
      dispatch(sliceResetPopUp());
    }
  };

  useEffect(() => {
    divRef &&
      divRef.current &&
      divRef.current.addEventListener("click", handleOutsideClick);
    return () => {
      divRef &&
        divRef.current &&
        divRef.current.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  function renderAnimateMessages(videoElement: HTMLVideoElement) {
    const animateMessagesDiv = document.createElement("div");
    videoElement.parentElement.appendChild(animateMessagesDiv);
    const boot = createRoot(animateMessagesDiv);
    boot.render(
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AnimateMessages />
        </PersistGate>
      </ReduxProvider>
    );
  }

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      renderAnimateMessages(video as HTMLVideoElement);
    }
  }, []);

  return (
    <Perimeter
      id="chat-perimeter"
      className="chat-perimeter"
      thumbs={thumbs ? thumbs : ""}
      font={font}
      enableBackground={enableBackground.toString()}
      ref={divRef}
      onMouseMove={handleMouseMove}
    >
      <DragBar className="drag-bar" ref={dragRef}></DragBar>
      <ChatWindowParentComponent
        pos={pos}
        display={display}
        user={user}
        fetchingOrLoading={profileFetching || customLoading}
        profile={profile}
      />
    </Perimeter>
  );
};

export default withUrqlClient(urqlClient)(React.memo(ChatInterface));
