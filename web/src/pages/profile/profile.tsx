import { MdCameraAlt, MdOutlineEdit } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { ProfileParent } from './profile.styles';
import ProfilePic from '../../components/profilePic/profilePic';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';

const Profile = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const profilePicChangeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.IMAGE_POP_UP));
    });
  };
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
          <div className='edit' onClick={profilePicChangeHandler}>
            <MdCameraAlt size={25} />
          </div>
        </div>
      </div>
    </ProfileParent>
  );
};

export default Profile;
