import { NotificationCardParent } from './notification.styles';
import { Notifications } from '../../utils/interfaces';
import ProfilePic from '../../components/profilePic/profilePic';
import React from 'react';
import { getTimeFrame } from '../../utils/helpers';

type props = {
  notification: Notifications;
};
const NotificationCard: React.FC<props> = ({ notification }) => {
  return (
    <NotificationCardParent isRead={notification.isRead}>
      <div className='profile-pic'>
        <ProfilePic src={notification.fromUserPhotoUrl} tooltip={true} />
      </div>
      <div className='message'>
        {!notification.isRead && <span className='new'>New</span>}
        <span>{notification.message}</span>
      </div>
      <div className='timestamp'>{getTimeFrame(notification.createdAt!)}</div>
    </NotificationCardParent>
  );
};

export default NotificationCard;
