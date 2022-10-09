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
  useAmIFollowingThisUserQuery,
  useGetUserStatsByNickNameQuery,
  useToggleFollowMutation,
} from '../../generated/graphql';

import { MdOutlineAccountCircle } from 'react-icons/md';
import MovieMini from '../miniCards/movieMini/movieMini';
import NotFound from '../notFound/notFound';
import { Profile } from '../../contentScript/commentInterface/commentInterface.styles';
import { User } from '../../Utils/interfaces';
import { colorLog } from '../../Utils/utilities';
import { useAppSelector } from '../../redux/hooks';

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
  const nickname = useAppSelector((state) => state.settings.popSlideNickName);
  const loggedInUser = useAppSelector((state) => state.user);
  const [userData, setUser] = useState<User>();
  const [{ data, error, fetching }, _] = useGetUserStatsByNickNameQuery({
    variables: {
      nickname,
    },
  });
  const [totalCommentsCount, setTotalComments] = useState<number>(0);
  const [totalLikesCount, setTotalLikes] = useState<number>(0);
  const [totalWatchedTitle, setTotalWatched] = useState<number>(0);
  const [likedTitlesList, setLikedTitles] = useState<likedTitles[]>([]);
  const [FavTitlesList, setFavTitles] = useState<favTitles[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<string>('liked');
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  //GraphQL
  const [userFollowStatus, _uf] = useAmIFollowingThisUserQuery({
    variables: {
      uid: loggedInUser.uid!,
      fid: userData?.uid!,
    },
  });
  const [_sf, toggleFollow] = useToggleFollowMutation();

  const onRadioButtonHandler: React.FormEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    const target = e.target as any;
    setSelectedRadio(target.value);
  };

  useEffect(() => {
    if (error) colorLog(error);
    if (!fetching && data && data.getUserStatistics) {
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
    const { data, error, fetching } = userFollowStatus;
    // TODO: Remove this logging.
    if (error) colorLog(error);
    if (!fetching && data) {
      const res = data.amIFollowingThisUser;
      if (res) setIsFollowing(res);
    }
  }, [userFollowStatus.fetching, fetching]);

  const toggleFollowHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    toggleFollow({
      uid: userData?.uid!,
      followerId: loggedInUser.uid!,
      follow: !isFollowing,
    }).then((res) => {
      const { error, data } = res;
      if (error) colorLog(error);
      const isFollowingRes = data?.toggleFollow?.follows;
      if (isFollowingRes !== null && isFollowingRes !== undefined) {
        setIsFollowing(isFollowingRes);
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
              {loggedInUser.uid !== userData.uid ? (
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

export default ProfileWindow;
