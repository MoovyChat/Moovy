import {
  MdFavoriteBorder,
  MdKeyboardBackspace,
  MdOutlineMoreHoriz,
  MdReply,
} from 'react-icons/md';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Reply, User } from '../../utils/interfaces';
import {
  useGetRepliedUserQuery,
  useGetRepliesOfReplyQuery,
  useGetReplyQuery,
} from '../../generated/graphql';
import { useNavigate, useParams } from 'react-router-dom';

import { CommentThreadParent } from './commentThread.styles';
import ProfilePic from '../../components/profilePic/profilePic';
import ReplyCard from '../../components/comment-card/replyCard';
import { getDateFormat } from '../../utils/helpers';
import { isServer } from '../../constants';

const ReplyThread = () => {
  const { id } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [commentQueyResults] = useGetReplyQuery({
    variables: { rid: id! },
    pause: isServer(),
  });
  const [commentedQueryResult] = useGetRepliedUserQuery({
    variables: { rid: id! },
    pause: isServer(),
  });
  const [repliesQueryResult] = useGetRepliesOfReplyQuery({
    variables: {
      rid: id!,
      limit: 5,
    },
  });
  const [comment, setComment] = useState<Reply>();
  const [replies, setReplies] = useState<Reply[]>();
  const [commentHeight, setCommentHeight] = useState<number>(0);
  const [replyCount, setReplyCount] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(1);
  const [commentedUser, setCommentedUser] = useState<User>();
  const backButtonHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  // Get Reply data
  useEffect(() => {
    const { data, fetching, error } = commentQueyResults;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getReply as Reply;
      setComment(_data);
    }
  }, [commentQueyResults]);

  // Get commented user data
  useEffect(() => {
    const { data, error, fetching } = commentedQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getRepliedUser as User;
      setCommentedUser(_data);
    }
  }, [commentedQueryResult]);

  // Get replies.
  useEffect(() => {
    const { data, error, fetching } = repliesQueryResult;
    if (error) console.log(error);
    if (!fetching && data) {
      const _repliesData = data.getRepliesOfReply.replies;
      const _repliesCount = data.getRepliesOfReply.repliesCount;
      const _lastPage = data.getRepliesOfReply.lastPage;
      setReplies(_repliesData);
      setReplyCount(_repliesCount);
      setLastPage(_lastPage);
    }
  }, [repliesQueryResult]);

  // Get comment height.
  useEffect(() => {
    setCommentHeight(ref.current?.clientHeight!);
  }, [ref.current]);
  return (
    <CommentThreadParent commentHeight={commentHeight}>
      <div className='comment-header'>
        <div className='back-button' onClick={backButtonHandler}>
          <MdKeyboardBackspace size={35} />
        </div>
        <div className='header-text'>Tweet</div>
      </div>
      <div className='comment-container' ref={ref}>
        <div className='comment-usr-detail'>
          <div className='user-container'>
            <div className='user'>
              <ProfilePic src={commentedUser?.photoUrl!} />
            </div>
            <div className='name'>{commentedUser?.nickname}</div>
          </div>
          <div className='options-container'>
            <div className='follow'>
              <div className='follow-btn'>Follow</div>
            </div>
            <div className='option'>
              <MdOutlineMoreHoriz className='icon' size={20} />
            </div>
          </div>
        </div>
        <div className='comment-usr-msg'>
          <div className='cm-us-xt'>{comment?.message}</div>
        </div>
        <div className='comment-usr-time'>
          {getDateFormat(comment?.createdAt)}
        </div>
        <div className='comment-usr-stats'>
          <div className='likes cus'>
            <MdFavoriteBorder size={20} />
            <div className='cmt-txt'>
              <div className='count'>{comment?.likesCount}</div>
              <div className='txt'>Likes</div>
            </div>
          </div>
          <div className='comment cus'>
            <MdReply size={20} />
            <div className='cmt-txt'>
              <div className='count'>{comment?.repliesCount}</div>
              <div className='txt'>Replies</div>
            </div>
          </div>
        </div>
      </div>
      <div className='comment-replies'>
        {replies?.map((reply) => (
          <ReplyCard comment={reply} key={`reply${reply.id!}`} />
        ))}
      </div>
    </CommentThreadParent>
  );
};

export default ReplyThread;
