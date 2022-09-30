import { Movie, globalUIStyles } from '../../Utils/interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { darkTheme, lightTheme } from '../../theme/theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ChatInterface from '../../components/chatInterface/chatInterface';
import { GlobalStyles } from '../../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { getPlayerViewElement } from '../contentScript.utils';
import { getStoredGlobalUIStyles } from '../../Utils/storage';
import { sliceSetChatWindowSize } from '../../redux/slices/settings/settingsSlice';
import { useMousePosition } from '../hooks/useMouseMove';

// Chat window component -> Renders ChatInterface component.
const ChatWindow = () => {
  // Redux: App selector hooks.
  // Settings: chatWindowSize, openChatWindow,
  // Movie
  const user = useAppSelector((state) => state.user);
  const chatWindowSize = useAppSelector(
    (state) => state.settings.chatWindowSize
  );
  const openChatWindow = useAppSelector(
    (state) => state.settings.openChatWindow
  );
  // Redux: App dispatch hook.
  const dispatch = useAppDispatch();
  // Custom: useMousePosition hook.
  const position = useMousePosition();
  // React: useState hook.
  const [globalStyles, setGlobalStyles] = useState<globalUIStyles>();
  const theme = useAppSelector((state) => state.settings.theme);
  // React: useRef hook.
  const divRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const videoWidthRef = useRef<number>(100);
  const widthRef = useRef<number>(0);

  useEffect(() => {
    getStoredGlobalUIStyles().then((styles) => setGlobalStyles(styles));
  }, [globalStyles]);

  // Drag the chat window.
  useEffect(() => {
    let onMouseMoveEventListener: any;
    let onMouseUpEventListener: any;
    let dragging = false;
    onMouseUpEventListener = (event: MouseEvent) => {
      event.stopPropagation();
      dragging = false;
      document.body!.style.cursor = 'default';
      document.body.removeEventListener('mousemove', onMouseMoveEventListener);
      document.body.removeEventListener('mouseup', onMouseUpEventListener);
    };
    if (dragRef.current) {
      dragRef.current!.onmousedown = (event) => {
        event.stopPropagation();
        dragging = true;
        onMouseMoveEventListener = (e: MouseEvent) => {
          e.stopPropagation();
          if (dragging) {
            // Sets the dragBar position.
            document.body!.style.cursor = 'col-resize';
            dragRef.current!.style.left = `${e.pageX + 2}px`;
            let videoElem = getPlayerViewElement();
            let bodyWidth = document.body!.clientWidth;

            if (divRef) {
              let newWidth = bodyWidth - e.pageX - 6;
              // Sets the chat window size.
              dispatch(sliceSetChatWindowSize((newWidth / bodyWidth) * 100));
              if (videoElem) {
                widthRef.current = (newWidth / bodyWidth) * 100;
                videoWidthRef.current = 100 - widthRef.current;
              }
            }
          }
        };
        onMouseMoveEventListener = document.body.addEventListener(
          'mousemove',
          onMouseMoveEventListener,
          { passive: true }
        );
        document.body.addEventListener('mouseup', onMouseUpEventListener, {
          once: true,
          passive: true,
        });
      };
    }
  }, [position.x, position.y]);

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
            chatWindowSize={chatWindowSize}
          />
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default ChatWindow;
