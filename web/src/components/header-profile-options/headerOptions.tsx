import { MdOutlineExitToApp, MdPerson, MdSync } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetUserFullNameQuery,
  useLogoutMutation,
} from '../../generated/graphql';

import { StyledHeaderOptions } from './headerOptions.styles';
import { isServer } from '../../constants';
import { useNavigate } from 'react-router-dom';

const HeaderOptions = () => {
  const [, logout] = useLogoutMutation();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile);
  const [userFullName] = useGetUserFullNameQuery({
    variables: { uid: user.id },
    pause: isServer(),
  });
  const profileClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(`/profile/${user.nickname}`);
  };
  const logOutHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    logout({}).then((res) => {
      const { data, error } = res;
      if (error) {
        console.log(error);
        return;
      }
      const result = data?.logout;
      if (result) {
        navigate('/');
        return;
      }
    });
  };
  return (
    <StyledHeaderOptions>
      <div className='us'>
        <div className='full'>
          {profile.fullname !== ''
            ? `${profile.fullname}`
            : userFullName.data?.getUserFullName}
        </div>
        <div className='nick'>@{user.nickname}</div>
      </div>
      <div className='option' onClick={profileClickHandler}>
        <div className='icon'>
          <MdPerson size={20} />
        </div>
        <div className='text'>Profile</div>
      </div>
      <div className='option' onClick={logOutHandler}>
        <div className='icon'>
          <MdOutlineExitToApp size={20} />
        </div>
        <div className='text'>Logout</div>
      </div>
      <div
        className='option'
        onClick={(e) => {
          e.stopPropagation();
          chrome.runtime.sendMessage(
            'dmipflcbflebldjbgfnkcjnobneebmpo',
            { type: 'EXTENSION_LOG_IN', user: user },
            (response) => {
              console.log('response', response);
            }
          );
        }}
        id='sync-login'>
        <div className='icon'>
          <MdSync size={20} />
        </div>
        <div className='text'>Sync Login with Extension</div>
      </div>
    </StyledHeaderOptions>
  );
};

export default HeaderOptions;
