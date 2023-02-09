import {
  MdCircleNotifications,
  MdOutlineDeleteForever,
  MdOutlineStar,
  MdOutlineStarBorder,
  MdPersonAdd,
  MdPersonOff,
} from 'react-icons/md';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { ToastParent } from './toast.styles';
import { iconsEnum } from '../../Utils/enums';
import { sliceSetToastVisible } from '../../redux/slices/toast/toastSlice';

const Toast = () => {
  const dispatch = useAppDispatch();
  const { icon, message, visible } = useAppSelector((state) => state.toast);
  const size = 25;
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (visible) {
      interval = setTimeout(() => {
        dispatch(sliceSetToastVisible(false));
        clearTimeout(interval);
      }, 2000);
    }
    return () => {
      clearTimeout(interval);
    };
  }, [visible]);

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
      case iconsEnum.ADD_FAVORITES:
        return <MdOutlineStar size={size} fill={accentColor} />;
      case iconsEnum.REMOVE_FAVORITES:
        return <MdOutlineStarBorder size={size} />;
      default:
        return <MdCircleNotifications size={size} />;
    }
  }, [icon]);

  return (
    <React.Fragment>
      <ToastParent visible={visible} accentColor={accentColor}>
        <div className='container'>
          <div className='fill'></div>
          <div className='toast-msg'>
            <div className='icon'>
              <SelectedIcon />
            </div>
            <div className='msg'>{message}</div>
          </div>
        </div>
      </ToastParent>
    </React.Fragment>
  );
};

export default Toast;
