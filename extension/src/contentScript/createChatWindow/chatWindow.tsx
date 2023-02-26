import React, { useEffect, useRef } from 'react';
import { darkTheme, lightTheme } from '../../theme/theme';

import ChatInterface from '../../components/chat-interface/chatInterface';
import { GlobalStyles } from '../../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { urqlClient } from '../../Utils/urqlClient';
import { useAppSelector } from '../../redux/hooks';
import useFetchEmojis from '../hooks/useFetchEmojis';
import { withUrqlClient } from 'next-urql';

// Chat window component -> Renders ChatInterface component.
const ChatWindow = () => {
  // Redux: App selector hooks.
  // Settings: chatWindowSize, openChatWindow,
  // Movie
  const user = useAppSelector((state) => state.user);
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );
  // React: useState hook.
  const theme = useAppSelector((state) => state.misc.theme);
  // React: useRef hook.
  const divRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const videoWidthRef = useRef<number>(100);
  const widthRef = useRef<number>(0);

  // Initialize the emojiDB
  useFetchEmojis();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <React.Fragment>
          <GlobalStyles />
          <ChatInterface
            divRef={divRef}
            dragRef={dragRef}
            widthRef={widthRef}
            videoWidthRef={videoWidthRef}
            openChatWindow={openChatWindow}
            user={user}
          />
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default withUrqlClient(urqlClient)(ChatWindow);
