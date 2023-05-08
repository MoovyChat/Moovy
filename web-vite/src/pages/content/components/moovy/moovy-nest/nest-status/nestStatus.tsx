import { MdPeopleOutline, MdVideocam } from "react-icons/md";
import { StyledNestStatus } from "./nestStatus.styles";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Users } from "../../../../../../generated/graphql";
import { MouseEventHandler, useContext, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import {
  sliceSetAccessCamera,
  sliceSetIncomingMessages,
  sliceSetJoinedUsers,
} from "../../../../../redux/slices/socket/socketSlice";
import { SocketContext } from "../../context/socketContextFile";
import { openSnackBar } from "../nest-popup/snack-bar/snackBar";

interface Props {
  connected: boolean;
}
const NestStatus: React.FC<Props> = ({ connected }) => {
  const roomId = useAppSelector((state) => state.socket.roomId);
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const roomUsers = useAppSelector((state) => state.socket.joinedUsers);
  const accessCamera = useAppSelector((state) => state.socket.accessCamera);
  const handleAccessCamera: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    console.log("Socket instance when camera icon clicked:", socket);
    dispatch(sliceSetAccessCamera(!accessCamera));
    socket && socket.emit("joinCall", roomId);
  };

  useEffect(() => {
    socket.on("roomUsers", (users) => {
      dispatch(sliceSetJoinedUsers(users));
    });
  }, []);

  const leaveButtonHandler = () => {
    openSnackBar(`Left the Nest`);
    socket.emit("leaveRoom");
    dispatch(sliceSetIncomingMessages([]));
  };
  return (
    <StyledNestStatus>
      <div className="nest-status">
        <BsFillPatchCheckFill size={20} fill="#39ec11" />
        <span className="next-status-text">
          {connected ? "Connected" : "Disconnected"}
        </span>
      </div>
      <div className="people-count">
        <div className="peopleCount">{roomUsers ? roomUsers.length : 0}</div>
        <MdPeopleOutline size={20} />
      </div>
      <div className="people-count cam" onClick={handleAccessCamera}>
        <MdVideocam size={20} />
      </div>
      <div className="nest-button" onClick={() => leaveButtonHandler()}>
        Leave Room
      </div>
    </StyledNestStatus>
  );
};

export default NestStatus;
