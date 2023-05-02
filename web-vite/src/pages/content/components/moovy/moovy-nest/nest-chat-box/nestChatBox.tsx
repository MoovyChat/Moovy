import React, { useEffect, useRef } from "react";
import {
  StyledJoinLeaveMessage,
  StyledNest,
  StyledUserMessage,
} from "./nestChatBox.styles";
import EmptyPage from "../../empty-page/emptyPage";
import { useAppSelector } from "../../../../../redux/hooks";
import { SOCKET_MESSAGE_TYPES } from "../../../../../../helpers/constants";

const NestChatBox = () => {
  const user = useAppSelector((state) => state.user);
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
    return <EmptyPage msg="Feel free to share your thoughts!" />;
  return (
    <StyledNest ref={chatWindowRef}>
      {incomingMessages.map((data) => {
        if (data.type === SOCKET_MESSAGE_TYPES.JOIN) {
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
                {data.user.nickname} <span className="moovy-join">joined</span>{" "}
                the room
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.LEAVE) {
          return (
            <StyledJoinLeaveMessage>
              <div className="profile-pic">
                <img src={data.user.photoUrl} alt="profile-picture" />
              </div>
              <div className="nest-msg">
                {data.user.nickname} <span className="moovy-left">left</span>{" "}
                the room
              </div>
            </StyledJoinLeaveMessage>
          );
        } else if (data.type === SOCKET_MESSAGE_TYPES.MESSAGE) {
          const containerClassName =
            user.nickname === data.user.nickname
              ? "container sender"
              : "container receiver";
          return (
            <StyledUserMessage isUser={user.nickname === data.user.nickname}>
              {user.nickname !== data.user.nickname ? (
                <React.Fragment>
                  <div className="profile-pic">
                    <img src={data.user.photoUrl} alt="profile-picture" />
                  </div>
                  <div className={containerClassName}>
                    <div className="username">{data.user.nickname}</div>
                    <div className="nest-msg">{data.message}</div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className={containerClassName}>
                    <div className="username">{data.user.nickname}</div>
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
