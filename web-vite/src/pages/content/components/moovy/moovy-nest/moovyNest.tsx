import React, { MouseEvent, useEffect, useState } from "react";
import { StyledMoovyNest } from "./moovyNest.styles";
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
import { io, Socket } from "socket.io-client";
import {
  SOCKET_MESSAGE_TYPES,
  SOCKET_URL,
} from "../../../../../helpers/constants";
import {
  sliceSetIncomingMessages,
  sliceSetUserTyping,
} from "../../../../redux/slices/socket/socketSlice";
import { sliceSetTextAreaMessage } from "../../../../redux/slices/textArea/textAreaSlice";
import NestStatus from "./nest-status/nestStatus";

interface Props {
  ref: any;
  style?: any;
}
const MoovyNest: React.FC<Props> = ({ ref, style }) => {
  const user = useAppSelector((state) => state.user);
  const [roomUsers, setRoomUsers] = useState([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const dispatch = useAppDispatch();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newSocket = io(SOCKET_URL); // Replace with your server URL
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected:", newSocket.connected); // true when connected
      setIsConnected(() => true);
    });

    newSocket.on("disconnect", () => {
      console.log("Connected:", newSocket.connected); // false when disconnected
      setIsConnected(() => false);
    });

    newSocket.emit("joinRoom", "test", user); // Replace 'your-room-id' with a unique room identifier

    newSocket.on("roomUsers", (users) => {
      setRoomUsers(() => users);
    });

    newSocket.on("message", (incomingMessage) => {
      console.log("Received message from socket: ", incomingMessage);
      const { type, message } = incomingMessage;
      if (type !== SOCKET_MESSAGE_TYPES.TYPING) {
        dispatch(sliceSetIncomingMessages(incomingMessage));
      } else {
        dispatch(sliceSetUserTyping(message));
      }
    });

    return () => {
      newSocket.close();
    };
  }, []);

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
      socket.emit("message", {
        roomId: "test",
        data: {
          user,
          type: "typing",
          message: `${user.nickname} is typing...`,
        },
      });
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
      <NestChatBox />
      <TextAreaContainer
        className="text-area-container"
        onClick={(e) => e.stopPropagation()}
      >
        <ChatTextBox className="chat-text-box" isReply={false}>
          <TextAreaIcon className="text-area-icon">
            <Profile profilePic={user?.photoUrl}></Profile>
          </TextAreaIcon>
          <ChatArea handleKeyDown={handleKeyDown} />
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
      {isConnected && (
        <NestStatus users={roomUsers} leaveButtonHandler={leaveButtonHandler} />
      )}
    </StyledMoovyNest>
  );
};

export default MoovyNest;
