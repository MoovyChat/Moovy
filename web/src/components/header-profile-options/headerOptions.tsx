import { MdOutlineExitToApp, MdPerson } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { StyledHeaderOptions } from './headerOptions.styles';
import { useLogoutMutation } from '../../generated/graphql';
import { useNavigate } from 'react-router-dom';

const HeaderOptions = () => {
  const [, logout] = useLogoutMutation();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
      <div className='option'>
        <div className='icon'>
          <MdPerson size={20} />
        </div>
        <div className='text' onClick={profileClickHandler}>
          Profile
        </div>
      </div>
      <div className='option'>
        <div className='icon'>
          <MdOutlineExitToApp size={20} />
        </div>
        <div className='text' onClick={logOutHandler}>
          Logout
        </div>
      </div>
    </StyledHeaderOptions>
  );
};

export default HeaderOptions;
