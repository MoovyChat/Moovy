import {
  FollowerObject,
  FollowingObject,
  Movie,
  Profile,
  User,
  useGetUserMiniProfileQuery,
  useIsFollowingUserQuery,
  useToggleFollowMutation,
} from '../../generated/graphql';
import {
  MdCameraAlt,
  MdEdit,
  MdFemale,
  MdMale,
  MdOutlineCake,
  MdOutlineContacts,
} from 'react-icons/md';
import {
  MouseEventHandler,
  UIEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { NoTitle, ProfileParent, SubGroups } from './profile.styles';
import { ParsedText, getShortDateFormat } from '../../utils/helpers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ChildHeader from '../../components/childHeader/childHeader';
import ImageStack from '../../components/image-stack/imageStack';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import NotFound from '../notFound/notFound';
import ProfilePic from '../../components/profilePic/profilePic';
import _ from 'lodash';
import { isServer } from '../../constants';
import { sliceSetProfile } from '../../redux/slices/userProfileSlice';

type props = {
  user: User;
  currentUser: User;
  bgChangeHandler?: MouseEventHandler<HTMLDivElement>;
  profilePicChangeHandler?: MouseEventHandler<HTMLDivElement>;
  editProfileHandler?: MouseEventHandler<HTMLSpanElement>;
  isDifferentUser: boolean;
};
const ProfileTemplate: React.FC<props> = ({
  user,
  bgChangeHandler,
  profilePicChangeHandler,
  editProfileHandler,
  isDifferentUser,
  currentUser,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const profileFromRedux = useAppSelector((state) => state.profile);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [follower, setFollower] = useState<FollowerObject | null>(null);
  const [following, setFollowing] = useState<FollowingObject | null>(null);
  const [favMovies, setFavMovies] = useState<Movie[]>([]);
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [visitedMovies, setVisitedMovies] = useState<Movie[]>([]);
  const dispatch = useAppDispatch();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const [dobInTime, setDOBInTime] = useState<string>('');
  const [scrollValue, setScrollValue] = useState<number>(0);

  const [, toggleFollow] = useToggleFollowMutation();

  const [miniProfile] = useGetUserMiniProfileQuery({
    variables: {
      uid: user.id,
    },
    pause: isDifferentUser
      ? isServer()
      : isServer() && _.isEqual(profile, profileFromRedux),
  });

  const [amIFollowingUser] = useIsFollowingUserQuery({
    variables: { uid: currentUser.id, fid: user.id },
    pause: isDifferentUser
      ? isServer()
      : isServer() && _.isEqual(profile, profileFromRedux),
  });

  useMemo(() => {
    const { data, error, fetching } = amIFollowingUser;
    if (error) console.log(error);
    console.log(data);
    if (!fetching && data) {
      const _data = data.isFollowingUser as boolean;
      setIsFollowing(() => _data);
    }
  }, [amIFollowingUser]);

  useMemo(() => {
    if (!profile) return;
    if (!profile.dob) setDOBInTime('');
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
      dispatch(sliceSetProfile(_profileData as Profile));
      setFollower(_followerData);
      setFollowing(_followingData);
      setFavMovies(_favMoviesData);
      setLikedMovies(_likedMoviesData);
      setVisitedMovies(_visitedMoviesData);
    }
  }, [miniProfile.fetching, user.id]);

  const profileScrollHandler: UIEventHandler<HTMLDivElement> = (e) => {
    if (ref && ref.current) {
      const scrollValue = ref.current!.scrollTop;
      setScrollValue(() => scrollValue);
    }
  };

  const toggleFollowHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
    toggleFollow({
      uid: currentUser.id,
      followingId: user.id,
      follow: !isFollowing,
    });
  };

  if (miniProfile.fetching) {
    return <Loading />;
  }

  if (!miniProfile.fetching && !miniProfile) {
    return <NotFound />;
  }

  let headerTitle = scrollValue > 40 ? `${user?.nickname}` : 'Profile';
  let followStatus = isFollowing ? 'Following' : 'Follow';
  return (
    <ProfileParent ref={ref} onScroll={profileScrollHandler}>
      <ChildHeader text={headerTitle} className='comment-header' />
      <div className='top'>
        <div className='cover-photo'>
          <img
            src={`${
              user.bg
                ? user.bg
                : 'https://i.pinimg.com/736x/43/f4/1a/43f41accb2871c580fb630e0e8a484e8--cover-picture-cover-pics.jpg'
            }`}
            alt='cover-photo'
          />
        </div>
        {!isDifferentUser && (
          <div className='change-background' onClick={bgChangeHandler}>
            <MdCameraAlt size={18} />
            <div className='add-cover'>Add Cover Photo</div>
          </div>
        )}
        <div className='user-photo'>
          <div className='user-container'>
            <ProfilePic
              src={user.photoUrl!}
              user={user as User}
              tooltip={true}
            />
            {!isDifferentUser && (
              <div className='edit' onClick={profilePicChangeHandler}>
                <MdCameraAlt size={25} />
              </div>
            )}
          </div>
          <div className='user-info'>
            <div className='name'>
              <span className='main'>
                {profile?.firstname} {profile?.lastname}
              </span>
              <span className='us'>@{user.nickname}</span>
              {!isDifferentUser && (
                <span className='i' onClick={editProfileHandler}>
                  <MdEdit size={18} />
                </span>
              )}
            </div>
            <div className='time'>
              Joined on {getShortDateFormat(user?.joinedAt as string)}
            </div>
            {isDifferentUser && (
              <div className='follow' onClick={toggleFollowHandler}>
                {followStatus}
              </div>
            )}
          </div>
        </div>
      </div>
      {miniProfile.fetching ? (
        <Loading />
      ) : (
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
                {profile && profile.bio
                  ? ParsedText(profile.bio)
                  : 'Not Specified'}
              </div>
            </div>
          </div>
          <div className='follow'>
            <div className='followers'>
              <div className='fd'>Followers</div>
              <div className='pd'>
                <ImageStack
                  user={user}
                  followers={follower?.followers as User[]}
                  count={user.followerCount ? user.followerCount : 0}
                />
              </div>
            </div>
            <div className='following'>
              <div className='fd'>Following</div>
              <div className='pd'>
                <ImageStack
                  user={user}
                  following={following?.following as User[]}
                  count={user.followingCount ? user.followingCount : 0}
                />
              </div>
            </div>
          </div>
          <div className='con'>
            <div className='history box'>
              <div className='hd'>
                <div>Recently watched</div>
                {visitedMovies.length > 0 && (
                  <div className='sm'>Show more</div>
                )}
              </div>
              {visitedMovies.length > 0 ? (
                <div className='bd'>
                  {visitedMovies.map((movie) => (
                    <div key={movie.id}>
                      <MovieCard movie={movie} />
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
                {favMovies.length > 0 && <div className='sm'>Show more</div>}
              </div>
              {favMovies.length > 0 ? (
                <div className='bd'>
                  {favMovies.map((movie) => (
                    <div key={movie.id}>
                      <MovieCard movie={movie} />
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
                {likedMovies.length > 0 && <div className='sm'>Show more</div>}
              </div>
              {likedMovies.length > 0 ? (
                <div className='bd'>
                  {likedMovies.map((movie) => (
                    <div key={movie.id}>
                      <MovieCard movie={movie} />
                    </div>
                  ))}
                </div>
              ) : (
                <NoTitle>No titles</NoTitle>
              )}
            </div>
          </div>
        </SubGroups>
      )}
    </ProfileParent>
  );
};

export default ProfileTemplate;
