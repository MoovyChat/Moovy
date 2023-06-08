import React, { useCallback, useContext, useEffect, useState } from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import {
  GIPHY_API_KEY,
  GIPHY_LOGO,
} from "../../../../../../../helpers/constants";
import { StyledGiphy } from "./giphy.styles";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { SocketContext } from "../../../context/socketContextFile";
import { nanoid } from "nanoid";
import { IGif } from "@giphy/js-types";
import { batch } from "react-redux";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../../helpers/enums";
import { sliceSetTextAreaMessage } from "../../../../../../redux/slices/textArea/textAreaSlice";

const Giphy = () => {
  const gf = new GiphyFetch(GIPHY_API_KEY);
  const socket = useContext(SocketContext);
  const textAreaText = useAppSelector((state) => state.textArea.text);
  const movieTitle = useAppSelector((state) => state.movie?.name);
  const roomId = useAppSelector((state) => state.socket.roomId);
  const movieParentName = useAppSelector(
    (state) => state.movie?.parentTitleName
  );
  const user = useAppSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState(
    movieParentName ? `${movieParentName}` : `${movieTitle}`
  );
  const dispatch = useAppDispatch();

  const fetchGifs = (offset: number) =>
    textAreaText === ""
      ? gf.search(searchQuery, { offset, limit: 10 })
      : gf.search(textAreaText, { offset, limit: 10 });

  useEffect(() => {
    setSearchQuery(movieParentName ? `${movieParentName}` : `${movieTitle}`);
  }, [movieParentName, movieTitle]);

  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random()); // reset key to force the Grid component to refresh
  }, [textAreaText, searchQuery]);

  const handleSendGIF = (gif: IGif) => {
    let id = nanoid(10);
    socket.emit("message", {
      roomId: roomId,
      data: {
        id,
        user,
        type: "GIF",
        message: gif,
      },
    });
    batch(() => {
      dispatch(sliceSetNestVisibility(false));
      dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
      dispatch(sliceSetTextAreaMessage(""));
    });
  };

  return (
    <StyledGiphy>
      <img
        src={GIPHY_LOGO}
        width="200"
        alt="Powered by GIPHY"
        className="giphy-logo"
      />
      <Grid
        key={key}
        width={300}
        columns={2}
        fetchGifs={fetchGifs}
        onGifClick={(gif, e) => {
          e.stopPropagation();
          e.preventDefault();
          handleSendGIF(gif);
        }}
      />
    </StyledGiphy>
  );
};

export default Giphy;
