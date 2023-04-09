import { CURRENT_DOMAIN, isServer } from '../../constants';
import { MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from 'react';
import {
  NotificationObject,
  useClearNotificationsMutation,
  useGetUserNotificationsQuery,
  useReadNotificationMutation,
} from '../../generated/graphql';

import ChildHeader from '../../components/childHeader/childHeader';
import EmptyPage from '../../components/empty-page/emptyPage';
import { HeaderText } from '../commentThread/commentThread.styles';
import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import NotFound from '../notFound/notFound';
import NotificationCard from './notificationCard';
import { NotificationParent } from './notification.styles';
import {ViewportList} from 'react-viewport-list';
import _ from 'lodash';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

const NotificationsModule = () => {
  const user = useAppSelector((state) => state.user);
  const listRef = useRef<any>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<any>([]);
  const [, deleteNotifications] = useClearNotificationsMutation();
  const [page, setPage] = useState<number>(1);
  const [notificationQueryResult] = useGetUserNotificationsQuery({
    variables: { uid: user.id, page: page, limit: 5 },
    pause: isServer(),
  });
  const [, readNotification] = useReadNotificationMutation();
  useEffect(() => {
    document.title = 'Notifications - Moovy';
  }, []);

  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    // Read notification.
    notifications.map((notification: any) => {
      readNotification({
        id: parseInt(notification.id),
        type:
          notification.__typename === 'LikeNotifications' ? 'like' : 'follow',
        uid: user.id,
      });
    });
  }, [notifications.length]);

  useEffect(() => {
    const { data, error, fetching } = notificationQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getUserNotifications as NotificationObject;
      const followNotifications = _data.follow as any[];
      const likeNotifications = _data.like as any[];
      let temp: any[] = [];
      const combinedNotifications = _.chain(temp)
        .concat(followNotifications as any[])
        .concat(likeNotifications as any[])
        .uniqBy('createdAt')
        .orderBy('updatedAt', 'desc')
        .value();
      setNotifications(() => combinedNotifications);
    }
  }, [notificationQueryResult]);

  const notificationClickHandler = (notification: any) => {
    //Navigation.
    if (notification.__typename === 'LikeNotifications') {
      navigate(`/comment/${notification.commentId}`);
    } else navigate(`/profile/${notification.fromUser}`);
  };

  const clearNotifications: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    deleteNotifications({ uid: user.id });
  };

  if (notificationQueryResult.fetching) return <Loading />;
  if (notificationQueryResult.error) return <NotFound />;
  return (
    <NotificationParent>
      <Helmet>
        <title>{`Moovy: Notifications`}</title>
        <meta name='description' content={`Notifications`} />
        <link rel='canonical' href={`${CURRENT_DOMAIN}/notifications}`} />
      </Helmet>
      <ChildHeader className='header'>
        <HeaderText className='heading'>
          <div>
            <span>Notifications</span>
            <span className='count'>
              {
                notifications?.filter(
                  (notification: any) => !notification.isRead
                ).length
              }
            </span>
          </div>
          {notifications.length > 0 && (
            <div className='clear' onClick={clearNotifications}>
              Clear Notifications
            </div>
          )}
        </HeaderText>
      </ChildHeader>
      {notifications.length > 0 ? (
        <div className='notifications' onScroll={handleScroll} ref={parentRef}>
          <ViewportList
            ref={listRef}
            viewportRef={parentRef}
            items={notifications}>
            {(notification: any, index: number) =>
              notification && (
                <NotificationCard
                  type={notification.__typename}
                  notification={notification}
                  key={notification.createdAt}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    notificationClickHandler(notification);
                  }}
                />
              )
            }
          </ViewportList>
        </div>
      ) : (
        <EmptyPage msg='Notifications are empty' />
      )}
    </NotificationParent>
  );
};

export default withUrqlClient(urqlClient)(NotificationsModule);
