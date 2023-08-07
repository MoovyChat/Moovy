import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChatWindowParent } from "./chatInterface.styles";
import { useAppSelector } from "../../../../redux/hooks";
import Intro from "../intro/intro";
import ChatTitle from "../../../../../components/chat-title/chatTitle";
import ChatStats from "../chatStats/chatStats";
import { animated, useTransition } from "@react-spring/web";
import GlobalChat from "../global-chat/globalChat";
import NestLogin from "../moovy-nest/nest-login/nestLogin";
import { CommentInfo, User } from "../../../../../helpers/interfaces";
import { CSSTransition } from "react-transition-group";
import PopSlide from "../../../../../components/pop-slide/popSlide";
import SnackBar from "../moovy-nest/nest-popup/snack-bar/snackBar";
import Tooltip from "../../../../../components/tooltip/tooltip";
import LogoLoading from "../../../../../components/logo-loading/logoLoading";
import ErrorPage from "../../../../../components/error-page/errorPage";
import UpdateProfile from "../update-profile/updateProfile";
import {
  Profile,
  useGetAllVersionsQuery,
  useGetVersionNumberQuery,
} from "../../../../../generated/graphql";
import UpdateNeeded from "../../../../../components/update-needed/updateNeeded";

interface ParentProps {
  pos: { x: number; y: number };
  display: boolean;
  user: User;
  fetchingOrLoading: boolean;
  profile: Profile;
}

const ChatWindowParentComponent: React.FC<ParentProps> = ({
  pos,
  display,
  user,
  fetchingOrLoading,
  profile,
}) => {
  const isNestFullScreen = useAppSelector((state) => state.nest.isFullScreen);
  const { loading, settings } = useAppSelector((state) => state);
  const { isPopSlideOpen } = settings;
  const chatMode = useAppSelector((state) => state.settings.chatMode);
  const globalChatRef = useRef(null);
  const moovyNestRef = useRef(null);
  const { networkError, isMovieLoaded, isMovieInsertionFinished } = loading;
  const [hasShownIntro, setHasShownIntro] = useState(
    localStorage.getItem("hasShownIntro") === "true"
  );
  const [updateNeeded, setUpdateNeeded] = useState(false);
  const isProfileNeedsToBeUpdated = useAppSelector(
    (state) => state.misc.isProfileNeedsToBeUpdated
  );
  const transitions = useTransition(chatMode, {
    key: chatMode,
    unique: true,
    from: {
      opacity: 0,
      transform:
        chatMode === "global"
          ? "translate3d(-100%, 0, 0)"
          : "translate3d(100%, 0, 0)",
      width: "0%",
      display: "none",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      width: "100%",
      display: chatMode === "global" ? "flex" : "block",
      overflow: "hidden",
    },
    leave: {
      opacity: 0,
      transform:
        chatMode === "global"
          ? "translate3d(100%, 0, 0)"
          : "translate3d(-100%, 0, 0)",
      width: "0%",
      display: "none",
    },
  });
  const [replyWindowResponse, setReplyClickResponse] = useState<CommentInfo>();
  const AnimatedGlobalChat = animated(GlobalChat);
  const AnimatedMoovyNest = animated(NestLogin);
  const responseFromReplyWindow = useCallback((comment: CommentInfo) => {
    setReplyClickResponse(comment);
  }, []);
  const [vn] = useGetVersionNumberQuery();
  const [currentVersion, setCurrentVersion] = useState<string>("");
  const [latestVersion, setLatestVersion] = useState<string>("");
  const [releaseNotes, setReleaseNotes] = useState<string>("");
  useEffect(() => {
    const { data, fetching } = vn;
    if (data && !fetching) {
      const updatedVersion = vn.data.getVersionNumber.version;
      setLatestVersion(() => updatedVersion);
      setCurrentVersion(() => chrome.runtime.getManifest().version);
      setReleaseNotes(() => vn.data.getVersionNumber.notes);
      const isMandatory = vn.data.getVersionNumber.mandatory;
      if (chrome.runtime.getManifest().version !== updatedVersion)
        isMandatory && setUpdateNeeded(true);
    }
  }, [vn]);

  useLayoutEffect(() => {
    if (chatMode === "global") {
      if (moovyNestRef && moovyNestRef.current)
        moovyNestRef.current.style.display = "none";
    } else {
      if (globalChatRef && globalChatRef.current)
        globalChatRef.current.style.display = "none";
    }
  }, [chatMode, globalChatRef, moovyNestRef]);

  if (updateNeeded) {
    return (
      <UpdateNeeded
        currentVersion={currentVersion}
        latestVersion={latestVersion}
        releaseNotes={releaseNotes}
      />
    );
  }

  if (!user)
    return (
      <ErrorPage
        text={`Login using the extension, and click on Refetch`}
      ></ErrorPage>
    );
  if (isProfileNeedsToBeUpdated) return <UpdateProfile profile={profile} />;
  if (
    !isMovieLoaded ||
    !isMovieInsertionFinished ||
    networkError ||
    fetchingOrLoading
  )
    return <LogoLoading />;

  return (
    <ChatWindowParent
      className="chat-interface"
      onClick={(e) => e.stopPropagation()}
      windowOpened={display}
    >
      <React.Fragment>
        {!hasShownIntro && <Intro />}
        {!isNestFullScreen && <ChatTitle />}
        {!isNestFullScreen && <ChatStats />}
        {transitions((style, item) => (
          <animated.div style={{ ...style, width: "100%", height: "100%" }}>
            {item === "global" ? (
              <AnimatedGlobalChat
                replyWindowResponse={replyWindowResponse}
                responseFromReplyWindow={responseFromReplyWindow}
                setReplyClickResponse={setReplyClickResponse}
                ref={globalChatRef}
                style={style}
              />
            ) : (
              <AnimatedMoovyNest ref={moovyNestRef} style={style} />
            )}
          </animated.div>
        ))}
      </React.Fragment>
      <CSSTransition
        in={isPopSlideOpen}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PopSlide />
        </div>
      </CSSTransition>
      <Tooltip left={pos.x} top={pos.y} />
      <SnackBar />
    </ChatWindowParent>
  );
};

export default ChatWindowParentComponent;
