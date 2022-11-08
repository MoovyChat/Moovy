import React, { useEffect, useState } from 'react';

import { HeaderText } from '../commentThread/commentThread.styles';
import NotificationCard from './notificationCard';
import { NotificationParent } from './notification.styles';
import { Notifications } from '../../utils/interfaces';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useGetUserNotificationsQuery } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

const NotificationsModule = () => {
  const user = useAppSelector((state) => state.user);
  const [notifications, setNotifications] = useState<Notifications[]>();
  const [notificationQueryResult] = useGetUserNotificationsQuery({
    variables: { uid: user.id },
    pause: isServer(),
  });
  useEffect(() => {
    const { data, error, fetching } = notificationQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getUserNotifications as Notifications[];
      setNotifications(_data);
    }
  }, [notificationQueryResult]);
  return (
    <NotificationParent>
      <HeaderText className='heading'>
        <span>Notifications</span>
        <span className='count'>{notifications?.length}</span>
      </HeaderText>
      <div className='notifications'>
        {notifications?.map((notification) => (
          <NotificationCard
            notification={notification}
            key={notification.createdAt}
          />
        ))}
      </div>
    </NotificationParent>
  );
};

export default withUrqlClient(urqlClient)(NotificationsModule);
