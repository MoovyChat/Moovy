import { MdPeopleOutline } from "react-icons/md";
import { StyledNestStatus } from "./nestStatus.styles";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Users } from "../../../../../../generated/graphql";

interface Props {
  users: Users[];
}
const NestStatus: React.FC<Props> = ({ users }) => {
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
      <div className="nest-button">Leave Room</div>
    </StyledNestStatus>
  );
};

export default NestStatus;
