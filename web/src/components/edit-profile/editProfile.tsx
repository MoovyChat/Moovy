import { MdError, MdReportGmailerrorred } from 'react-icons/md';
import { Profile, useUpdateProfileMutation } from '../../generated/graphql';
import React, {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
import Loading from '../../pages/loading/loading';
import ProfileTextBox from '../../pages/profile/profileTextBox';
import { batch } from 'react-redux';
import { sliceSetUserNickName } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

interface ErrorIn {
  nickname: string;
  fullname: string;
  gender: string;
}
const EditProfile = () => {
  const profile = useAppSelector((state) => state.profile);
  const user = useAppSelector((state) => state.user);
  const [tempProfile, setTempProfile] = useState<Profile>(profile);
  const [nickname, setNickname] = useState<string>(user.nickname);
  const dispatch = useAppDispatch();
  const [saving, setSaving] = useState<boolean>(false);
  const [serverError, setServerError] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);
  const [, updateProfile] = useUpdateProfileMutation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<ErrorIn>({
    nickname: '',
    fullname: '',
    gender: '',
  });

  useMemo(() => {
    const values = Object.values(errors).filter((val) => val !== '');
    if (values.length > 0) setHasError(() => true);
    else setHasError(() => false);
  }, [errors, setHasError]);

  useEffect(() => {
    if (
      tempProfile &&
      tempProfile.fullname &&
      tempProfile.fullname.length < 2
    ) {
      setErrors((err) => ({ ...err, fullname: 'Invalid name' }));
    } else {
      setErrors((err) => ({ ...err, fullname: '' }));
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

  const updateValues: FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    setSaving(() => true);
    updateProfile({
      options: {
        uid: user.id,
        nickname: nickname,
        gender: tempProfile.gender as string,
        fullname: tempProfile.fullname as string,
        dob: tempProfile.dob as string,
        bio: tempProfile.bio as string,
      },
    })
      .then((res) => {
        const { data, error } = res;
        if (error?.message) {
          setSaving(() => false);
          console.log(
            error.message,
            error.name,
            error.graphQLErrors,
            error.networkError,
            error.response
          );
          setServerError(error.message);
          return;
        }
        batch(() => {
          dispatch(sliceSetUserNickName(nickname));
          dispatch(sliceSetProfile(data?.upsertProfile as Profile));
          setTempProfile(data?.upsertProfile as Profile);
          dispatch(sliceSetIsPopupOpened(false));
          dispatch(sliceSetSelectedElement(''));
        });
        navigate(`/profile/${nickname}`);
        setSaving(() => false);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
        return <pre>error</pre>;
      });
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
  if (saving)
    return (
      <EditProfileParent hasError={false}>
        <Loading />
      </EditProfileParent>
    );
  if (serverError)
    return (
      <EditProfileParent hasError={true}>
        <div id='title'>Server Error</div>
        <div
          id='title'
          style={{
            fontSize: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 30px',
            borderRadius: '50%',
            boxShadow: '0 0 5px',
          }}>
          <MdReportGmailerrorred fill='red' />
          <span>400</span>
        </div>
        <div id='title'>{serverError}</div>
      </EditProfileParent>
    );
  return (
    <EditProfileParent hasError={hasError}>
      <form onSubmit={updateValues}>
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
            title='Full Name*'
            type='text'
            keyItem='fullname'
            value={tempProfile.fullname as string}
            setValue={setValue}
            error={errors!.fullname}
          />
        </div>
        <div className='dob ext'>
          <ProfileTextBox
            title='DOB'
            type='date'
            keyItem='dob'
            value={tempProfile.dob as string}
            setValue={setValue}
            error='none'
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
        <div className='gender ext'>
          <ProfileTextBox
            title='Bio'
            type='textarea'
            keyItem='bio'
            value={tempProfile.bio as string}
            setValue={setValue}
            error='none'
          />
        </div>
        <div className='ext'>
          <button id='save' type='submit'>
            Save
          </button>
          <button id='cancel' onClick={cancelButtonHandler}>
            Cancel
          </button>
        </div>
      </form>
    </EditProfileParent>
  );
};

export default EditProfile;
