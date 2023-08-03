import { ClickAwayListener, Switch } from "@mui/base";
import { nanoid } from "nanoid";
import { ChangeEventHandler, useContext, useState } from "react";
import { GiNestBirds } from "react-icons/gi";
import { NEST_TYPE } from "../../../../../../../helpers/enums";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { SocketContext } from "../../../context/socketContextFile";
import { StyledNestButton } from "../../nest-login/nestLogin.styles";
import NestInput from "../nest-input/nestInput";
import { CustomSwitch, Root, StyledCreateNest } from "./createNest.styles";
import {
  sliceSetIsNestAdmin,
  sliceSetIsRoomPublic,
} from "../../../../../../redux/slices/socket/socketSlice";
import { NestMovieType } from "../../../../../../../helpers/interfaces";
import { getVideoTitleFromWatch } from "../../../contentScript.utils";

const CreateNest = () => {
  const user = useAppSelector((state) => state.user);
  const movie = useAppSelector((state) => state.movie);
  const label = { slotProps: { input: { "aria-label": "Public" } } };
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const isPublic = useAppSelector((state) => state.socket.isPublic);
  const socket = useContext(SocketContext);
  const roomID = nanoid(10);
  const closeHandler = () => {
    dispatch(sliceSetNestVisibility(false));
    dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
  };

  const switchChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetIsRoomPublic(e.target.checked));
  };

  const createRoomHandler = () => {
    const url = window.location.href;
    const title = getVideoTitleFromWatch(movie.platform);
    //Emit the createRoom event to the socket.io
    socket.emit("createRoom", {
      roomID,
      roomName: value,
      user,
      url,
      isPublic,
      movie: {
        id: movie.id,
        name: movie?.name || title,
        thumbs: movie?.thumbs,
        platform: movie?.platform,
        parentTitleName: movie?.parentTitleName,
      } as NestMovieType,
    });
    dispatch(sliceSetIsNestAdmin(true));
  };

  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <StyledCreateNest>
        <CustomSwitch>
          <GiNestBirds size={20} />
          <div>Create Nest</div>
        </CustomSwitch>
        <NestInput
          value={value}
          setValue={setValue}
          type="create"
          onEnter={createRoomHandler}
        />
        <CustomSwitch>
          <label htmlFor="public">Public</label>
          <Switch
            className="public"
            slots={{
              root: Root,
            }}
            {...label}
            defaultChecked={isPublic}
            onChange={switchChangeHandler}
          />
        </CustomSwitch>
        <div className="moovychat-container">
          <StyledNestButton
            nestColor="#02b61a"
            nestHover="#039b17"
            nestActive="#03a519"
            size={12}
            height={30}
            onClick={createRoomHandler}
          >
            <div>Create</div>
          </StyledNestButton>
          <StyledNestButton
            nestColor="#b60202"
            nestHover="#930404"
            nestActive="#6c0303"
            size={12}
            height={30}
            onClick={closeHandler}
          >
            <div>Cancel</div>
          </StyledNestButton>
        </div>
      </StyledCreateNest>
    </ClickAwayListener>
  );
};

export default CreateNest;
