import { MdCameraAlt, MdOutlineEdit } from 'react-icons/md';

import { ProfileParent } from './profile.styles';
import ProfilePic from '../../components/profilePic/profilePic';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';

const Profile = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <ProfileParent>
      <div className='cover-photo'>
        <img
          src='https://i.pinimg.com/736x/43/f4/1a/43f41accb2871c580fb630e0e8a484e8--cover-picture-cover-pics.jpg'
          alt='cover-photo'
        />
      </div>
      <div className='change-background'>
        <MdCameraAlt size={18} />
        <div className='add-cover'>Add Cover Photo</div>
      </div>
      <div className='user-photo'>
        <div className='user-container'>
          <ProfilePic src={user.photoUrl!} />
          <div className='edit'>
            <MdCameraAlt size={25} />
          </div>
        </div>
      </div>
    </ProfileParent>
  );
};

export default Profile;
