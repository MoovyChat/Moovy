import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { StyledMoovyNest, TypingStatus } from "./moovyNest.styles";
import { TextAreaContainer } from "../chat-interface/chatInterface.styles";
import ChatArea from "../../../../../components/chat-area/chatArea";
import {
  ChatTextBox,
  TextAreaIcon,
  TextAreaPost,
} from "../messageBox/messageBox.styles";
import { Profile } from "../commentInterface/commentInterface.styles";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { IoArrowForwardCircle } from "react-icons/io5";
import NestChatBox from "./nest-chat-box/nestChatBox";

import { SOCKET_MESSAGE_TYPES } from "../../../../../helpers/constants";
import { sliceSetIncomingMessages } from "../../../../redux/slices/socket/socketSlice";
import { sliceSetTextAreaMessage } from "../../../../redux/slices/textArea/textAreaSlice";
import NestStatus from "./nest-status/nestStatus";
import { SocketContext } from "../context/socketContextFile";
import Room from "./multiVideoComminication/video-chat-room/videoChatRoom";

interface Props {
  ref: any;
  style?: any;
}
const MoovyNest: React.FC<Props> = ({ ref, style }) => {
  const user = useAppSelector((state) => state.user);
  const socket = useContext(SocketContext);
  const [roomUsers, setRoomUsers] = useState([]);
  const [usersTyping, setUsersTyping] = useState([]);
  const dispatch = useAppDispatch();
  const [isConnected, setIsConnected] = useState(false);
  const accessCamera = useAppSelector((state) => state.socket.accessCamera);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log("Connected:", socket.connected); // true when connected
        setIsConnected(() => true);
      });

      socket.on("disconnect", () => {
        console.log("Connected:", socket.connected); // false when disconnected
        setIsConnected(() => false);
      });

      socket.emit("joinRoom", "test", user);

      socket.on("roomUsers", (users) => {
        setRoomUsers(() => users);
      });

      socket.on("message", (incomingMessage) => {
        const { type } = incomingMessage;
        if (type !== SOCKET_MESSAGE_TYPES.TYPING) {
          dispatch(sliceSetIncomingMessages(incomingMessage));
        } else {
          // Check if the incoming typing message is from the current user
          if (incomingMessage.user.id !== user.id) {
            setUsersTyping((prevUsersTyping) => {
              const existingUserIndex = prevUsersTyping.findIndex(
                (u) => u.id === incomingMessage.user.id
              );

              if (incomingMessage.message === "" && existingUserIndex > -1) {
                return prevUsersTyping.filter(
                  (u) => u.id !== incomingMessage.user.id
                );
              } else if (
                incomingMessage.message !== "" &&
                existingUserIndex === -1
              ) {
                return [...prevUsersTyping, incomingMessage.user];
              }

              return prevUsersTyping;
            });
          }
        }
      });

      return () => {
        if (socket) {
          // socket.close(); This will permanently close the socket. User will have to create a new socket connection.
          socket.off("connect");
          socket.off("disconnect");
          socket.off("roomUsers");
          socket.off("message");
        }
      };
    }
  }, [socket]);

  const handleInputChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    const text = e.target.value;
    dispatch(sliceSetTextAreaMessage(text));
    if (text) {
      socket &&
        socket.emit("message", {
          roomId: "test",
          data: {
            user,
            type: "typing",
            message: `${user.nickname} is typing...`,
          },
        });
    } else {
      socket.emit("message", {
        roomId: "test",
        data: {
          user,
          type: "typing",
          message: "",
        },
      });
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.stopPropagation();
      e.isPropagationStopped();
    } else if (e.key === "Enter") {
      e.preventDefault();
      let value = (e.target as HTMLTextAreaElement).value;
      if (value) {
        socket.emit("message", {
          roomId: "test",
          data: {
            user,
            type: "message",
            message: value,
          },
        });
        socket.emit("message", {
          roomId: "test",
          data: {
            user,
            type: "typing",
            message: "",
          },
        });
        dispatch(sliceSetTextAreaMessage(""));
      }
    } else if (
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "A" && e.key <= "Z")
    ) {
      e.stopPropagation();
    }
  };

  const leaveButtonHandler = () => {
    socket.emit("leaveRoom");
  };

  return (
    <StyledMoovyNest ref={ref}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
          fontSize: "12px",
          fontWeight: "600",
          opacity: "0.8",
        }}
      >
        Welcome to MoovyNest!
      </div>
      <Room />
      <NestChatBox />
      <TypingStatus>
        {usersTyping.length === 1 && (
          <div>{`${usersTyping[0].nickname} is typing...`}</div>
        )}
        {usersTyping.length === 2 && (
          <div>{`${usersTyping[0].nickname}, ${usersTyping[1].nickname} are typing...`}</div>
        )}
        {usersTyping.length > 2 && <div>Several users are typing...</div>}
      </TypingStatus>

      <TextAreaContainer
        className="text-area-container"
        onClick={(e) => e.stopPropagation()}
      >
        <ChatTextBox className="chat-text-box" isReply={false}>
          <TextAreaIcon className="text-area-icon">
            <Profile profilePic={user?.photoUrl}></Profile>
          </TextAreaIcon>
          <ChatArea
            handleKeyDown={handleKeyDown}
            handleInputChange={handleInputChange}
          />
          <TextAreaPost>
            <div
              className="text-send"
              onClick={(e: MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <IoArrowForwardCircle fill="#fa0000" size={25} />
            </div>
          </TextAreaPost>
        </ChatTextBox>
      </TextAreaContainer>
      <NestStatus users={roomUsers} leaveButtonHandler={leaveButtonHandler} />
    </StyledMoovyNest>
  );
};

export default MoovyNest;
