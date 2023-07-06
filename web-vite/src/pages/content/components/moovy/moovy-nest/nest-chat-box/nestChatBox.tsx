import { useEffect, useMemo, useRef } from "react";
import {
  MOOVY_NEST_GIF,
  SOCKET_MESSAGE_TYPES,
} from "../../../../../../helpers/constants";
import { useAppSelector } from "../../../../../redux/hooks";
import EmptyPage from "../../empty-page/emptyPage";
import MessageRenderer from "./messageRenderer";
import { StyledNest } from "./nestChatBox.styles";

const NestChatBox = () => {
  const showMetaData = useAppSelector((state) => state.socket.showMetaData);
  const chatWindowRef = useRef(null);
  const incomingMessages = useAppSelector(
    (state) => state.socket.incomingMessages
  );

  const messageTypeLookup = useMemo(() => {
    return incomingMessages.reduce(
      (acc, message) => ({ ...acc, [message.type]: true }),
      {}
    );
  }, [incomingMessages]);

  useEffect(() => {
    if (chatWindowRef && chatWindowRef.current) {
      const chatWindow = chatWindowRef.current;
      setTimeout(() => {
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 100);
    }
  }, [incomingMessages, chatWindowRef]);

  if (incomingMessages.length === 0)
    return (
      <EmptyPage msg="Feel free to share your thoughts!" src={MOOVY_NEST_GIF} />
    );

  return (
    <StyledNest ref={chatWindowRef}>
      {incomingMessages.map((data) => {
        if (
          !showMetaData &&
          data.type !== SOCKET_MESSAGE_TYPES.GIF &&
          data.type !== SOCKET_MESSAGE_TYPES.MESSAGE
        ) {
          return null; // skips rendering this type of message
        }
        return <MessageRenderer data={data} chatWindowRef={chatWindowRef} />;
      })}
    </StyledNest>
  );
};

export default NestChatBox;
