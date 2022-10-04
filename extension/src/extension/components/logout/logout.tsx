import {
  ButtonParentInLogin,
  EmailInLogin,
  Pic,
  PicParent,
  Refresh,
  SetTop,
  SideArrowButton,
  WelcomeInLogin,
  WelcomeMessage,
} from './logout.styles';
import {
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdRefresh,
} from 'react-icons/io';
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
import { IoSettingsOutline } from 'react-icons/io5';
import { User } from '../../../Utils/interfaces';
import UserNameEdit from '../userNameEdit/userNameEdit';
import { WithOutLoginWindow } from '../login/login.styles';
import constants from '../../../constants';

const signOut = async (setUser: (user: User) => void) => {
  let removeUser: User = {
    name: '',
    email: '',
    photoUrl: '',
    nickname: '',
    uid: '',
    comments: [],
    replies: [],
    watchedMovies: [],
    favorites: [],
    joinedAt: '0',
  };
  setStoredUserLoginDetails(removeUser).then(() => {
    setUser(removeUser);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log(tabs[0].id);
    chrome.tabs.sendMessage(tabs[0].id!, { type: 'logout' }, (response) => {
      console.log(response, response?.data);
    });
  });
};

const openSideBar = (
  root: HTMLElement,
  setSideBatOpen: Dispatch<SetStateAction<boolean>>,
  sideBarOpen: boolean
) => {
  setSideBatOpen(!sideBarOpen);
  if (!sideBarOpen) {
    root.style.width = '500px';
  } else {
    root.style.width = '300px';
  }
};

type props = {
  user: User | undefined;
  setUser: (user: User) => void;
  setSideOpen: Dispatch<any>;
};
const LogOut: React.FC<props> = ({ user, setUser, setSideOpen }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [sideBarOpened, setSideBatOpen] = useState<boolean>(false);
  const [root, setRoot] = useState<HTMLElement | null>();
  const [showNickNameEdit, setShowNickNameEdit] = useState<boolean>(false);
  useEffect(() => {
    if (user && user.nickname === user.uid) {
      setShowNickNameEdit(true);
    }
  }, [user]);

  useEffect(() => {
    const appElement = document.getElementById('app');
    setRoot(appElement);
  }, [setRoot]);

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
        chrome.tabs.sendMessage(tabs[0].id!, { checked: true }, (response) => {
          console.log(response, response?.data);
        });
      });
    });
  };

  const refreshData: MouseEventHandler = (e) => {
    e.stopPropagation();
    chrome.windows.getCurrent((w) => {
      chrome.tabs.query({ active: true, windowId: w.id! }, (tabs) => {
        chrome.tabs.sendMessage(
          tabs[0].id!,
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
      {!showNickNameEdit ? (
        <SetTop>
          <WelcomeInLogin>
            <PicParent>
              <Pic photoURL={user?.photoUrl}></Pic>
            </PicParent>
            <WelcomeMessage>
              {constants.welcome} {user?.name}!
            </WelcomeMessage>
            <div
              className='settings'
              onClick={() => chrome.runtime.openOptionsPage()}>
              <IoSettingsOutline className='icon' size={25} />
            </div>
          </WelcomeInLogin>
          <EmailInLogin>
            <h4>Enable comments</h4>
            <input type='checkbox' checked={checked} onChange={handleChange} />
          </EmailInLogin>
          <ButtonParentInLogin>
            <Button
              bgColor='hsl(0, 70%, 30%)'
              textColor='white'
              iconSize={25}
              text={constants.logout}
              onClick={(e: MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                setSideOpen(false);
                signOut(setUser);
              }}
              padding='5px 3px'
              Icon={FcGoogle}
              textShadow='0 0 6px black, 0 0 5px #0000ff'
            />
          </ButtonParentInLogin>
          <SideArrowButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openSideBar(root!, setSideBatOpen, sideBarOpened);
              setSideOpen(!sideBarOpened);
            }}>
            {sideBarOpened ? (
              <IoMdArrowDropright size={40} />
            ) : (
              <IoMdArrowDropleft size={40} />
            )}
          </SideArrowButton>
          <Refresh
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: 360,
              borderRadius: '100%',
            }}
            onClick={refreshData}>
            <IoMdRefresh size={40} />
          </Refresh>
        </SetTop>
      ) : (
        <UserNameEdit
          user={user!}
          setShowNickNameEdit={setShowNickNameEdit}
          showNickNameEdit={showNickNameEdit}></UserNameEdit>
      )}
    </WithOutLoginWindow>
  );
};

export default LogOut;
