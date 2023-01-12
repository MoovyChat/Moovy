import MiniCommentCard from '../../components/mini-comment-card/miniCommentCard';
import { NotificationCardParent } from './notification.styles';
import ProfilePic from '../../components/profilePic/profilePic';
import React from 'react';
import { getTimeFrame } from '../../utils/helpers';

type props = {
  notification: any;
  onClick: any;
  type: string;
};
const NotificationCard: React.FC<props> = ({ notification, onClick, type }) => {
  return (
    <NotificationCardParent onClick={onClick}>
      <div className='first'>
        <div className='profile-pic'>
          <ProfilePic src={notification.fromUserPhotoUrl} tooltip={true} />
        </div>
        <div className='message'>
          {!notification.isRead && <span className='new'>New</span>}
          <span>{notification.message}</span>
        </div>
        <div className='timestamp'>{getTimeFrame(notification.createdAt!)}</div>
      </div>
      <div className='second'>
        {type === 'LikeNotifications' && (
          <MiniCommentCard
            id={notification.commentId}
            type='comment'
            className='mini'
          />
        )}
      </div>
    </NotificationCardParent>
  );
};

export default NotificationCard;
