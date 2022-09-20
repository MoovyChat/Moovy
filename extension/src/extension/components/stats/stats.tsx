import React, { useEffect, useState } from 'react';

import { StatsWindow } from './stats.styles';
import { Unsubscribe } from 'firebase/firestore';
import { User } from '../../../Utils/interfaces';
import { getUser } from '../../../firebase-api/user';

type props = {
  className: string;
  uid: string;
};
const Stats: React.FC<props> = ({ className, uid }) => {
  const [count, setCount] = useState<number>(0);
  const [watched, setWatched] = useState<number>(0);

  useEffect(() => {
    let unSub: Unsubscribe;
    getUser(uid).then((res) => {
      let data = res[0] as User;
      let watchedData = data.watched;
      setWatched(watchedData?.length || 0);
      unSub = res[1] as Unsubscribe;
    });
    return () => {
      if (unSub) unSub();
    };
  }, [uid]);

  useEffect(() => {
    let start = 0;
    let watchCount = watched;
    let timer = setInterval(() => {
      setCount(start);
      start += 1;
      if (start === watchCount) {
        setCount(start);
        clearInterval(timer);
      }
    }, watchCount / 100);

    return () => {
      clearInterval(timer);
    };
  }, [watched]);

  return (
    <StatsWindow className={className}>
      <div className='title'>Tracks</div>
      <div className='count'>{count}</div>
    </StatsWindow>
  );
};

export default Stats;
