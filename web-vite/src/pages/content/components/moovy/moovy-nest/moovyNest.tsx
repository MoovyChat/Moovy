import React, {
  MouseEvent,
  MouseEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { IoArrowForwardCircle } from "react-icons/io5";
import ChatArea from "../../../../../components/chat-area/chatArea";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { TextAreaContainer } from "../chat-interface/chatInterface.styles";
import { Profile } from "../commentInterface/commentInterface.styles";

import {
  ChatTextBox,
  TextAreaIcon,
  TextAreaPost,
} from "../messageBox/messageBox.styles";
import { NestHeading, StyledMoovyNest, TypingStatus } from "./moovyNest.styles";
import NestChatBox from "./nest-chat-box/nestChatBox";

import { animated, useTransition } from "@react-spring/web";
import { nanoid } from "nanoid";
import { FiEdit3 } from "react-icons/fi";
import {
  MdCancel,
  MdOpenInFull,
  MdOutlineCloseFullscreen,
  MdOutlineGifBox,
  MdTagFaces,
} from "react-icons/md";
import { batch } from "react-redux";
import EmojiPicker from "../../../../../components/emoji-picker/emojiPicker";
import { SOCKET_MESSAGE_TYPES } from "../../../../../helpers/constants";
import { NEST_TYPE } from "../../../../../helpers/enums";
import {
  sliceSetIsGifOpen,
  sliceSetNestFullScreen,
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../redux/slices/nestSlice";
import {
  sliceSetIncomingMessages,
  sliceSetSocketConnectionStatus,
} from "../../../../redux/slices/socket/socketSlice";
import {
  sliceSetIsTextAreaClicked,
  sliceSetIsTextAreaFocused,
  sliceSetTextAreaMessage,
} from "../../../../redux/slices/textArea/textAreaSlice";
import { SocketContext } from "../context/socketContextFile";
import CopyToClipboard from "./copy-to-clipboard/copyToClipboard";
import Room from "./multiVideoComminication/video-chat-room/videoChatRoom";
import NestStatus from "./nest-status/nestStatus";
import NestOptionWindow from "./nest-option-window/nestOptionWindow";
import AnimatedSmileys from "./animated-smileys/animatedSmileys";
interface Props {
  ref?: any;
  style?: any;
}
const MoovyNest: React.FC<Props> = ({ ref, style }) => {
  const user = useAppSelector((state) => state.user);
  const socket = useContext(SocketContext);
  const smileyIconRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textAreaMessage = useAppSelector((state) => state.textArea.text);
  const roomId = useAppSelector((state) => state.socket.roomId);
  const roomName = useAppSelector((state) => state.socket.roomName);
  const [isSmileyOpen, openSmiley] = useState<boolean>(false);
  const isGifOpen = useAppSelector((state) => state.nest.isGifOpen);
  const [usersTyping, setUsersTyping] = useState([]);
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const isFullScreen = useAppSelector((state) => state.nest.isFullScreen);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isTextAreaFocussed = useAppSelector(
    (state) => state.textArea.isTextAreaFocused
  );
  const isNestAdmin = useAppSelector((state) => state.socket.isNestAdmin);
  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        dispatch(sliceSetSocketConnectionStatus(true));
      });

      socket.on("disconnect", () => {
        dispatch(sliceSetSocketConnectionStatus(false));
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
          roomId: roomId,
          data: {
            user,
            type: "typing",
            message: `${user.nickname} is typing...`,
          },
        });
    } else {
      socket.emit("message", {
        roomId: roomId,
        data: {
          user,
          type: "typing",
          message: "",
        },
      });
    }
  };

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let value = (e.target as HTMLInputElement).value;
      if (value) {
        socket.emit(SOCKET_MESSAGE_TYPES.ROOM_NAME_CHANGE, {
          roomId: roomId,
          data: {
            value: value,
            message: `${user.nickname} changed the nest name to ${value}`,
          },
        });
        setName(() => "");
        setIsEdit(() => false);
      }
    } else if (
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "A" && e.key <= "Z")
    ) {
      e.stopPropagation();
    }
  };

  const postMessage = (value: string) => {
    if (value) {
      let id = nanoid(10);
      socket.emit("message", {
        roomId: roomId,
        data: {
          id,
          user,
          type: "message",
          message: value,
        },
      });
      socket.emit("message", {
        roomId: roomId,
        data: {
          user,
          type: "typing",
          message: "",
        },
      });
      batch(() => {
        dispatch(sliceSetTextAreaMessage(""));
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
        dispatch(sliceSetIsTextAreaFocused(false));
        dispatch(sliceSetIsTextAreaClicked(false));
      });
      openSmiley(() => false);
      dispatch(sliceSetIsGifOpen(false));
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
      postMessage(value);
    } else if (
      (e.key >= "a" && e.key <= "z") ||
      (e.key >= "A" && e.key <= "Z")
    ) {
      e.stopPropagation();
    }
  };

  const handleInputBlur = () => {
    inputRef && inputRef.current && inputRef.current.focus;
  };

  const handleGifOpen: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetIsGifOpen(!isGifOpen));
    if (isGifOpen) {
      batch(() => {
        dispatch(sliceSetNestVisibility(false));
        dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      });
    } else {
      batch(() => {
        dispatch(sliceSetNestVisibility(true));
        dispatch(sliceSetNestType(NEST_TYPE.GIPHY));

        // When gif window opens, open other windows such as smiley window.
        openSmiley(() => false);
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        smileyIconRef.current &&
        !smileyIconRef.current.contains(event.target) &&
        !event.target.classList.contains("smiley-window")
      ) {
        openSmiley(() => false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const transitions = useTransition(isSmileyOpen, {
    from: { transform: "scale(0) translateY(0%)", borderRadius: "50%" },
    enter: { transform: "scale(1) translateY(-20%)", borderRadius: "0%" },
    leave: { transform: "scale(0) translateY(0%)", borderRadius: "50%" },
    config: {
      tension: 280,
      friction: 120,
      duration: 200,
    },
  });

  return (
    <StyledMoovyNest ref={ref}>
      <NestHeading>
        <div className="nest-heading">
          {isEdit ? (
            <div className="nest-input">
              <div className="fixed-label">Nest</div>
              <input
                ref={inputRef}
                className="nst-input"
                maxLength={25}
                defaultValue={roomName}
                value={name}
                placeholder="Name of the Nest..."
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              ></input>
            </div>
          ) : (
            <React.Fragment>
              <span>Nest: {roomName}</span>
              {isNestAdmin && (
                <FiEdit3
                  size={20}
                  onClick={() => setIsEdit(() => true)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </React.Fragment>
          )}
          <div
            className="nest-full-screen"
            onClick={() => dispatch(sliceSetNestFullScreen(!isFullScreen))}
          >
            {isFullScreen ? (
              <MdOutlineCloseFullscreen size={20} />
            ) : (
              <MdOpenInFull size={20} />
            )}
          </div>
        </div>

        <CopyToClipboard text={roomId} />
      </NestHeading>
      <Room />
      <NestChatBox />
      {transitions((style, item) =>
        item ? (
          <animated.div
            style={style}
            className="emoji-container"
            ref={containerRef}
          >
            <EmojiPicker />
          </animated.div>
        ) : null
      )}

      <TypingStatus>
        {usersTyping.length === 1 && (
          <div>{`${usersTyping[0].nickname} is typing...`}</div>
        )}
        {usersTyping.length === 2 && (
          <div>{`${usersTyping[0].nickname}, ${usersTyping[1].nickname} are typing...`}</div>
        )}
        {usersTyping.length > 2 && <div>Several users are typing...</div>}
      </TypingStatus>
      <AnimatedSmileys />
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
            <div ref={smileyIconRef} style={{ display: "flex" }}>
              <MdTagFaces
                className="smiley-window"
                size={25}
                onClick={(e) => {
                  e.stopPropagation();
                  openSmiley((isSmileyOpen) => {
                    if (!isSmileyOpen) {
                      dispatch(sliceSetNestVisibility(false));
                      dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
                    }
                    return !isSmileyOpen;
                  });
                }}
              />
            </div>

            {isGifOpen ? (
              <MdCancel
                size={25}
                onClick={handleGifOpen}
                className="giphy-gif"
              />
            ) : (
              <MdOutlineGifBox
                size={25}
                onClick={handleGifOpen}
                className="giphy-gif"
              />
            )}

            <div
              className="text-send"
              style={{ display: "flex" }}
              onClick={(e: MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();
                postMessage(textAreaMessage);
              }}
            >
              <IoArrowForwardCircle fill="#fa0000" size={25} />
            </div>
          </TextAreaPost>
        </ChatTextBox>
      </TextAreaContainer>
      <NestStatus />
      {isTextAreaFocussed && <NestOptionWindow />}
    </StyledMoovyNest>
  );
};

export default MoovyNest;
