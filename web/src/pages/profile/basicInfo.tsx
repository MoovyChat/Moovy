import {
  FollowerObject,
  FollowingObject,
  Movie,
  Profile,
  Users,
  useGetUserByNickNameQuery,
  useGetUserMiniProfileQuery,
} from '../../generated/graphql';
import {
  MdFemale,
  MdMale,
  MdOutlineCake,
  MdOutlineContacts,
} from 'react-icons/md';
import { NoTitle, SubGroups } from './profile.styles';
import { ParsedText, getShortDateFormat } from '../../utils/helpers';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate, useParams } from 'react-router-dom';

import ImageStack from '../../components/image-stack/imageStack';
import MovieCard from '../../components/movie-card/movieCard';
import _ from 'lodash';
import { isServer } from '../../constants';
import { sliceSetProfile } from '../../redux/slices/userProfileSlice';

const BasicInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<Users | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [follower, setFollower] = useState<FollowerObject | null>(null);
  const [following, setFollowing] = useState<FollowingObject | null>(null);
  const [favMovies, setFavMovies] = useState<Movie[]>([]);
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [visitedMovies, setVisitedMovies] = useState<Movie[]>([]);
  const [dobInTime, setDOBInTime] = useState<string>('');
  const userFromRedux = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const isDifferentUser = id !== userFromRedux.nickname;
  const [{ error, fetching, data }] = useGetUserByNickNameQuery({
    variables: { nickname: id! },
    pause: isServer(),
  });
  const [miniProfile] = useGetUserMiniProfileQuery({
    variables: {
      uid: user?.id!,
    },
    pause: isServer(),
  });

  useEffect(() => {
    if (error) console.log(error);
    if (data) setUser(data?.getUserByUserName as Users);
  }, [fetching, id]);

  useMemo(() => {
    if (!profile) return;
    if (!profile.dob) {
      setDOBInTime('');
      return;
    }
    let UTCTimeString = (profile.dob as string).split('-').join('/');
    let dobTimeString = getShortDateFormat(
      new Date(UTCTimeString).getTime().toString()
    );
    if (dobTimeString) setDOBInTime(dobTimeString);
  }, [profile?.dob]);

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
      if (!isDifferentUser) dispatch(sliceSetProfile(_profileData as Profile));
      setFollower(_followerData);
      setFollowing(_followingData);
      setFavMovies(_favMoviesData);
      setLikedMovies(_likedMoviesData);
      setVisitedMovies(_visitedMoviesData);
    }
  }, [miniProfile, user?.id]);

  return (
    <SubGroups>
      <div className='pro'>
        <div className='block'>
          <div className='icon'>
            <MdOutlineCake size={25} />
          </div>
          <div className='info'>
            {dobInTime === '' ? 'Not Specified' : ParsedText(dobInTime)}
          </div>
        </div>

        {profile && profile.gender && (
          <div className='block'>
            <div className='icon'>
              {profile?.gender === 'male' ? (
                <MdMale size={25} />
              ) : (
                <MdFemale size={25} />
              )}
            </div>
            <div className='info'>
              {profile && profile.gender
                ? profile.gender.charAt(0).toUpperCase() +
                  profile.gender.slice(1)
                : 'Not Specified'}
            </div>
          </div>
        )}
        <div className='block'>
          <div className='icon'>
            <MdOutlineContacts size={25} />
          </div>
          <div className='info'>
            {profile && profile.bio ? ParsedText(profile.bio) : 'Not Specified'}
          </div>
        </div>
      </div>
      <div className='follow'>
        <div className='followers'>
          <div className='fd'>Followers</div>
          <div className='pd'>
            {user && (
              <ImageStack
                user={user}
                followers={follower?.followers as Users[]}
                count={user.followerCount ? user.followerCount : 0}
              />
            )}
          </div>
        </div>
        <div className='following'>
          <div className='fd'>Following</div>
          <div className='pd'>
            {user && (
              <ImageStack
                user={user}
                following={following?.following as Users[]}
                count={user.followingCount ? user.followingCount : 0}
              />
            )}
          </div>
        </div>
      </div>
      <div className='con'>
        <div className='history box'>
          <div className='hd'>
            <div>Recently watched</div>
            {visitedMovies.length > 0 && (
              <div
                className='sm'
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/activity/${user?.nickname}/history`);
                }}>
                Show more
              </div>
            )}
          </div>
          {visitedMovies.length > 0 ? (
            <div className='bd'>
              {visitedMovies.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movieId={movie.id} />
                </div>
              ))}
            </div>
          ) : (
            <NoTitle>No titles</NoTitle>
          )}
        </div>
        <div className='fav box'>
          <div className='hd'>
            <div>Favorite Titles</div>
            {favMovies.length > 0 && (
              <div
                className='sm'
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/activity/${user?.nickname}/favorites`);
                }}>
                Show more
              </div>
            )}
          </div>
          {favMovies.length > 0 ? (
            <div className='bd'>
              {favMovies.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movieId={movie.id} />
                </div>
              ))}
            </div>
          ) : (
            <NoTitle>No titles</NoTitle>
          )}
        </div>
        <div className='liked box'>
          <div className='hd'>
            <div>Liked Titles</div>
            {likedMovies.length > 0 && (
              <div
                className='sm'
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/activity/${user?.nickname}/liked`);
                }}>
                Show more
              </div>
            )}
          </div>
          {likedMovies.length > 0 ? (
            <div className='bd'>
              {likedMovies.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movieId={movie.id} />
                </div>
              ))}
            </div>
          ) : (
            <NoTitle>No titles</NoTitle>
          )}
        </div>
      </div>
    </SubGroups>
  );
};

export default BasicInfo;
