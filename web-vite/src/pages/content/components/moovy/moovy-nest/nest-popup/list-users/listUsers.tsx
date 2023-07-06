import { ClickAwayListener } from "@mui/base";
import React, { useContext, useEffect } from "react";
import { NEST_TYPE } from "../../../../../../../helpers/enums";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../../redux/slices/nestSlice";
import { RoomUser } from "../../../../../../redux/slices/socket/socketSlice";
import {
  CustomSwitch,
  StyledCreateNest,
} from "../create-nest/createNest.styles";
import { StyledListUser, StyledListUsers } from "./listUsers.styles";
import { MdPeopleOutline } from "react-icons/md";
import { SocketContext } from "../../../context/socketContextFile";

type Props = {
  ru: RoomUser;
};
const ListUser: React.FC<Props> = ({ ru }) => {
  const userFromRedux = useAppSelector((state) => state.user);
  const isNestAdmin = useAppSelector((state) => state.socket.isNestAdmin);
  const socket = useContext(SocketContext);
  const roomId = useAppSelector((state) => state.socket.roomId);
  if (!ru) return <></>;
  const { isAdmin, user, id } = ru;

  const handleKickUser = () => {
    socket && socket.emit("kick-user", { kickedUser: user, roomId });
  };
  return (
    <StyledListUser>
      <div className="usr">
        <img src={user.photoUrl} />
        <div className="nickname">{user.nickname}</div>
      </div>
      <div className="options">
        {isAdmin && <div className="badge admin">Admin</div>}
        {isNestAdmin && userFromRedux.id !== user.id && (
          <div className="badge kick" onClick={handleKickUser}>
            Kick
          </div>
        )}
      </div>
    </StyledListUser>
  );
};

const ListUsers = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const joinedUsers = useAppSelector((state) => state.socket.joinedUsers);
  const closeHandler = () => {
    dispatch(sliceSetNestVisibility(false));
    dispatch(sliceSetNestType(NEST_TYPE.EMPTY));
  };

  return (
    <ClickAwayListener onClickAway={closeHandler}>
      <StyledCreateNest>
        <CustomSwitch>
          <MdPeopleOutline size={20} />
          <div>Connected Users</div>
        </CustomSwitch>
        <StyledListUsers>
          {joinedUsers && joinedUsers.map((user) => <ListUser ru={user} />)}
        </StyledListUsers>
      </StyledCreateNest>
    </ClickAwayListener>
  );
};

export default ListUsers;
