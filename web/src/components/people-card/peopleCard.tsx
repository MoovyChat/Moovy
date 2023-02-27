import FollowButton from '../follow-button/followButton';
import ProfilePic from '../profilePic/profilePic';
import React from 'react';
import { StyledPeopleCard } from './peopleCard.styles';
import { Users } from '../../generated/graphql';
import { useNavigate } from 'react-router-dom';

type props = {
  user: Users;
};
const PeopleCard: React.FC<props> = ({ user }) => {
  const navigate = useNavigate();
  return (
    <StyledPeopleCard>
      <div className='usr-sec-1'>
        <ProfilePic user={user} src={user.photoUrl} tooltip={true} />
      </div>
      <div className='usr-sec-2'>
        <div
          className='name'
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/profile/${user.nickname}`);
          }}>
          {user.name}
        </div>
        <div className='nickname'>@{user.nickname}</div>
      </div>
      <div className='usr-sec-3'>
        <FollowButton userId={user.id} nickName={user.nickname} />
      </div>
    </StyledPeopleCard>
  );
};

export default PeopleCard;
