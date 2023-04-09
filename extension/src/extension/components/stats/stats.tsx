import React, { useEffect, useState } from 'react';

import { StatsWindow } from './stats.styles';
import { urqlClient } from '../../../Utils/urqlClient';
import { useGetUserMutMutation } from '../../../generated/graphql';
import { withUrqlClient } from 'next-urql';

type props = {
  className: string;
  uid: string;
};
const Stats: React.FC<props> = ({ className, uid }) => {
  const [count, setCount] = useState<number>(0);
  const [watched, setWatched] = useState<number>(0);
  const [_gu, getUser] = useGetUserMutMutation();

  useEffect(() => {
    getUser({ uid }).then((res) => {
      let { data, error } = res;
      if (error) console.log(error);
      let watchedData = data?.getUserMut?.watchedMovies!;
      setWatched(watchedData?.length || 0);
    });
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

export default withUrqlClient(urqlClient)(Stats);
