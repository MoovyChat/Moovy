import {
  CommentThreadParent,
  HeaderText,
  StyledButton,
} from './commentThread.styles';
import {
  MdFavoriteBorder,
  MdKeyboardBackspace,
  MdOutlineMoreHoriz,
  MdReply,
} from 'react-icons/md';
import {
  Movie,
  Title,
  useGetMovieQuery,
  useGetTitleInfoMutation,
} from '../../generated/graphql';
import React, {
  MouseEventHandler,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Reply, User } from '../../utils/interfaces';

import ChildHeader from '../../components/childHeader/childHeader';
import MovieInfo from '../../components/comment-card/movieInfo';
import ProfilePic from '../../components/profilePic/profilePic';
import ReplyCard from '../../components/comment-card/replyCard';
import { getDateFormat } from '../../utils/helpers';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { withUrqlClient } from 'next-urql';

type props = {
  type: string;
  comment: any;
  replies: any;
  userRef: MutableRefObject<User | null>;
};

const CommentTemplate: React.FC<props> = ({
  type,
  comment,
  replies,
  userRef,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [movieDetails] = useGetMovieQuery({
    variables: {
      mid: comment?.movieId!,
    },
    pause: isServer(),
  });
  const movieRef = useRef<Movie | null>(null);
  const titleRef = useRef<Title | null>(null);
  const [, getTitleInfo] = useGetTitleInfoMutation();
  const loggedInUser = useAppSelector((state) => state.user);
  const [showEpisodeInfo, setShowEpisodeInfo] = useState<boolean>(false);
  const [showTitleInfo, setShowTitleInfo] = useState<boolean>(false);

  // Get movie Info
  useEffect(() => {
    const { data, error, fetching } = movieDetails;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getMovie as Movie;
      movieRef.current = _data;
      getTitleInfo({ getTitleInfoId: _data.titleId }).then((titleInfo) => {
        const { data, error } = titleInfo;
        if (error) console.log(error);
        if (data) {
          const _data = data.getTitleInfo as Title;
          titleRef.current = _data;
        }
      });
    }
  }, [movieDetails]);

  const backButtonHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(-1);
  };

  const onEpisodeEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowEpisodeInfo(true);
  };
  const onEpisodeLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowEpisodeInfo(false);
  };

  const onTitleEnter: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowTitleInfo(true);
  };
  const onTitleLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowTitleInfo(false);
  };

  return (
    <CommentThreadParent
      showEpisodeInfo={showEpisodeInfo}
      showTitleInfo={showTitleInfo}
      movieBg={movieRef.current?.stills as string}
      titleBg={titleRef.current?.boxart as string}>
      <ChildHeader className='comment-header' text={type} />
      <div className='comment-container' ref={ref}>
        <div className='inner'>
          <div className='comment-usr-detail'>
            <div className='user-container'>
              <div className='user'>
                <ProfilePic src={userRef.current?.photoUrl!} />
              </div>
              <div className='name'>{userRef.current?.nickname}</div>
            </div>
            <div className='options-container'>
              {userRef.current?.nickname !== loggedInUser.nickname && (
                <div className='follow'>
                  <StyledButton className='follow-btn' color='#de1328'>
                    Follow
                  </StyledButton>
                </div>
              )}

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
          <div className='movie-chips'>
            {titleRef && titleRef.current?.type === 'show' && (
              <React.Fragment>
                <div
                  className='name title'
                  onMouseEnter={onTitleEnter}
                  onMouseLeave={onTitleLeave}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}>
                  {titleRef.current?.title} {movieRef.current?.season}
                </div>
              </React.Fragment>
            )}
            <div
              className='name'
              onMouseEnter={onEpisodeEnter}
              onMouseLeave={onEpisodeLeave}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/movie/${movieRef?.current?.id}`);
              }}>
              {movieRef.current?.name}
            </div>
          </div>
          <div className='show-details'>
            <div className='bg'>
              {showEpisodeInfo ? (
                <img
                  key='episode'
                  src={movieRef.current?.stills as string}
                  alt='background-image'
                />
              ) : showTitleInfo ? (
                <img
                  key='title'
                  src={titleRef.current?.artwork as string}
                  alt='background-image'
                />
              ) : (
                <img
                  src='https://png.pngtree.com/thumb_back/fh260/background/20210316/pngtree-black-abstract-fluorescent-line-background-image_587942.jpg'
                  alt='background-image'
                />
              )}
            </div>
            {showEpisodeInfo ? (
              <MovieInfo movie={movieRef.current!} />
            ) : (
              showTitleInfo && <MovieInfo title={titleRef.current!} />
            )}
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
          <div className='comment-replies'>
            {replies?.length! > 0 ? (
              replies?.map((reply: Reply) => (
                <ReplyCard
                  comment={reply}
                  key={`reply${reply.id!}`}
                  isMain={true}
                />
              ))
            ) : (
              <>No Replies yet</>
            )}
          </div>
        </div>
      </div>
    </CommentThreadParent>
  );
};

export default withUrqlClient(urqlClient)(CommentTemplate);
