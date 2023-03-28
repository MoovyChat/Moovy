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
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id!, { type: 'LOGOUT' }, (response) => {
      console.log(response, response?.data);
    });
  });
  let removeUser: User = {
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

// Get supported mime types.

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
  OTTSite: OTTType;
};
const LogOut: React.FC<props> = ({ user, setUser, OTTSite }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [root, setRoot] = useState<HTMLElement | null>();
  const [showNickNameEdit, setShowNickNameEdit] = useState<boolean>(false);
  const [showRecordOptions, setShowRecordOptions] = useState<boolean>(false);
  const [selectedResolution, setSelectedResolution] = useState<string>('360p');
  const [selectedDuration, setSelectedDuration] = useState<string>('10sec');
  const [supportedVideoFormats, setSupportedVideoFormats] = useState<string[]>(
    []
  );
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [selectedVideoFormat, setSelectedVideoFormat] =
    useState<string>('video/webm');
  useEffect(() => {
    if (user && user.nickname === user.id) {
      setShowNickNameEdit(true);
    }
  }, [user]);

  useEffect(() => {
    const videoTypes = ['webm', 'ogg', 'mp4', 'x-matroska'];
    const codecs = [
      'should-not-be-supported',
      'vp9',
      'vp9.0',
      'vp8',
      'vp8.0',
      'avc1',
      'av1',
      'h265',
      'h.265',
      'h264',
      'h.264',
      'opus',
      'pcm',
      'aac',
      'mpeg',
      'mp4a',
    ];
    const supportedVideos = getSupportedMimeTypes('video', videoTypes, codecs);
    setSupportedVideoFormats(supportedVideos);
  }, []);

  useEffect(() => {
    // Get stored resolution and duration values from storage.
    // getStoredResolution().then((val) => setSelectedResolution(val));
    // getStoredVideoDuration().then((val) => setSelectedDuration(val));
    // getStoredVideoFormat().then((val) => setSelectedVideoFormat(val));
    // getStoredIsRecording().then((val) => setIsRecording(val));
  }, []);

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
        chrome.tabs.sendMessage(
          tabs[0].id!,
          { checked: !checked, type: 'icon-status' },
          (response) => {}
        );
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
      <SetTop>
        <div className='welcome'>
          <div
            className='pic'
            onClick={(e) => {
              e.stopPropagation();
              let profileUrl = `${MOOVY_URL}/profile/${user?.nickname}`;
              chrome.runtime.sendMessage({
                type: 'OPEN_LINK',
                url: profileUrl,
              });
            }}>
            <Pic photoURL={user?.photoUrl}></Pic>
          </div>
          <div className='message'>
            {constants.welcome} {user?.nickname.split(' ')[0]}!
          </div>
        </div>

        <div className='comment-checkbox'>
          <Ott OTTSite={OTTSite} />
        </div>
        <div className='comment-checkbox'>
          <div className='tool-option'>
            <span className='option-text'>Show Comment Icon</span>
            <span className='checkBox'>
              <input
                type='checkbox'
                id='bg'
                defaultChecked={checked}
                checked={checked}
                onChange={handleChange}
              />
              <label htmlFor='bg'></label>
            </span>
          </div>
        </div>
        <div className='button-list'>
          <Button
            className='lst'
            bgColor={OTTSite.color}
            textColor='white'
            iconSize={25}
            text={constants.logout}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              signOut(setUser);
            }}
            padding='5px 3px'
            Icon={FcGoogle}
            textShadow='0 0 6px black, 0 0 5px #0000ff'
          />
          {/* <Button
            className='lst'
            bgColor='hsl(0, 70%, 30%)'
            textColor='white'
            iconSize={25}
            Icon={
              showRecordOptions ? MdKeyboardArrowDown : MdKeyboardArrowRight
            }
            text={constants.record_options}
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
              setShowRecordOptions(!showRecordOptions);
            }}
            padding='5px 3px'
            textShadow='0 0 6px black, 0 0 5px #0000ff'
          /> */}
          {/* <RecordOptions showOptions={showRecordOptions}>
            <div className='record-option'>
              <div className='key'>Resolution</div>
              <div className='value'>
                <select
                  value={selectedResolution}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSelectedResolution(e.target.value);
                    setStoredResolution(e.target.value);
                  }}>
                  {Object.keys(resolutions).map((key) => (
                    <option value={key} key={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='record-option'>
              <div className='key'>Format</div>
              <div className='value'>
                <select
                  value={selectedVideoFormat}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSelectedVideoFormat(e.target.value);
                    setStoredVideoFormat(e.target.value);
                  }}>
                  {supportedVideoFormats.map((key) => (
                    <option value={key} key={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='record-option'>
              <div className='key'>Duration</div>
              <div className='value'>
                <select
                  value={selectedDuration}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSelectedDuration(e.target.value);
                    setStoredVideoDuration(e.target.value);
                  }}>
                  {Object.keys(durations).map((key) => (
                    <option value={key} key={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </RecordOptions> */}
        </div>
        {/* <SideArrowButton
          isRecording={isRecording}
          onClick={(e) => {
            e.stopPropagation();
            setIsRecording(!isRecording);
            setStoredIsRecording(!isRecording);

            chrome.windows.getCurrent((w) => {
              chrome.tabs.query({ active: true, windowId: w.id! }, (tabs) => {
                chrome.tabCapture.getMediaStreamId(
                  {
                    consumerTabId: tabs[0].id!,
                  },
                  (streamId) => {
                    chrome.runtime.sendMessage({
                      type: 'RECORD_TAB',
                      streamId,
                      tabId: tabs[0].id!,
                      isRecording: !isRecording,
                    });
                  }
                );
              });
            });
          }}>
          <MdFiberManualRecord size={40} fill='red' className='icon' />
        </SideArrowButton> */}
        <Refresh onClick={refreshData}>
          <IoMdRefresh size={40} />
        </Refresh>
      </SetTop>
    </WithOutLoginWindow>
  );
};

export default LogOut;
