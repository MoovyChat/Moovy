import { ProfilePicParent } from './profilePic.styles';
import React from 'react';
import { TOOLTIP } from '../../utils/enums';
import Tooltip from '../tooltip/tooltip';
import { User } from '../../generated/graphql';
import { useNavigate } from 'react-router-dom';

type props = {
  src: string;
  user?: User;
  tooltip?: boolean;
};
const ProfilePic: React.FC<props> = ({ src, user, tooltip }) => {
  const navigate = useNavigate();
  const navigateToUser: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    user && navigate(`/profile/${user?.nickname}`);
  };
  return (
    <React.Fragment>
      {tooltip ? (
        <ProfilePicParent onClick={navigateToUser}>
          <img src={src} alt='profilePic' />
        </ProfilePicParent>
      ) : (
        <Tooltip
          height='120px'
          width='200px'
          data={user as User}
          message={TOOLTIP.USER}>
          <ProfilePicParent>
            <img src={src} alt='profilePic' />
          </ProfilePicParent>
        </Tooltip>
      )}
    </React.Fragment>
  );
};

export default ProfilePic;
