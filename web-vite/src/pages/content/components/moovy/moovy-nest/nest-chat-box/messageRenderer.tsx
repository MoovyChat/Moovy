import React, { useMemo } from "react";
import { SOCKET_MESSAGE_TYPES } from "../../../../../../helpers/constants";
import {
  containsOnlyOneEmoji,
  secondsToTime,
} from "../../../../../../helpers/utilities";
import { useAppSelector } from "../../../../../redux/hooks";
import { incomingMessageInterface } from "../../../../../redux/slices/socket/socketSlice";
import {
  StyledJoinLeaveMessage,
  StyledUserMessage,
} from "./nestChatBox.styles";
import GiphyImage from "./giphyImage";

interface MessageRendererInterface {
  data: incomingMessageInterface;
  chatWindowRef: React.MutableRefObject<any>;
}
const MessageRenderer: React.FC<MessageRendererInterface> = ({
  data,
  chatWindowRef,
}) => {
  const user = useAppSelector((state) => state.user);
  const containerClassName = useMemo(
    () =>
      data && data.user && user.nickname === data.user.nickname
        ? "container sender"
        : "container receiver",
    [data, user]
  );

  const isOnlyEmoji = useMemo(
    () => containsOnlyOneEmoji(data.message),
    [data.message]
  );

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
          {data.user?.nickname} <span className="moovy-create">created</span>{" "}
          the room
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
          {data.user?.nickname} <span className="moovy-join">joined</span> the
          room
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
          {data.user?.nickname} <span className="moovy-left">left</span> the
          room
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
        <div className="nest-msg">{data.user?.nickname} resumed the video</div>
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
        <div className="nest-msg">{data.user?.nickname} paused the video</div>
      </StyledJoinLeaveMessage>
    );
  } else if (data.type === SOCKET_MESSAGE_TYPES.GIF) {
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
                  <GiphyImage
                    message={data.message as any}
                    onLoad={() => {
                      const chatWindow = chatWindowRef.current;
                      chatWindow.scrollTop = chatWindow.scrollHeight;
                    }}
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
                  <GiphyImage
                    message={data.message as any}
                    onLoad={() => {
                      const chatWindow = chatWindowRef.current;
                      chatWindow.scrollTop = chatWindow.scrollHeight;
                    }}
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
    const onlyEmojiClassName = isOnlyEmoji ? "one-emoji" : "";
    return (
      <StyledUserMessage isUser={user.nickname === data.user?.nickname}>
        {data && data.user && user.nickname !== data.user.nickname ? (
          <React.Fragment>
            <div className="profile-pic">
              <img src={data.user.photoUrl} alt="profile-picture" />
            </div>
            <div className={`${containerClassName} ${onlyEmojiClassName}`}>
              {!isOnlyEmoji && (
                <div className="username">{data.user.nickname}</div>
              )}
              <div className="nest-msg">{data.message}</div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={`${containerClassName} ${onlyEmojiClassName}`}>
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
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default MessageRenderer;
