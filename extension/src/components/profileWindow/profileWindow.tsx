import {
  HiddenRadioButton,
  NoTitles,
  ProfileImage,
  ProfileParent,
  RadioButton,
} from './profileWindow.styles';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import {
  sliceSetToastBody,
  sliceSetToastVisible,
} from '../../redux/slices/toast/toastSlice';
import {
  useAmIFollowingThisUserMutation,
  useGetUserStatsQuery,
  useToggleFollowMutation,
} from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { MdOutlineAccountCircle } from 'react-icons/md';
import MovieMini from '../miniCards/movieMini/movieMini';
import NotFound from '../notFound/notFound';
import { User } from '../../Utils/interfaces';
import { batch } from 'react-redux';
import { colorLog } from '../../Utils/utilities';
import { iconsEnum } from '../../Utils/enums';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

export interface likedTitles {
  __typename?: 'LikedMovieObject' | undefined;
  movieMid: string;
  userUid: string;
  like: boolean;
  movieName: string;
}

interface favTitles {
  __typename?: 'FavMovieObject' | undefined;
  favorite: boolean;
  movieName: string;
  movieMid: string;
  userUid: string;
}

const ProfileWindow = () => {
  const userId = useAppSelector((state) => state.settings.popSlideUserId);
  const loggedInUserId = useAppSelector((state) => state.user.uid);
  const [userData, setUser] = useState<User>();
  const [{ data, error, fetching }, _] = useGetUserStatsQuery({
    variables: {
      uid: userId,
    },
  });
  const [totalCommentsCount, setTotalComments] = useState<number>(0);
  const [totalLikesCount, setTotalLikes] = useState<number>(0);
  const [totalWatchedTitle, setTotalWatched] = useState<number>(0);
  const [likedTitlesList, setLikedTitles] = useState<likedTitles[]>([]);
  const [FavTitlesList, setFavTitles] = useState<favTitles[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<string>('liked');
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  //Redux
  const dispatch = useAppDispatch();

  const onRadioButtonHandler: React.FormEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as any;
    setSelectedRadio(target.value);
  };

  //GraphQL
  const [_ufs, amIFollowingThisUser] = useAmIFollowingThisUserMutation();
  const [_sf, toggleFollow] = useToggleFollowMutation();

  useEffect(() => {
    colorLog('Profile window');
  }, []);

  useEffect(() => {
    if (error) colorLog(error);
    if (!fetching && data && data.getUserStatistics) {
      colorLog(data);
      const {
        user,
        favTitles,
        likedTitles,
        totalComments,
        totalLikes,
        totalWatched,
      } = data.getUserStatistics;
      setUser(user!);
      setTotalComments(totalComments ? totalComments : 0);
      setTotalLikes(totalLikes ? totalLikes : 0);
      setTotalWatched(totalWatched ? totalWatched : 0);
      setLikedTitles(likedTitles ? likedTitles : []);
      setFavTitles(favTitles ? favTitles : []);
    }
  }, [fetching]);

  useEffect(() => {
    amIFollowingThisUser({
      uid: loggedInUserId,
      fid: userId,
    }).then((res) => {
      const { error, data } = res;
      if (error) colorLog(error);
      if (data) {
        const res = data.amIFollowingThisUser;
        if (res) setIsFollowing(res);
      }
    });
  }, []);

  const toggleFollowHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    toggleFollow({
      uid: userId,
      followerId: loggedInUserId,
      follow: !isFollowing,
    }).then((res) => {
      const { error, data } = res;
      if (error) colorLog(error);
      const isFollowingRes = data?.toggleFollow?.follows;
      let icon = '';
      let message = '';
      if (isFollowingRes !== null && isFollowingRes !== undefined) {
        setIsFollowing(isFollowingRes);
        if (isFollowingRes) {
          icon = iconsEnum.PERSON_FOLLOW;
          message = `You are following ${userData?.nickname!}`;
        } else {
          icon = iconsEnum.PERSON_UNFOLLOW;
          message = `You un-followed ${userData?.nickname!}`;
        }
        batch(() => {
          dispatch(sliceSetToastVisible(true));
          dispatch(sliceSetToastBody({ icon, message }));
        });
      }
    });
  };

  return (
    <ProfileParent className='mini-profile'>
      {userData ? (
        <React.Fragment>
          <div className='header'>
            <div className='account'>
              <MdOutlineAccountCircle size={25} />
            </div>
            <div className='profile'>
              <ProfileImage profilePic={userData?.photoUrl!} className='pic' />
              {loggedInUserId !== userId ? (
                <div className='heart' onClick={toggleFollowHandler}>
                  {isFollowing ? (
                    <IoMdHeart size={35} fill='red' />
                  ) : (
                    <IoMdHeartEmpty size={35} />
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className='detail'>
              <div className='info'>
                <div className='name'>{userData.nickname}</div>
                <div className='bio'>
                  Brief info goes here. This is just an example but it should
                  all fit in this space. Uniform and clean. Using more text to
                  simulate overall look
                </div>
              </div>
            </div>
          </div>
          <div className='stats'>
            <div className='container'>
              <div className='section watched-movies'>
                <div className='heading'>Titles</div>
                <div className='count'>{totalWatchedTitle}</div>
              </div>
              <div className='section total-comments'>
                <div className='heading'>Comments</div>
                <div className='count'>{totalCommentsCount}</div>
              </div>
              <div className='section total-likes'>
                <div className='heading'>Likes</div>
                <div className='count'>{totalLikesCount}</div>
              </div>
            </div>
          </div>
          <div className='feed'>
            <div className='toolbar' onChange={onRadioButtonHandler}>
              <label className='item'>
                <HiddenRadioButton
                  type='radio'
                  value='liked'
                  name='Titles'
                  defaultChecked={selectedRadio === 'liked'}
                />
                <RadioButton>Liked Titles</RadioButton>
              </label>
              <label className='item'>
                <HiddenRadioButton
                  type='radio'
                  value='fav'
                  name='Titles'
                  defaultChecked={selectedRadio === 'fav'}
                />
                <RadioButton>Favorite Titles</RadioButton>
              </label>
            </div>
            <div className='list'>
              {selectedRadio === 'liked' ? (
                likedTitlesList.length > 0 ? (
                  likedTitlesList.map((title) => (
                    <MovieMini title={title.movieName} id={title.movieMid} />
                  ))
                ) : (
                  <NoTitles>No Titles Found</NoTitles>
                )
              ) : FavTitlesList.length > 0 ? (
                FavTitlesList.map((title) => (
                  <MovieMini title={title.movieName} id={title.movieMid} />
                ))
              ) : (
                <NoTitles>No Titles Found</NoTitles>
              )}
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NotFound type='profile' />
        </React.Fragment>
      )}
    </ProfileParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(ProfileWindow);
