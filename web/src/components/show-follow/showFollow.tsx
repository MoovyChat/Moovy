import { MouseEventHandler, UIEventHandler, useEffect, useState } from 'react';
import {
  Users,
  useGetFollowersQuery,
  useGetFollowingsQuery,
} from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { MdClose } from 'react-icons/md';
import { ShowFollowParent } from './show.styles';
import { UserCard } from './userCard';
import { isServer } from '../../constants';
import { sliceResetPopup } from '../../redux/slices/popupSlice';

const ShowFollow = () => {
  const popup = useAppSelector(state => state.popup);
  const userId = (popup.popupData as any).data as string;
  const type = (popup.popupData as any).type;
  const isFollower = (popup.popupData as any).isFollower as boolean;
  console.log({ userId, type, isFollower });
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<Users[]>([]);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [followerQuery] = useGetFollowersQuery({
    variables: {
      uid: userId,
      page: page,
      limit: 10,
    },
    pause: isServer() && !isFollower,
  });
  const [followingQuery] = useGetFollowingsQuery({
    variables: {
      uid: userId,
      page: page,
      limit: 10,
    },
    pause: isServer() && isFollower,
  });

  useEffect(() => {
    if (!isFollower) return;
    const { data, fetching, error } = followerQuery;
    console.log(data);
    if (error) console.log(error);
    if (!fetching && data) {
      const _followers = data.getFollowers?.followers!;
      setUsers(() => _followers);
      setPage(p => p + 1);
      setLastPage(() => data.getFollowers?.lastPage!);
      setUsersCount(() => data.getFollowers?.count!);
    }
  }, [followerQuery.fetching]);

  useEffect(() => {
    if (isFollower) return;
    const { data, fetching, error } = followingQuery;
    console.log(data);
    if (error) console.log(error);
    if (!fetching && data) {
      const _followings = data.getFollowings?.followings!;
      setUsers(() => _followings);
      setPage(p => p + 1);
      setLastPage(() => data.getFollowings?.lastPage!);
      setUsersCount(() => data.getFollowings?.count!);
    }
  }, [followingQuery.fetching]);

  const closeHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    dispatch(sliceResetPopup());
  };

  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage(page => page + 1);
      }
    }
  };

  return (
    <ShowFollowParent>
      <div className="follow-head">
        <span>
          {usersCount} {type}
        </span>
        <div className="close" onClick={closeHandler}>
          <MdClose size={25} />
        </div>
      </div>
      <div className="users-container" onScroll={handleScroll}>
        {users && users.map(user => <UserCard user={user} />)}
      </div>
    </ShowFollowParent>
  );
};

export default ShowFollow;
