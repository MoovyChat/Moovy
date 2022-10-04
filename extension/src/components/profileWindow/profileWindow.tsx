import {
  HiddenRadioButton,
  ProfileImage,
  ProfileParent,
  RadioButton,
} from './profileWindow.styles';
import React, { useEffect, useState } from 'react';

import NotFound from '../notFound/notFound';
import { Profile } from '../../contentScript/commentInterface/commentInterface.styles';
import { User } from '../../Utils/interfaces';
import { colorLog } from '../../Utils/utilities';
import { useAppSelector } from '../../redux/hooks';
import { useGetUserStatsByNickNameQuery } from '../../generated/graphql';

interface likedTitles {
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
  const [{ data, error, fetching }, _] = useGetUserStatsByNickNameQuery({
    variables: {
      nickname,
    },
  });
  const [userData, setUser] = useState<User>();
  const [totalCommentsCount, setTotalComments] = useState<number>(0);
  const [totalLikesCount, setTotalLikes] = useState<number>(0);
  const [totalWatchedTitle, setTotalWatched] = useState<number>(0);
  const [likedTitlesList, setLikedTitles] = useState<likedTitles[]>([]);
  const [FavTitlesList, setFavTitles] = useState<favTitles[]>([]);

  const onRadioButtonHandler: React.FormEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
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

  return (
    <ProfileParent>
      {userData ? (
        <React.Fragment>
          <div className='header'>
            <div className='profile'>
              <ProfileImage
                profilePic={userData?.photoUrl!}
                className='pic'></ProfileImage>
            </div>
            <div className='detail'>
              <div className='info'>
                <div className='name'>{userData.nickname}</div>
                <div className='clk-parent'>
                  <div className='follow clk'>Follow</div>
                  <div className='full-profile clk'>Profile</div>
                </div>
              </div>
              <div className='stats'>
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
          </div>
          <div className='feed'>
            <div className='toolbar' onChange={onRadioButtonHandler}>
              <label className='item'>
                <HiddenRadioButton type='radio' value='Liked' name='Titles' />
                <RadioButton>Liked Titles</RadioButton>
              </label>
              <label className='item'>
                <HiddenRadioButton
                  type='radio'
                  value='Favorite'
                  name='Titles'
                />
                <RadioButton>Favorite Titles</RadioButton>
              </label>
            </div>
            <div className='list'>
              {likedTitlesList.map((title) => (
                <div>{title.movieName}</div>
              ))}
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
