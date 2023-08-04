import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../../../redux/hooks";
import { StyledAnimatedMessages } from "./animateMessages.styles";
import Message from "./message";
import { incomingMessageInterface } from "../../../../../redux/slices/socket/socketSlice";
import AnimateSmiley from "./animateSmiley";

interface DisplayedMessages {
  [key: string]: incomingMessageInterface;
}

const AnimateMessages = () => {
  const messages = useAppSelector((state) => state.socket.incomingMessages);
  const platform = useAppSelector((state) => state.movie.platform);
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );
  const [displayedMessages, setDisplayedMessages] = useState<DisplayedMessages>(
    {}
  );
  const [lastAddedMessage, setLastAddedMessage] =
    useState<incomingMessageInterface | null>(null);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const clearMessages = () => {
    setDisplayedMessages({});
  };

  useEffect(() => {
    const latestMessage = messages[messages.length - 1];
    if (latestMessage !== lastAddedMessage) {
      const timestamp = new Date().getTime().toString();
      setDisplayedMessages((prev) => ({
        ...prev,
        [timestamp]: latestMessage,
      }));
      setLastAddedMessage(latestMessage);

      // Clear any existing timer
      if (timer.current) {
        clearTimeout(timer.current);
      }

      // Start a new timer
      timer.current = setTimeout(clearMessages, 3000);

      // Cleanup
      return () => {
        if (timer.current) {
          clearTimeout(timer.current);
        }
      };
    }
  }, [messages]); // notice that we removed displayedMessages from the dependencies

  return (
    <StyledAnimatedMessages zIndex={platform === "hbomax" ? 0 : 1}>
      {!openChatWindow &&
        Object.values(displayedMessages).map((message, index) =>
          message ? <Message key={index} message={message} /> : null
        )}
      <AnimateSmiley />
    </StyledAnimatedMessages>
  );
};

export default AnimateMessages;
