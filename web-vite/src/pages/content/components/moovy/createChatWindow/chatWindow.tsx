import React, { useEffect, useMemo, useRef } from "react";

import { ThemeProvider } from "styled-components";

import { withUrqlClient } from "next-urql";
import {
  Profile,
  useGetUserProfileQuery,
} from "../../../../../generated/graphql";
import { urqlClient } from "../../../../../helpers/urql/urqlClient";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  sliceSetNewlyLoadedTimeStamp,
  sliceSetPlatform,
} from "../../../../redux/slices/movie/movieSlice";
import { GlobalStyles } from "../../../theme/globalStyles";
import { darkTheme, lightTheme } from "../../../theme/theme";
import ChatInterface from "../chat-interface/chatInterface";
import useFetchEmojis from "../hooks/useFetchEmojis";
import { useSocketEvents } from "../hooks/useSocketEvents";
import { getVideoPlatform } from "../contentScript.utils";

// Chat window component -> Renders ChatInterface component.
const ChatWindow = () => {
  // Redux: App selector hooks.
  // Settings: chatWindowSize, openChatWindow,
  // Movie
  const { openChatWindow } = useAppSelector((state) => state.settings);
  const { theme } = useAppSelector((state) => state.misc);
  const user = useAppSelector((state) => state.user);
  const dragRef = useRef<HTMLDivElement | null>(null);
  const videoWidthRef = useRef<number>(100);
  const widthRef = useRef<number>(0);
  const profileRef = useRef<Profile | null | undefined>(null);
  const [profile] = useGetUserProfileQuery({
    variables: {
      uid: user?.id,
    },
  });
  const dispatch = useAppDispatch();

  useMemo(() => {
    dispatch(sliceSetNewlyLoadedTimeStamp(new Date().getTime().toString()));
  }, []);

  useEffect(() => {
    const { data, fetching } = profile;
    if (!fetching && data) {
      const _data = data.getUserProfile;
      const _profile = _data as Profile | null | undefined;
      profileRef.current = _profile;
    }
  }, [profile]);

  useEffect(() => {
    const url = window.location.href;
    const platform = getVideoPlatform(url);
    dispatch(sliceSetPlatform(platform));
  }, []);

  // Initialize the emojiDB
  /* `useFetchEmojis()` is a custom hook that initializes the emoji database. It fetches the emoji data
  from a JSON file and stores it in the Redux store for use in the chat interface. This hook is
  called once when the component mounts. */
  useFetchEmojis();

  /* `useSocketEvents(user)` is a custom hook that handles various socket events related to the chat
  room. It takes in the `user` object as a parameter and sets up event listeners for socket events
  such as `join-room`, `leave-room`, `new-message`, `user-joined`, `user-left`, `room-deleted`,
  `room-updated`, `room-visibility-updated`, `room-name-updated`, `room-public-status-updated`,
  `room-nests-updated`, `room-nest-visibility-updated`, `room-nest-type-updated`,
  `room-joined-users-updated`, `room-joined`, `room-left`, `socket-disconnect`, and
  `socket-reconnect`. These events are used to update the Redux store with the latest information
  about the chat room and its users, and to handle various actions such as sending and receiving
  messages, updating room settings, and handling user presence. */
  useSocketEvents(user);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <React.Fragment>
          <GlobalStyles />
          <ChatInterface
            dragRef={dragRef}
            widthRef={widthRef}
            videoWidthRef={videoWidthRef}
            openChatWindow={openChatWindow}
            user={user}
            profile={profileRef.current}
            profileFetching={profile.fetching}
          />
        </React.Fragment>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default withUrqlClient(urqlClient)(React.memo(ChatWindow));
