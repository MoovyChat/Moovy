import { MouseEventHandler, UIEventHandler, useEffect, useState } from 'react';
import {
  Users,
  useGetCommentLikesQuery,
  useGetReplyLikesQuery,
} from '../../generated/graphql';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { MdClose } from 'react-icons/md';
import { ShowFollowParent } from './show.styles';
import { UserCard } from './userCard';
import { batch } from 'react-redux';
import { isServer } from '../../constants';

const ShowLikes = () => {
  const popup = useAppSelector((state) => state.popup);
  const commentId = (popup.popupData as any).data as string;
  const type = (popup.popupData as any).type;
  const isReply = (popup.popupData as any).isReply as boolean;
  const dispatch = useAppDispatch();
  const [users, setLikedUsers] = useState<Users[]>([]);
  const [likesCount, setLikesCount] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [commentLikeCountQuery, _executeQuery] = useGetCommentLikesQuery({
    variables: {
      cid: commentId,
      limit: 10,
      page: page,
    },
    pause: isServer() && isReply,
  });

  const [replyLikeQuery] = useGetReplyLikesQuery({
    variables: {
      rid: commentId!,
      limit: 10,
      page: page,
    },
    pause: isServer() && !isReply,
  });

  useEffect(() => {
    if (isReply) return;
    const { data, fetching, error } = commentLikeCountQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _count = data.getCommentLikes?.likesCount!;
      const _users = data.getCommentLikes?.likes;
      const _lastPage = data.getCommentLikes.lastPage!;
      setLastPage(_lastPage);
      setLikedUsers(_users! as Users[]);
      setLikesCount(_count);
    }
  }, [commentLikeCountQuery]);

  useEffect(() => {
    if (!isReply) return;
    const { data, fetching, error } = replyLikeQuery;
    if (error) console.log(error);
    if (!fetching && data) {
      const _count = data.getReplyLikes?.likesCount!;
      const _users = data.getReplyLikes?.likes;
      const _lastPage = data.getReplyLikes.lastPage!;
      setLastPage(_lastPage);
      setLikedUsers(_users! as Users[]);
      setLikesCount(_count);
    }
  }, [replyLikeQuery]);

  const closeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetPopupData(null));
    });
  };

  // Scroll handler.
  const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((page) => page + 1);
      }
    }
  };

  return (
    <ShowFollowParent>
      <div className='follow-head'>
        <span>
          {likesCount} {type}
        </span>
        <div className='close' onClick={closeHandler}>
          <MdClose size={25} />
        </div>
      </div>
      <div className='users-container' onScroll={handleScroll}>
        {users && users.map((user) => <UserCard user={user} />)}
      </div>
    </ShowFollowParent>
  );
};

export default ShowLikes;
