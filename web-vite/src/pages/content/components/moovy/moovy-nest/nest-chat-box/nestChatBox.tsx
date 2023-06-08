import React, { useEffect, useRef } from "react";
import {
  StyledJoinLeaveMessage,
  StyledNest,
  StyledUserMessage,
} from "./nestChatBox.styles";
import EmptyPage from "../../empty-page/emptyPage";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  MOOVY_NEST_GIF,
  SOCKET_MESSAGE_TYPES,
} from "../../../../../../helpers/constants";
import {
  containsOnlyOneEmoji,
  secondsToTime,
} from "../../../../../../helpers/utilities";
import {
  sliceSetJoinedRoom,
  sliceSetRoomId,
} from "../../../../../redux/slices/socket/socketSlice";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../helpers/enums";

const NestChatBox = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const chatWindowRef = useRef(null);
  const incomingMessages = useAppSelector(
    (state) => state.socket.incomingMessages
  );

  useEffect(() => {
    if (chatWindowRef && chatWindowRef.current) {
      const chatWindow = chatWindowRef.current;
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [incomingMessages, chatWindowRef]);

  if (incomingMessages.length === 0)
    return (
      <EmptyPage msg="Feel free to share your thoughts!" src={MOOVY_NEST_GIF} />
    );
  return (
    <StyledNest ref={chatWindowRef}>
      {incomingMessages.map((data) => {
        if (data.type === SOCKET_MESSAGE_TYPES.CREATE) {
          return (
            <StyledJoinLeaveMessage>
              <div className="profile-pic">
                <img
                  src={data.user.photoUrl}
                  alt="profile-picture"
                  height={15}
                  width={15}
                />
              </div>
              <div className="nest-msg">
                {data.user?.nickname}{" "}
                <span className="moovy-create">created</span> the room
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.JOIN) {
          return (
            <StyledJoinLeaveMessage>
              <div className="profile-pic">
                <img
                  src={data.user.photoUrl}
                  alt="profile-picture"
                  height={15}
                  width={15}
                />
              </div>
              <div className="nest-msg">
                {data.user?.nickname} <span className="moovy-join">joined</span>{" "}
                the room
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.LEAVE) {
          return (
            <StyledJoinLeaveMessage>
              <div className="profile-pic">
                <img src={data.user?.photoUrl} alt="profile-picture" />
              </div>
              <div className="nest-msg">
                {data.user?.nickname} <span className="moovy-left">left</span>{" "}
                the room
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.SEEK_TIME) {
          return (
            <StyledJoinLeaveMessage>
              <div className="profile-pic">
                <img src={data.user?.photoUrl} alt="profile-picture" />
              </div>
              <div className="nest-msg">
                {data.user?.nickname} seeked the time to{" "}
                {secondsToTime(data.seekTime)}
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.PLAY) {
          return (
            <StyledJoinLeaveMessage>
              <div className="profile-pic">
                <img src={data.user?.photoUrl} alt="profile-picture" />
              </div>
              <div className="nest-msg">
                {data.user?.nickname} resumed the video
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (
          data.type === SOCKET_MESSAGE_TYPES.URL_CHANGE ||
          data.type === SOCKET_MESSAGE_TYPES.KICK
        ) {
          return (
            <StyledJoinLeaveMessage>
              <div className="nest-msg">{data.message}</div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.PAUSE) {
          return (
            <StyledJoinLeaveMessage>
              <div className="profile-pic">
                <img src={data.user?.photoUrl} alt="profile-picture" />
              </div>
              <div className="nest-msg">
                {data.user?.nickname} paused the video
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.GIF) {
          const containerClassName =
            data && data.user && user.nickname === data.user.nickname
              ? "container sender"
              : "container receiver";
          return (
            <StyledUserMessage isUser={user.nickname === data.user?.nickname}>
              {data && data.user && user.nickname !== data.user.nickname ? (
                <React.Fragment>
                  <div className="profile-pic">
                    <img src={data.user.photoUrl} alt="profile-picture" />
                  </div>
                  <div className={`${containerClassName} gif-container`}>
                    <div className="nest-gif">
                      {(data.message as any) && (
                        <img
                          className="gif-msg"
                          src={(data.message as any).images.downsized.url}
                          alt={(data.message as any).title}
                        />
                      )}
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className={`${containerClassName} gif-container`}>
                    <div className="nest-gif">
                      {(data.message as any) && (
                        <img
                          className="gif-msg"
                          src={(data.message as any).images.downsized.url}
                          alt={(data.message as any).title}
                        />
                      )}
                    </div>
                  </div>
                  <div className="profile-pic">
                    <img src={data.user.photoUrl} alt="profile-picture" />
                  </div>
                </React.Fragment>
              )}
            </StyledUserMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.MESSAGE) {
          const containerClassName =
            data && data.user && user.nickname === data.user.nickname
              ? "container sender"
              : "container receiver";
          let isOnlyEmoji = containsOnlyOneEmoji(data.message);
          const onlyEmojiClassName = isOnlyEmoji ? "one-emoji" : "";
          return (
            <StyledUserMessage isUser={user.nickname === data.user?.nickname}>
              {data && data.user && user.nickname !== data.user.nickname ? (
                <React.Fragment>
                  <div className="profile-pic">
                    <img src={data.user.photoUrl} alt="profile-picture" />
                  </div>
                  <div
                    className={`${containerClassName} ${onlyEmojiClassName}`}
                  >
                    {!isOnlyEmoji && (
                      <div className="username">{data.user.nickname}</div>
                    )}
                    <div className="nest-msg">{data.message}</div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div
                    className={`${containerClassName} ${onlyEmojiClassName}`}
                  >
                    {!isOnlyEmoji && (
                      <div className="username">{data.user.nickname}</div>
                    )}
                    <div className="nest-msg">{data.message}</div>
                  </div>
                  <div className="profile-pic">
                    <img src={data.user.photoUrl} alt="profile-picture" />
                  </div>
                </React.Fragment>
              )}
            </StyledUserMessage>
          );
        } else return <React.Fragment></React.Fragment>;
      })}
    </StyledNest>
  );
};

export default NestChatBox;
