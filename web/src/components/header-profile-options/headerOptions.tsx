/// <reference types="chrome"/>
import { EXTENSION_URL, EXT_ID, isServer } from '../../constants';
import {
  MdInstallDesktop,
  MdOutlineExitToApp,
  MdPerson,
  MdSync,
} from 'react-icons/md';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetUserFullNameQuery,
  useLogoutMutation,
} from '../../generated/graphql';

import { StyledHeaderOptions } from './headerOptions.styles';
import { sliceResetUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const HeaderOptions = () => {
  const [isExtensionInstalled, setIsExtensionInstalled] =
    useState<boolean>(false);

  const [, logout] = useLogoutMutation();
  const user = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profile = useAppSelector(state => state.profile);
  const [userFullName] = useGetUserFullNameQuery({
    variables: { uid: user.id },
    pause: isServer(),
  });
  const profileClickHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    navigate(`/home/profile/${user.nickname}`);
  };

  useEffect(() => {
    type CheckExtensionCallback = (installed: boolean) => void;
    const checkExtension = (callback: CheckExtensionCallback): void => {
      try {
        // Send a message to the extension with the specified ID
        chrome.runtime.sendMessage(
          EXT_ID,
          { message: 'checkExtension' },
          (response: any) => {
            // If there's a response, the extension is installed and enabled
            if (response) {
              callback(true);
            } else {
              // No response indicates the extension is not installed or not enabled
              callback(false);
            }
          },
        );
      } catch (e) {
        callback(false);
      }
    };
    checkExtension((installed: boolean) => {
      setIsExtensionInstalled(installed);
    });
  }, []);

  const logOutHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    logout({}).then(res => {
      const { data, error } = res;
      if (error) {
        console.log(error);
        return;
      }
      if (data) {
        navigate('/');
        dispatch(sliceResetUser());
      }
    });
  };
  return (
    <StyledHeaderOptions>
      <div className="us">
        <div className="full">
          {profile.fullname !== ''
            ? `${profile.fullname}`
            : userFullName.data?.getUserFullName}
        </div>
        <div className="nick">@{user.nickname}</div>
      </div>
      <div className="option" tabIndex={0} onClick={profileClickHandler}>
        <div className="icon">
          <MdPerson size={20} />
        </div>
        <div className="options-text">Profile</div>
      </div>
      <div className="option" tabIndex={0} onClick={logOutHandler}>
        <div className="icon">
          <MdOutlineExitToApp size={20} />
        </div>
        <div className="options-text">Logout</div>
      </div>
      {isExtensionInstalled ? (
        <div
          className="option"
          tabIndex={0}
          onClick={e => {
            e.stopPropagation();
            console.log({ EXT_ID });
            chrome.runtime.sendMessage(
              EXT_ID,
              { type: 'EXTENSION_LOG_IN', user: user },
              response => {
                console.log('response', response);
              },
            );
          }}
          id="sync-login"
        >
          <div className="icon">
            <MdSync size={20} />
          </div>
          <div className="options-text">Sync Login with Extension</div>
        </div>
      ) : (
        <div
          className="option"
          onClick={e => {
            e.stopPropagation();
            window.open(EXTENSION_URL, '_blank');
          }}
        >
          <div className="icon">
            <MdInstallDesktop size={20} />
          </div>
          <div className="options-text">Install Extension</div>
        </div>
      )}
    </StyledHeaderOptions>
  );
};

export default HeaderOptions;
