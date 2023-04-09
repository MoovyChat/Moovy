import FollowButton from '../follow-button/followButton';
import ProfilePic from '../profilePic/profilePic';
import { StyledUserCard } from './show.styles';
import { Users } from '../../generated/graphql';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

type props = {
  user: Users;
};
export const UserCard: React.FC<props> = ({ user }) => {
  const currentUser = useAppSelector(state => state.user);
  const isSameUser = user.id === currentUser.id;
  const navigate = useNavigate();
  const cardClickHandler = (userId: string) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <StyledUserCard
      onClick={e => {
        e.stopPropagation();
        cardClickHandler(user.nickname);
      }}
    >
      <div className="user-block">
        <div className="pic-container">
          <ProfilePic src={user.photoUrl} tooltip={true} user={user} />
        </div>
        <div className="user-name">{user.nickname}</div>
      </div>
      {!isSameUser && (
        <FollowButton userId={user.id} nickName={user.nickname} />
      )}
    </StyledUserCard>
  );
};
