import {
  FollowerObject,
  FollowingObject,
  Movie,
  Profile,
  User,
  useGetUserMiniProfileQuery,
} from '../../generated/graphql';
import { MdCameraAlt, MdEdit } from 'react-icons/md';
import { MouseEventHandler, useEffect, useState } from 'react';
import { ProfileParent, SubGroups } from './profile.styles';
import { isServer, popupStates } from '../../constants';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ImageStack from '../../components/image-stack/imageStack';
import MovieCard from '../../components/movie-card/movieCard';
import ProfilePic from '../../components/profilePic/profilePic';
import { batch } from 'react-redux';
import { getShortDateFormat } from '../../utils/helpers';
import { sliceSetProfile } from '../../redux/slices/userProfileSlice';

const ProfileComponent = () => {
  const user = useAppSelector((state) => state.user);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [follower, setFollower] = useState<FollowerObject | null>(null);
  const [following, setFollowing] = useState<FollowingObject | null>(null);
  const [favMovies, setFavMovies] = useState<Movie[]>([]);
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [visitedMovies, setVisitedMovies] = useState<Movie[]>([]);
  const dispatch = useAppDispatch();
  const profilePicChangeHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.IMAGE_POP_UP));
    });
  };
  const [miniProfile] = useGetUserMiniProfileQuery({
    variables: {
      uid: user.id,
    },
    pause: isServer(),
  });

  useEffect(() => {
    const { error, data, fetching } = miniProfile;
    if (error) console.log(error);
    if (!fetching && data) {
      const _data = data.getFullUserProfile;
      const _profileData = _data?.profile;
      const _followerData = _data?.followers!;
      const _followingData = _data?.following!;
      const _favMoviesData = _data?.favorites?.favorites!;
      const _likedMoviesData = _data?.likes?.likes!;
      const _visitedMoviesData = _data?.history?.recentMovies!;
      setProfile(_profileData as Profile);
      dispatch(sliceSetProfile(_profileData as Profile));
      setFollower(_followerData);
      setFollowing(_followingData);
      setFavMovies(_favMoviesData);
      setLikedMovies(_likedMoviesData);
      setVisitedMovies(_visitedMoviesData);
    }
  }, [miniProfile.fetching, user]);

  const editProfileHandler: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetIsPopupOpened(true));
      dispatch(sliceSetSelectedElement(popupStates.EDIT_PROFILE));
    });
  };

  return (
    <ProfileParent>
      <div className='top'>
        <div className='cover-photo'>
          <img
            src='https://i.pinimg.com/736x/43/f4/1a/43f41accb2871c580fb630e0e8a484e8--cover-picture-cover-pics.jpg'
            alt='cover-photo'
          />
        </div>
        <div className='change-background' onClick={profilePicChangeHandler}>
          <MdCameraAlt size={18} />
          <div className='add-cover'>Add Cover Photo</div>
        </div>
        <div className='user-photo'>
          <div className='user-container'>
            <ProfilePic src={user.photoUrl!} />
            <div className='edit' onClick={profilePicChangeHandler}>
              <MdCameraAlt size={25} />
            </div>
          </div>
          <div className='user-info'>
            <div className='name'>
              <span>{user.nickname}</span>
              <span className='i' onClick={editProfileHandler}>
                <MdEdit size={18} />
              </span>
            </div>
            <div className='time'>
              Joined on {getShortDateFormat(user.joinedAt)}
            </div>
          </div>
        </div>
      </div>
      <SubGroups>
        <div className='follow'>
          <div className='followers'>
            <div className='fd'>Followers</div>
            <div className='pd'>
              <ImageStack
                followers={follower?.followers as User[]}
                count={
                  follower && follower.followerCount
                    ? follower.followerCount
                    : 0
                }
              />
            </div>
          </div>
          <div className='following'>
            <div className='fd'>Following</div>
            <div className='pd'>
              <ImageStack
                following={following?.following as User[]}
                count={
                  following && following.followingCount
                    ? following.followingCount
                    : 0
                }
              />
            </div>
          </div>
        </div>
        <div className='con'>
          <div className='history box'>
            <div className='hd'>
              <div>Recently watched</div>
              <div className='sm'>Show more</div>
            </div>
            <div className='bd'>
              {visitedMovies.map((movie) => (
                <div>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
          <div className='fav box'>
            <div className='hd'>
              <div>Favorite Titles</div>
              <div className='sm'>Show more</div>
            </div>
            <div className='bd'>
              {favMovies.map((movie) => (
                <div>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
          <div className='liked box'>
            <div className='hd'>
              <div>Liked Titles</div>
              <div className='sm'>Show more</div>
            </div>
            <div className='bd'>
              {likedMovies.map((movie) => (
                <div>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SubGroups>
    </ProfileParent>
  );
};

export default ProfileComponent;
