import {
  MdCircleNotifications,
  MdOutlineDeleteForever,
  MdPersonAdd,
  MdPersonOff,
} from 'react-icons/md';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { IconType } from 'react-icons/lib';
import { ToastParent } from './toast.styles';
import { colorLog } from '../../Utils/utilities';
import { iconsEnum } from '../../Utils/enums';
import { sliceSetToastVisible } from '../../redux/slices/toast/toastSlice';

const Toast = () => {
  const dispatch = useAppDispatch();
  const { icon, message, visible } = useAppSelector((state) => state.toast);
  const [progress, setProgress] = useState<number>(0);
  const size = 25;
  useEffect(() => {
    if (visible && progress === 100) setProgress(0);
  }, [visible]);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (visible) {
      interval = setInterval(() => {
        setProgress((progress) => progress + 1);
        if (progress === 100) {
          dispatch(sliceSetToastVisible(false));
          clearInterval(interval);
        }
      }, 10);
    } else {
      setProgress(100);
    }
    return () => {
      clearInterval(interval);
    };
  }, [visible, progress]);

  const SelectedIcon = useCallback(() => {
    switch (icon) {
      case iconsEnum.PERSON_FOLLOW:
        return <MdPersonAdd size={size} />;
      case iconsEnum.PERSON_UNFOLLOW:
        return <MdPersonOff size={size} />;
      case iconsEnum.NOTIFICATION:
        return <MdCircleNotifications size={size} />;
      case iconsEnum.DELETE_COMMENT:
        return <MdOutlineDeleteForever size={size} />;
      default:
        return <MdCircleNotifications size={size} />;
    }
  }, [icon]);

  return (
    <React.Fragment>
      <ToastParent visible={visible} progress={progress}>
        <div className='container'>
          <div className='icon'>
            <SelectedIcon />
          </div>
          <div className='msg'>{message}</div>
        </div>
      </ToastParent>
    </React.Fragment>
  );
};

export default Toast;
