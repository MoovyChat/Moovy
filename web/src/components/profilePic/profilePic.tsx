import { Image } from '../Image/image';
import { ProfilePicParent } from './profilePic.styles';
import React from 'react';
import { TOOLTIP } from '../../utils/enums';
import Tooltip from '../tooltip/tooltip';
import { Users } from '../../generated/graphql';
import { useNavigate } from 'react-router-dom';

type props = {
  src: string;
  user?: Users;
  tooltip?: boolean;
};
const ProfilePic: React.FC<props> = ({ src, user, tooltip }) => {
  const navigate = useNavigate();
  const navigateToUser: React.MouseEventHandler<HTMLDivElement|any> = e => {
    e.stopPropagation();
    user && navigate(`/home/profile/${user.nickname}`);
  };
  return (
    <React.Fragment>
      {tooltip ? (
        <ProfilePicParent onClick={navigateToUser} id="blur-escape">
          <img src={src} alt="profilePic" id="blur-escape" />
        </ProfilePicParent>
      ) : (
        <Tooltip
          height="140px"
          width="200px"
          data={user?.id}
          message={TOOLTIP.USER}
        >
          <ProfilePicParent id="blur-escape" onClick={navigateToUser}>
            <Image src={src} alt="profilePic" lazy onClick={navigateToUser} />
          </ProfilePicParent>
        </Tooltip>
      )}
    </React.Fragment>
  );
};

export default ProfilePic;
