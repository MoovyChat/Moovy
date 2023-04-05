import { MOOVY_URL, constants } from '../../../constants';
import { Pic, Refresh, SetTop } from './logout.styles';
import React, {
  ChangeEventHandler,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  getStoredCheckedStatus,
  setStoredCheckedStatus,
  setStoredUserLoginDetails,
} from '../../../Utils/storage';

import Button from '../../../components/button/button';
import { FcGoogle } from 'react-icons/fc';
import { IoMdRefresh } from 'react-icons/io';
import { OTTType } from '../app/app';
import Ott from '../ott/ott';
import { User } from '../../../Utils/interfaces';
import { WithOutLoginWindow } from '../login/login.styles';
import { getSupportedMimeTypes } from '../../utils';

const signOut = async (setUser: (user: User) => void) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    tabs[0].id &&
      chrome.tabs.sendMessage(tabs[0].id, { type: 'LOGOUT' }, (response) => {
        console.log(response, response?.data);
      });
  });
  const removeUser: User = {
    name: '',
    email: '',
    photoUrl: '',
    nickname: '',
    bg: '',
    id: '',
    comments: [],
    replies: [],
    watchedMovies: [],
    favorites: [],
    followerCount: 0,
    followingCount: 0,
    joinedAt: '',
  };
  setStoredUserLoginDetails(removeUser).then(() => {
    setUser(removeUser);
  });
};

type props = {
  user: User | undefined;
  setUser: (user: User) => void;
  OTTSite: OTTType;
};
const LogOut: React.FC<props> = ({ user, setUser, OTTSite }) => {
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    getStoredCheckedStatus().then((res) => {
      setChecked(res);
    });
  }, [checked, setChecked]);

  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    e.stopPropagation();
    setChecked(!checked);
    setStoredCheckedStatus(!checked);
    chrome.windows.getCurrent((w) => {
      chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
        tabs[0].id &&
          chrome.tabs.sendMessage(tabs[0].id, {
            checked: !checked,
            type: 'icon-status',
          });
      });
    });
  };

  const refreshData: MouseEventHandler = (e) => {
    e.stopPropagation();
    chrome.windows.getCurrent((w) => {
      chrome.tabs.query({ active: true, windowId: w.id }, (tabs) => {
        tabs[0].id &&
          chrome.tabs.sendMessage(
            tabs[0].id,
            { type: 'refresh' },
            (response) => {
              console.log(response, response?.farewell);
            }
          );
      });
    });
  };

  return (
    <WithOutLoginWindow>
      <SetTop>
        <div className="welcome">
          <div
            className="pic"
            onClick={(e) => {
              e.stopPropagation();
              const profileUrl = `${MOOVY_URL}/home/profile/${user?.nickname}`;
              chrome.runtime.sendMessage({
                type: 'OPEN_LINK',
                url: profileUrl,
              });
            }}
          >
            <Pic photoURL={user?.photoUrl}></Pic>
          </div>
          <div className="message">
            {constants.welcome} {user?.nickname.split(' ')[0]}!
          </div>
        </div>

        <div className="comment-checkbox">
          <Ott OTTSite={OTTSite} />
        </div>
        <div className="comment-checkbox">
          <div className="tool-option">
            <span className="option-text">Show Comment Icon</span>
            <span className="checkBox">
              <input
                type="checkbox"
                id="bg"
                defaultChecked={checked}
                checked={checked}
                onChange={handleChange}
              />
              <label htmlFor="bg"></label>
            </span>
          </div>
        </div>
        <div className="button-list">
          <Button
            className="lst"
            bgColor={OTTSite.color}
            textColor="white"
            iconSize={25}
            text={constants.logout}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              signOut(setUser);
            }}
            padding="5px 3px"
            Icon={FcGoogle}
            textShadow="0 0 6px black, 0 0 5px #0000ff"
          />
        </div>
        <Refresh onClick={refreshData}>
          <IoMdRefresh size={40} />
        </Refresh>
      </SetTop>
    </WithOutLoginWindow>
  );
};

export default LogOut;
