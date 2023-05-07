import { MdPeopleOutline, MdVideocam } from "react-icons/md";
import { StyledNestStatus } from "./nestStatus.styles";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Users } from "../../../../../../generated/graphql";
import { MouseEventHandler, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { sliceSetAccessCamera } from "../../../../../redux/slices/socket/socketSlice";
import { SocketContext } from "../../context/socketContextFile";

interface Props {
  users: Users[];
  leaveButtonHandler: () => void;
}
const NestStatus: React.FC<Props> = ({ users, leaveButtonHandler }) => {
  const roomId = "test";
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const accessCamera = useAppSelector((state) => state.socket.accessCamera);
  const handleAccessCamera: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    console.log("Socket instance when camera icon clicked:", socket);
    dispatch(sliceSetAccessCamera(!accessCamera));
    socket && socket.emit("joinCall", roomId);
  };
  return (
    <StyledNestStatus>
      <div className="nest-status">
        <BsFillPatchCheckFill size={20} fill="#39ec11" />
        <span className="next-status-text">Connected to "test"</span>
      </div>
      <div className="people-count">
        <div className="peopleCount">{users ? users.length : 0}</div>
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
