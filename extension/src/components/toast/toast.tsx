import {
  MdCheck,
  MdCircleNotifications,
  MdOutlineDeleteForever,
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineWbSunny,
  MdPersonAdd,
  MdPersonOff,
  MdReport,
} from 'react-icons/md';
import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { IoMdMoon } from 'react-icons/io';
import { ToastParent } from './toast.styles';
import { iconsEnum } from '../../Utils/enums';
import { sliceSetToastVisible } from '../../redux/slices/toast/toastSlice';
import { useSpring } from '@react-spring/web';

const Toast = () => {
  const dispatch = useAppDispatch();
  const { icon, message, visible } = useAppSelector((state) => state.toast);
  const size = 25;
  const accentcolor = useAppSelector((state) => state.misc.accentColor);
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
        return <MdOutlineStar size={size} fill={accentcolor} />;
      case iconsEnum.REMOVE_FAVORITES:
        return <MdOutlineStarBorder size={size} />;
      case iconsEnum.SUCCESS:
        return <MdCheck size={size} />;
      case iconsEnum.ERROR:
        return <MdReport size={size} />;
      case iconsEnum.DARK:
        return <IoMdMoon size={size} />;
      case iconsEnum.LIGHT:
        return <MdOutlineWbSunny size={size} />;
      default:
        return <MdCircleNotifications size={size} />;
    }
  }, [icon]);

  const animationProps = useSpring({
    bottom: visible ? '0px' : '-60px',
    config: { tension: 300, friction: 15 },
  });

  return (
    <React.Fragment>
      <ToastParent
        visible={visible.toString()}
        accentcolor={accentcolor}
        style={{ bottom: animationProps.bottom }}
      >
        <div className="container">
          <div className="fill"></div>
          <div className="toast-msg">
            <div className="icon">
              <SelectedIcon />
            </div>
            <div className="msg">{message}</div>
          </div>
        </div>
      </ToastParent>
    </React.Fragment>
  );
};

export default Toast;
