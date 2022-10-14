import React, { useEffect, useRef } from 'react';
import { darkTheme, lightTheme } from '../../theme/theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ChatInterface from '../../components/chatInterface/chatInterface';
import { GlobalStyles } from '../../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { getPlayerViewElement } from '../contentScript.utils';
import { sliceSetChatWindowSize } from '../../redux/slices/settings/settingsSlice';
import useFetchEmojis from '../hooks/useFetchEmojis';
import { useMousePosition } from '../hooks/useMouseMove';

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
  const theme = useAppSelector((state) => state.settings.theme);
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

export default ChatWindow;
