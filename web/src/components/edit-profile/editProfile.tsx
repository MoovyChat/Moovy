import React, { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import {
  sliceSetProfile,
  sliceUpdateProfileField,
} from '../../redux/slices/userProfileSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { EditProfileParent } from './editProfile.styles';
import { FaUserEdit } from 'react-icons/fa';
import { Profile } from '../../generated/graphql';
import ProfileTextBox from '../../pages/profile/profileTextBox';
import { User } from '../../utils/interfaces';
import { batch } from 'react-redux';
import { sliceSetUserNickName } from '../../redux/slices/userSlice';

interface ErrorIn {
  nickname: string;
  firstname: string;
  lastname: string;
  gender: string;
}
const EditProfile = () => {
  const profile = useAppSelector((state) => state.profile);
  const user = useAppSelector((state) => state.user);
  const [tempProfile, setTempProfile] = useState<Profile>(profile);
  const [nickname, setNickname] = useState<string>(user.nickname);
  const dispatch = useAppDispatch();
  const [hasError, setHasError] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorIn>({
    nickname: '',
    firstname: '',
    lastname: '',
    gender: '',
  });

  useMemo(() => {
    const values = Object.values(errors).filter((val) => val !== '');
    if (values.length > 0) setHasError(() => true);
    else setHasError(() => false);
  }, [errors, setHasError]);

  useEffect(() => {
    if (tempProfile.firstname.length < 2) {
      setErrors((err) => ({ ...err, firstname: 'Invalid firstname' }));
    } else {
      setErrors((err) => ({ ...err, firstname: '' }));
    }

    if (tempProfile.lastname.length < 2) {
      setErrors((err) => ({ ...err, lastname: 'Invalid last name' }));
    } else {
      setErrors((err) => ({ ...err, lastname: '' }));
    }

    if (tempProfile.gender === '') {
      setErrors((err) => ({ ...err, gender: 'Invalid value' }));
    } else {
      setErrors((err) => ({ ...err, gender: '' }));
    }

    if (nickname.length < 2) {
      setErrors((err) => ({ ...err, nickname: 'Invalid user name' }));
    } else {
      setErrors((err) => ({ ...err, nickname: '' }));
    }
  }, [tempProfile, nickname, setErrors, setHasError]);
  const updateValues: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetUserNickName(nickname));
    dispatch(sliceSetProfile(tempProfile));
  };
  const setValue = (key: string, value: string) => {
    if (key === 'nickname') {
      setNickname(value);
    } else {
      setTempProfile({ ...tempProfile, [key]: value } as Profile);
    }
  };
  const cancelButtonHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
    });
  };
  return (
    <EditProfileParent hasError={hasError}>
      <div id='title'>
        <span id='ic'>
          <FaUserEdit size={25} />
        </span>
        <span>Edit Profile</span>
      </div>
      <div className='nickname ext'>
        <ProfileTextBox
          title='Username*'
          type='text'
          value={nickname}
          keyItem='nickname'
          setValue={setValue}
          error={errors!.nickname}
        />
      </div>
      <div className='first ext'>
        <ProfileTextBox
          title='First Name*'
          type='text'
          keyItem='firstname'
          value={tempProfile.firstname}
          setValue={setValue}
          error={errors!.firstname}
        />
      </div>
      <div className='last ext'>
        <ProfileTextBox
          title='Last Name*'
          type='text'
          keyItem='lastname'
          value={tempProfile.lastname}
          setValue={setValue}
          error={errors!.lastname}
        />
      </div>
      <div className='dob ext'>
        <ProfileTextBox
          title='DOB'
          type='date'
          keyItem='dob'
          value={tempProfile.dob as string}
          setValue={setValue}
        />
      </div>
      <div className='gender ext'>
        <ProfileTextBox
          title='Gender*'
          type='select'
          keyItem='gender'
          value={tempProfile.gender as string}
          setValue={setValue}
          error={errors!.gender}
        />
      </div>
      <div className='ext'>
        <button id='save' onClick={updateValues}>
          Save
        </button>
        <button id='cancel' onClick={cancelButtonHandler}>
          Cancel
        </button>
      </div>
    </EditProfileParent>
  );
};

export default EditProfile;
