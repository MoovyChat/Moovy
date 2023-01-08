import {
  FollowNotifications,
  LikeNotifications,
  NotificationObject,
  useGetUserNotificationsQuery,
} from '../../generated/graphql';
import React, { useEffect, useState } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import EmptyPage from '../../components/empty-page/emptyPage';
import { HeaderText } from '../commentThread/commentThread.styles';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import NotificationCard from './notificationCard';
import { NotificationParent } from './notification.styles';
import _ from 'lodash';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const NotificationsModule = () => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<any>([]);
  const [notificationQueryResult] = useGetUserNotificationsQuery({
    variables: { uid: user.id },
    pause: isServer(),
  });
  useEffect(() => {
    document.title = 'Notifications - Moovy';
  }, []);
  useEffect(() => {
    const { data, error, fetching } = notificationQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getUserNotifications as NotificationObject;
      const followNotifications = _data.follow as FollowNotifications[];
      const likeNotifications = _data.like as LikeNotifications[];
      const combinedNotifications = _.chain(notifications)
        .concat(followNotifications)
        .concat(likeNotifications)
        .value();
      setNotifications(() => combinedNotifications);
    }
  }, [notificationQueryResult]);

  if (notificationQueryResult.fetching) return <Loading />;
  if (notificationQueryResult.error) return <NotFound />;
  return (
    <NotificationParent>
      <ChildHeader className='header'>
        <HeaderText className='heading'>
          <span>Notifications</span>
          <span className='count'>{notifications?.length}</span>
        </HeaderText>
      </ChildHeader>
      {notifications.length > 0 ? (
        <div className='notifications'>
          {notifications?.map((notification: any) => (
            <NotificationCard
              type={notification.__typename}
              notification={notification}
              key={notification.createdAt}
              onClick={(e: any) => {
                e.stopPropagation();
                if (notification.__typename === 'LikeNotifications') {
                  navigate(`/comment/${notification.commentId}`);
                } else navigate(`/profile/${notification.fromUser}`);
              }}
            />
          ))}
        </div>
      ) : (
        <EmptyPage msg='Notifications are empty' />
      )}
    </NotificationParent>
  );
};

export default withUrqlClient(urqlClient)(NotificationsModule);
