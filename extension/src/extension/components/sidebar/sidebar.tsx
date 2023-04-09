import {
  MdOutlinePause,
  MdPlayArrow,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md';
import { MouseEventHandler, useEffect, useState } from 'react';
import {
  getStoredPauseStatus,
  getStoredVolumeStatus,
  setStoredPauseStatus,
  setStoredVolumeStatus,
} from '../../../Utils/storage';

import { BsDiscFill } from 'react-icons/bs';
import { SideBarParent } from './sidebar.styles';
import { TbPictureInPictureOn } from 'react-icons/tb';

type props = {
  className: string;
  mid: string;
};
const Sidebar: React.FC<props> = ({ mid, className }) => {
  const [pause, setPause] = useState<boolean>(false);
  const [volume, setVolume] = useState<boolean>(true);
  const size = 25;

  useEffect(() => {
    getStoredVolumeStatus().then((res) => {
      setVolume(res);
    });
    getStoredPauseStatus().then((res) => {
      setPause(res);
    });
  }, [volume, pause]);

  const handleVideoPlay: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handlePlayer({ type: 'videoPlay' });
  };

  const handleVideoVolume: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handlePlayer({ type: 'videoVolume' });
  };

  const handlePip: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handlePlayer({ type: 'pip' });
  };

  const handlePlayer = (setting: {}) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs[0].id);
      chrome.tabs.sendMessage(tabs[0].id!, setting, function (response) {
        console.log(response, response?.data);
      });
    });
  };

  return (
    <SideBarParent className={className}>
      <div className='info'>
        <div className='disc'>
          <BsDiscFill size={size} className='discIcon' />
        </div>
        <div className='wrap'>
          <div className='title'>Currently watching track - {mid}</div>
        </div>
      </div>
      <div className='player'>
        <div
          className='status'
          onClick={(e) => {
            setPause(!pause);
            setStoredPauseStatus(!pause);
            handleVideoPlay(e);
          }}>
          {pause ? (
            <div className='play'>
              <MdPlayArrow size={size} />
            </div>
          ) : (
            <div className='pause'>
              <MdOutlinePause size={size} />
            </div>
          )}
        </div>
        <div className='pip' onClick={handlePip}>
          <TbPictureInPictureOn size={size} />
        </div>

        <div
          className='volume'
          onClick={(e) => {
            handleVideoVolume(e);
            setVolume(!volume);
            setStoredVolumeStatus(!volume);
          }}>
          {!volume ? (
            <div className='up'>
              <MdVolumeUp size={size} />
            </div>
          ) : (
            <div className='down'>
              <MdVolumeOff size={size} />
            </div>
          )}
        </div>
      </div>
    </SideBarParent>
  );
};

export default Sidebar;
