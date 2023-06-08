import { MouseEventHandler, useContext } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdPeopleOutline, MdSettings, MdVideocam } from "react-icons/md";
import { batch } from "react-redux";
import { NEST_TYPE } from "../../../../../../helpers/enums";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  sliceSetNestType,
  sliceSetNestVisibility,
} from "../../../../../redux/slices/nestSlice";
import { sliceSetAccessCamera } from "../../../../../redux/slices/socket/socketSlice";
import { SocketContext } from "../../context/socketContextFile";
import { StyledNestStatus } from "./nestStatus.styles";

interface Props {}
const NestStatus: React.FC<Props> = () => {
  const user = useAppSelector((state) => state.user);
  const roomId = useAppSelector((state) => state.socket.roomId);
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const roomUsers = useAppSelector((state) => state.socket.joinedUsers);
  const accessCamera = useAppSelector((state) => state.socket.accessCamera);
  const connected = useAppSelector((state) => state.socket.isConnected);
  const handleAccessCamera: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    console.log("Socket instance when camera icon clicked:", socket);
    dispatch(sliceSetAccessCamera(!accessCamera));
  };

  const showJoinedUsers: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetNestVisibility(true));
      dispatch(sliceSetNestType(NEST_TYPE.LIST_USERS));
    });
  };

  const showSettings: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetNestVisibility(true));
      dispatch(sliceSetNestType(NEST_TYPE.SETTINGS));
    });
  };

  const leaveButtonHandler = () => {
    socket.emit("leaveRoom");
  };
  return (
    <StyledNestStatus>
      <div className="nest-status">
        <BsFillPatchCheckFill size={20} fill="#39ec11" />
        <span className="next-status-text">
          {connected ? "Connected" : "Disconnected"}
        </span>
      </div>
      <div className="people-count" onClick={showJoinedUsers}>
        <div className="peopleCount">{roomUsers ? roomUsers.length : 0}</div>
        <MdPeopleOutline size={20} />
      </div>
      {/* <div className="people-count cam" onClick={handleAccessCamera}>
        <MdVideocam size={20} />
      </div> */}
      <div className="people-count cam" onClick={showSettings}>
        <MdSettings size={20} />
      </div>
      <div
        className="nest-button"
        onClick={(e) => {
          e.stopPropagation();
          leaveButtonHandler();
        }}
      >
        Leave Room
      </div>
    </StyledNestStatus>
  );
};

export default NestStatus;
