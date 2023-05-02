import React from "react";
import Toast from "../../../../../components/toast/toast";
import ToxicityMessage from "../../../../../components/toxicity-message/toxicityMessage";
import { CommentInfo } from "../../../../../helpers/interfaces";
import { TextAreaContainer } from "../chat-interface/chatInterface.styles";
import ChatBox from "../chatBox/chatBox";
import MessageBox from "../messageBox/messageBox";
import { StyledGlobalChat } from "./gloablChat.styles";

interface Props {
  replyWindowResponse: CommentInfo;
  setReplyClickResponse: React.Dispatch<React.SetStateAction<CommentInfo>>;
  responseFromReplyWindow: (comment: CommentInfo) => void;
  ref: any;
  style?: any;
}
const GlobalChat: React.FC<Props> = ({
  replyWindowResponse,
  setReplyClickResponse,
  responseFromReplyWindow,
  ref,
  style,
}) => {
  return (
    <StyledGlobalChat ref={ref}>
      <TextAreaContainer
        className="text-area-container"
        onClick={(e) => e.stopPropagation()}
      >
        <MessageBox
          replyWindowResponse={replyWindowResponse}
          setReplyClickResponse={setReplyClickResponse}
        />
      </TextAreaContainer>
      <ToxicityMessage />
      <ChatBox
        responseFromReplyWindow={responseFromReplyWindow}
        type="comment"
      />
      <Toast />
    </StyledGlobalChat>
  );
};

export default GlobalChat;
