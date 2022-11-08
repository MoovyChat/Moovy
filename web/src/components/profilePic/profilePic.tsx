import { ProfilePicParent } from './profilePic.styles';
import React from 'react';

type props = {
  src: string;
};
const ProfilePic: React.FC<props> = ({ src }) => {
  return (
    <ProfilePicParent>
      <img src={src} alt='profilePic' />
    </ProfilePicParent>
  );
};

export default ProfilePic;
