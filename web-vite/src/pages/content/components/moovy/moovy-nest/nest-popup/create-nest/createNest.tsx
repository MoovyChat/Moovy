import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState,
} from "react";
import {
  CustomSwitch,
  Root,
  StyledCreateNest,
  StyledInputElement,
} from "./createNest.styles";
import { ClickAwayListener, Input, Switch } from "@mui/base";
import { StyledNestButton } from "../../nest-login/nestLogin.styles";
import { useAppDispatch } from "../../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { NEST_TYPE } from "../../../../../../../helpers/enums";
import {
  sliceSetIsRoomPublic,
  sliceSetJoinedRoom,
  sliceSetRoomId,
  sliceSetRoomName,
} from "../../../../../../redux/slices/socket/socketSlice";
import { batch } from "react-redux";
import { GiNestBirds } from "react-icons/gi";
import { nanoid } from "nanoid";
import { openSnackBar } from "../snack-bar/snackBar";
import NestInput from "../nest-input/nestInput";

const CreateNest = () => {
  const label = { slotProps: { input: { "aria-label": "Public" } } };
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [isPublic, setPublic] = useState<boolean>(true);
  const inputRef = useRef(null);
  const roomID = nanoid(10);
  const closeHandler = () => {
    dispatch(sliceSetNestVisibility(false));
    dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
  };

  const switchChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.stopPropagation();
    setPublic(() => e.target.checked);
  };

  const createRoomHandler = () => {
    batch(() => {
      dispatch(sliceSetRoomId(roomID));
      dispatch(sliceSetRoomName(value));
      dispatch(sliceSetIsRoomPublic(isPublic));
      dispatch(sliceSetJoinedRoom(true));
      dispatch(sliceSetNestVisibility(false));
      dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
    });
    openSnackBar(`Created the ${value} Nest`);
  };

  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <StyledCreateNest>
        <CustomSwitch>
          <GiNestBirds size={20} />
          <div>Create Nest</div>
        </CustomSwitch>
        <NestInput value={value} setValue={setValue} />
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
        <div className="container">
          <StyledNestButton
            nestColor="#02b61a"
            nestHover="#039b17"
            nestActive="#03a519"
            size={12}
            onClick={createRoomHandler}
          >
            <div>Create</div>
          </StyledNestButton>
          <StyledNestButton
            nestColor="#b60202"
            nestHover="#930404"
            nestActive="#6c0303"
            size={12}
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
