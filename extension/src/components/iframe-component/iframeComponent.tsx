import { MouseEventHandler, useEffect, useState } from 'react';
import {
  useAdminNotificationsSubscription,
  useGetLatestAdminNotificationQuery,
} from '../../generated/graphql';

import { IoCloseCircle } from 'react-icons/io5';
import { MOOVY_URL } from '../../constants';
import { MdInfo } from 'react-icons/md';
import { StyledIFrameComponent } from './iframe.styles';
import localStorage from 'redux-persist/es/storage';
import { useAppSelector } from '../../redux/hooks';

const IFrameComponent = () => {
  const [adminQuery] = useGetLatestAdminNotificationQuery();
  const [{ data, error, fetching }] = useAdminNotificationsSubscription();
  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  const LOCAL_STORAGE_KEY = 'adminNotifications';
  useEffect(() => {
    const { data, fetching, error } = adminQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getLatestAdminNotification;
      const _latestId = _data.id;
      const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
      localData.then((res) => {
        if (res) {
          const parsedData = JSON.parse(res);
          const read = parsedData.read;
          const _id = parsedData.id;
          // If latest notification exist in the localStorage, use the local storage data.
          if (_id === _latestId) {
            if (!read) setIsTriggered(() => true);
            else setIsTriggered(() => false);
          } else {
            // Add the new notification to the local storage.
            const _id = _data.id;
            let status = { id: _id, read: false };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(status));
            setIsTriggered(() => true);
          }
        } else {
          const _id = _data.id;
          let status = { id: _id, read: false };
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(status));
          setIsTriggered(() => true);
        }
      });
    }
  }, [adminQuery]);

  useEffect(() => {
    if (error) console.log(error);
    if (!fetching && data) {
      setIsTriggered(() => true);
      const _data = data.adminNotifications;
      const _id = _data.id;
      let status = { id: _id, read: false };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(status));
      setIsTriggered(() => true);
    }
  }, [data, error, fetching]);
  const closeHandler: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    localData.then((res) => {
      if (res) {
        const parsedData = JSON.parse(res);
        let status = { id: parsedData.id, read: true };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(status));
        setIsTriggered(() => false);
      } else {
        setIsTriggered(() => false);
      }
    });
  };
  const url = `${MOOVY_URL}/embedded-content`;
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  return (
    <StyledIFrameComponent isTriggered={isTriggered}>
      <div className='heading'>
        <h3>
          <MdInfo fill={accentColor} size={20} />
          <span>Message from server</span>
        </h3>
        <IoCloseCircle size={20} fill={accentColor} onClick={closeHandler} />
      </div>
      <iframe src={url} />
    </StyledIFrameComponent>
  );
};

export default IFrameComponent;
