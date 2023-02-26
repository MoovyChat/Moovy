import { LikesWindowStyle, StyledUserCard } from './likesWindow.styles';
import { MOOVY_URL, isServerSide } from '../../constants';
import React, {
  MouseEventHandler,
  UIEventHandler,
  useMemo,
  useState,
} from 'react';
import {
  useGetCommentLikesQuery,
  useGetReplyLikesQuery,
} from '../../generated/graphql';

import FollowButton from '../follow-button/followButton';
import _ from 'lodash';
import { urqlClient } from '../../Utils/urqlClient';
import { useAppSelector } from '../../redux/hooks';
import { withUrqlClient } from 'next-urql';

interface MiniUser {
  __typename?: 'Users' | undefined;
  id: string;
  name: string;
  nickname: string;
  photoUrl: string;
}
const LikesWindow = () => {
  const _data = useAppSelector((state) => state.settings.popSlideData);
  const commentId = _data.data.id as string;
  // type is either 'comment' or 'reply'
  const type = _data.data.type as string;
  const [users, setUsers] = useState<MiniUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [commentLikes] = useGetCommentLikesQuery({
    variables: {
      cid: commentId,
      limit: 10,
      page: page,
    },
    pause: isServerSide(),
  });
  const [replyLikes] = useGetReplyLikesQuery({
    variables: {
      rid: commentId,
      limit: 10,
      page: page,
    },
    pause: isServerSide(),
  });

  useMemo(() => {
    if (type !== 'comment') return;
    const { data, error, fetching } = commentLikes;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getCommentLikes.likes!;
      const _lastPage = data.getCommentLikes.lastPage;
      let newData = _.chain(users).concat(_data).uniqBy('id').value();
      setUsers(() => newData);
      setLastPage(() => _lastPage);
    }
  }, [commentLikes]);

  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((page) => page + 1);
      }
    }
  };

  useMemo(() => {
    if (type !== 'reply') return;
    const { data, error, fetching } = replyLikes;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getReplyLikes.likes!;
      const _lastPage = data.getReplyLikes.lastPage!;
      let newData = _.chain(users).concat(_data).uniqBy('id').value();
      setUsers(() => newData);
      setLastPage(() => _lastPage);
    }
  }, [replyLikes]);
  if (users.length === 0) return <div>No Data</div>;
  return (
    <LikesWindowStyle className='likes-window' onScroll={handleScroll}>
      {users.map((user) => (
        <UserCard user={user}></UserCard>
      ))}
    </LikesWindowStyle>
  );
};

type props = {
  user: MiniUser;
};
const UserCard: React.FC<props> = ({ user }) => {
  const goToUser: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    let url = `${MOOVY_URL}/profile/${user.nickname}`;
    chrome.runtime.sendMessage({
      type: 'OPEN_LINK',
      url: url,
    });
  };
  return (
    <StyledUserCard onClick={goToUser}>
      <div className='user-container'>
        <div className='profile-pic'>
          <img src={user.photoUrl} alt='pfp' />
        </div>
        <div className='name'>{user.nickname}</div>
      </div>
      <FollowButton userId={user.id} nickName={user.nickname} />
    </StyledUserCard>
  );
};

export default withUrqlClient(urqlClient)(LikesWindow);
