import React, { useCallback, useEffect, useMemo, useRef } from "react";

import { ThemeProvider } from "styled-components";

import useFetchEmojis from "../hooks/useFetchEmojis";
import { withUrqlClient } from "next-urql";
import ChatInterface from "../../../../../components/chat-interface/chatInterface";
import {
  Profile,
  useGetUserProfileQuery,
} from "../../../../../generated/graphql";
import { urqlClient } from "../../../../../helpers/urql/urqlClient";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { sliceSetNewlyLoadedTimeStamp } from "../../../../redux/slices/movie/movieSlice";
import { GlobalStyles } from "../../../theme/globalStyles";
import { lightTheme, darkTheme } from "../../../theme/theme";

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

  // Initialize the emojiDB
  useFetchEmojis();

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
