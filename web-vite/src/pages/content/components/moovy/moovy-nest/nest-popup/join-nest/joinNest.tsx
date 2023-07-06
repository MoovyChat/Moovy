import { ClickAwayListener } from "@mui/base";
import { useContext, useState } from "react";
import { GiNestedEclipses } from "react-icons/gi";
import { NEST_TYPE } from "../../../../../../../helpers/enums";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { SocketContext } from "../../../context/socketContextFile";
import { StyledNestButton } from "../../nest-login/nestLogin.styles";
import {
  CustomSwitch,
  StyledCreateNest,
} from "../create-nest/createNest.styles";
import NestInput from "../nest-input/nestInput";

const JoinNest = () => {
  const [roomId, setRoomId] = useState<string>("");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const socket = useContext(SocketContext);
  const closeHandler = () => {
    dispatch(sliceSetNestVisibility(false));
    dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
  };

  const joinRoomHandler = () => {
    user && socket.emit("joinRoom", roomId, user);
  };
  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <StyledCreateNest>
        <CustomSwitch>
          <GiNestedEclipses size={20} />
          <div>Join Nest</div>
        </CustomSwitch>
        <NestInput
          value={roomId}
          setValue={setRoomId}
          type="join"
          onEnter={joinRoomHandler}
        />
        <div className="container">
          <StyledNestButton
            nestColor="#02b61a"
            nestHover="#039b17"
            nestActive="#03a519"
            size={12}
            height={30}
            onClick={joinRoomHandler}
          >
            <div>Join</div>
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

export default JoinNest;
