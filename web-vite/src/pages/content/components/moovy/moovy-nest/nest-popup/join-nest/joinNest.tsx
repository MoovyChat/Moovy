import { useState } from "react";
import NestInput from "../nest-input/nestInput";
import { StyledNestButton } from "../../nest-login/nestLogin.styles";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { useAppDispatch } from "../../../../../../redux/hooks";
import { ClickAwayListener } from "@mui/base";
import {
  CustomSwitch,
  StyledCreateNest,
} from "../create-nest/createNest.styles";
import { GiNestedEclipses } from "react-icons/gi";
import {
  sliceSetJoinedRoom,
  sliceSetRoomId,
} from "../../../../../../redux/slices/socket/socketSlice";
import { batch } from "react-redux";
import { NEST_TYPE } from "../../../../../../../helpers/enums";
import { openSnackBar } from "../snack-bar/snackBar";

const JoinNest = () => {
  const [roomId, setRoomId] = useState<string>("");
  const dispatch = useAppDispatch();
  const closeHandler = () => {
    dispatch(sliceSetNestVisibility(false));
    dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
  };
  const joinRoomHandler = () => {
    batch(() => {
      dispatch(sliceSetRoomId(roomId));
      dispatch(sliceSetJoinedRoom(true));
      dispatch(sliceSetNestVisibility(false));
      dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
    });
    openSnackBar(`Joined the Nest`);
  };
  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <StyledCreateNest>
        <CustomSwitch>
          <GiNestedEclipses size={20} />
          <div>Join Nest</div>
        </CustomSwitch>
        <NestInput value={roomId} setValue={setRoomId} />
        <div className="container">
          <StyledNestButton
            nestColor="#02b61a"
            nestHover="#039b17"
            nestActive="#03a519"
            size={12}
            onClick={joinRoomHandler}
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

export default JoinNest;
