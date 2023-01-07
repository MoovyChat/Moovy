import {
  FollowerObject,
  FollowingObject,
  Profile,
  User,
  useGetUserMiniProfileQuery,
  useGetUserQuery,
  useToggleFollowMutation,
} from '../../generated/graphql';
import { MOOVY_URL, isServerSide } from '../../constants';
import {
  MdFemale,
  MdMale,
  MdOutlineCake,
  MdOutlineContacts,
} from 'react-icons/md';
import React, {
  MouseEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { getFormattedNumber, getShortDateFormat } from '../../Utils/utilities';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import FollowButton from '../follow-button/followButton';
import { ProfileParent } from './profileWindow.styles';
import { urqlClient } from '../../Utils/urqlClient';
import { withUrqlClient } from 'next-urql';

export interface likedTitles {
  __typename?: 'LikedMovieObject' | undefined;
  movieId: string;
  userId: string;
  like: boolean;
  movieName: string;
}

interface favTitles {
  __typename?: 'Movie' | undefined;
  id: string;
  name: string;
  stills?: string | null | undefined;
  thumbs?: string | null | undefined;
  season?: string | null | undefined;
  year?: number | null | undefined;
  runtime?: number | null | undefined;
  platformId: number;
  titleId: string;
  parentTitleName?: string | null | undefined;
}

const ProfileWindow = () => {
  const userId = useAppSelector((state) => state.settings.popSlideUserId);
  const [userBasicInfo, setUserBasic] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [follower, setFollower] = useState<FollowerObject | null>(null);
  const [following, setFollowing] = useState<FollowingObject | null>(null);
  const [favMovies, setFavMovies] = useState<favTitles[]>([]);
  const [likedMovies, setLikedMovies] = useState<favTitles[]>([]);
  const [visitedMovies, setVisitedMovies] = useState<favTitles[]>([]);
  const [historyCount, setHistoryCount] = useState<number>(0);
  const [likedMoviesCount, setLikedMoviesCount] = useState<number>(0);
  const [favMoviesCount, setFavMoviesCount] = useState<number>(0);
  const [dobInTime, setDOBInTime] = useState<string>('');

  const [userData] = useGetUserQuery({
    variables: { uid: userId },
    pause: isServerSide(),
  });
  const [miniProfile] = useGetUserMiniProfileQuery({
    variables: {
      uid: userId,
    },
    pause: isServerSide(),
  });

  useMemo(() => {
    const { data, error, fetching } = userData;
    if (!fetching && data) {
      const _data = data?.getUser as User;
      setUserBasic(() => _data);
    }
  }, [userData]);

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
      const _historyCount = _data?.history?.historyCount!;
      const _likedMoviesCount = _data?.likes?.likesCount!;
      const _favoriteMoviesCount = _data?.favorites?.favCount!;
      setHistoryCount(() => _historyCount);
      setLikedMoviesCount(() => _likedMoviesCount);
      setFavMoviesCount(() => _favoriteMoviesCount);
      setProfile(_profileData as Profile);
      setFollower(() => _followerData);
      setFollowing(() => _followingData);
      setFavMovies(() => _favMoviesData);
      setLikedMovies(() => _likedMoviesData);
      setVisitedMovies(() => _visitedMoviesData);
    }
  }, [miniProfile.fetching, userId]);

  const goToProfile: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    let profileUrl = `${MOOVY_URL}/profile/${userBasicInfo?.nickname}`;
    chrome.runtime.sendMessage({
      type: 'OPEN_LINK',
      url: profileUrl,
    });
  };
  if (userData?.fetching || miniProfile?.fetching) return <div>Loading...</div>;
  if (!userBasicInfo)
    return <div>Unexpected Error. Please try refreshing the extension.</div>;
  return (
    <ProfileParent className='mini-profile'>
      <React.Fragment>
        <div className='profile-header'>
          <div className='bg'>
            <img src={userBasicInfo?.bg as string} alt='bg' />
          </div>
          <FollowButton
            userId={userBasicInfo?.id!}
            nickName={userBasicInfo?.nickname!}
          />

          <div className='profile-pic'>
            <img src={userBasicInfo?.photoUrl! as string} alt='dp' />
          </div>
          <div className='name' onClick={goToProfile}>
            <div className='fullName p'>{`${profile?.firstname} ${profile?.lastname}`}</div>
            <div className='nickName p'>@{userBasicInfo?.nickname}</div>
            <div className='nickname p'>{`${getFormattedNumber(
              userBasicInfo?.followerCount as number
            )} Followers ${getFormattedNumber(
              userBasicInfo?.followingCount as number
            )} Following`}</div>
          </div>
        </div>
        <div className='pro'>
          <div className='block'>
            <div className='icon'>
              <MdOutlineCake size={25} />
            </div>
            <div className='info'>
              {dobInTime === '' ? 'Not Specified' : dobInTime}
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
              {profile && profile.bio ? profile.bio : 'Not Specified'}
            </div>
          </div>
        </div>
        <div className='movies'>
          <div className='title'>History</div>
          <div className='list'>
            {visitedMovies.length > 0 ? (
              visitedMovies.map((movie) => (
                <div className='movie' key={movie.id}>
                  <img src={movie.thumbs as string} alt='movie' />
                </div>
              ))
            ) : (
              <div>No Titles</div>
            )}
          </div>
        </div>
        <div className='movies'>
          <div className='title'>Favorite Titles</div>
          <div className='list'>
            {favMovies.length > 0 ? (
              favMovies.map((movie) => (
                <div className='movie' key={movie.id}>
                  <img src={movie.thumbs as string} alt='movie' />
                </div>
              ))
            ) : (
              <div>No Titles</div>
            )}
          </div>
        </div>
        <div className='movies'>
          <div className='title'>Liked Titles</div>
          <div className='list'>
            {likedMovies.length > 0 ? (
              likedMovies.map((movie) => (
                <div className='movie' key={movie.id}>
                  <img src={movie.thumbs as string} alt='movie' />
                </div>
              ))
            ) : (
              <div>No Titles</div>
            )}
          </div>
        </div>
      </React.Fragment>
    </ProfileParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(ProfileWindow);
