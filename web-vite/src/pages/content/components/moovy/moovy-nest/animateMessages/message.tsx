import React, { useCallback, useEffect, useState } from "react";
import { incomingMessageInterface } from "../../../../../redux/slices/socket/socketSlice";
import { StyledMessages } from "./animateMessages.styles";
import { SOCKET_MESSAGE_TYPES } from "../../../../../../helpers/constants";
import { StyledUserMessage } from "../nest-chat-box/nestChatBox.styles";
import { useAppSelector } from "../../../../../redux/hooks";
import { containsOnlyOneEmoji } from "../../../../../../helpers/utilities";

type props = {
  message: incomingMessageInterface;
};
const Message: React.FC<props> = ({ message }) => {
  const [displayedMessage, setDisplayedMessage] =
    useState<incomingMessageInterface>(message);
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );

  useEffect(() => {
    let timer;
    if (openChatWindow) {
      timer = setTimeout(() => {
        setDisplayedMessage(null);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [openChatWindow]);

  const MessageType = useCallback(() => {
    switch (displayedMessage.type) {
      case SOCKET_MESSAGE_TYPES.MESSAGE:
        let isOnlyEmoji = containsOnlyOneEmoji(displayedMessage.message);
        const onlyEmojiClassName = isOnlyEmoji ? "one-emoji" : "";
        return (
          <StyledMessages>
            <div className="profile-pic">
              <img src={displayedMessage.user.photoUrl} alt="profile-picture" />
            </div>
            <div className={`nest-msg ${onlyEmojiClassName}`}>
              {displayedMessage.message}
            </div>
          </StyledMessages>
        );
      case SOCKET_MESSAGE_TYPES.JOIN:
        return (
          <StyledMessages>
            <div className="profile-pic">
              <img
                src={displayedMessage.user.photoUrl}
                alt="profile-picture"
                height={15}
                width={15}
              />
            </div>
            <div className="nest-msg join">
              {displayedMessage.user?.nickname} joined the room
            </div>
          </StyledMessages>
        );
      case SOCKET_MESSAGE_TYPES.LEAVE:
        return (
          <StyledMessages>
            <div className="profile-pic">
              <img
                src={displayedMessage.user?.photoUrl}
                alt="profile-picture"
              />
            </div>
            <div className="nest-msg leave">
              {displayedMessage.user?.nickname} left the room
            </div>
          </StyledMessages>
        );
      case SOCKET_MESSAGE_TYPES.GIF:
        return (
          <StyledMessages>
            <div className="profile-pic">
              <img
                src={displayedMessage.user?.photoUrl}
                alt="profile-picture"
              />
            </div>
            <div className="nest-msg gif-container">
              {(displayedMessage.message as any) && (
                <img
                  className="gif-msg"
                  src={(displayedMessage.message as any).images.downsized.url}
                  alt={(displayedMessage.message as any).title}
                />
              )}
            </div>
          </StyledMessages>
        );
      default:
        return <React.Fragment></React.Fragment>;
    }
  }, [displayedMessage]);

  return displayedMessage && <MessageType />;
};

export default Message;
