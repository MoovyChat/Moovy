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
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { NoTitle, ProfileParent, SubGroups } from './profile.styles';
import { ParsedText, getShortDateFormat } from '../../utils/helpers';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ChildHeader from '../../components/childHeader/childHeader';
import ImageStack from '../../components/image-stack/imageStack';
import Loading from '../loading/loading';
import MovieCard from '../../components/movie-card/movieCard';
import NavLinks from '../../components/nav-links/navLinks';
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
  const dispatch = useAppDispatch();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
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
      <div className='sub-division'>
        {isDifferentUser && (
          <NavLinks>
            <NavLink to='' end defaultChecked>
              <div>Basic</div>
            </NavLink>
            <NavLink to='comments'>
              <div>Comments</div>
            </NavLink>
            <NavLink to='replies'>
              <div>Replies</div>
            </NavLink>
          </NavLinks>
        )}
        <Outlet />
      </div>
    </ProfileParent>
  );
};

export default ProfileTemplate;
