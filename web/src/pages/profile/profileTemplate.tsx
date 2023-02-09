import { MdCameraAlt, MdEdit } from 'react-icons/md';
import {
  MouseEventHandler,
  UIEventHandler,
  useMemo,
  useRef,
  useState,
} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Profile, User, useGetUserProfileQuery } from '../../generated/graphql';

import ChildHeader from '../../components/childHeader/childHeader';
import FollowButton from '../../components/follow-button/followButton';
import { Image } from '../../components/Image/image';
import NavLinks from '../../components/nav-links/navLinks';
import { ProfileParent } from './profile.styles';
import ProfilePic from '../../components/profilePic/profilePic';
import { getShortDateFormat } from '../../utils/helpers';

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
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [profileQuery] = useGetUserProfileQuery({
    variables: { uid: user.id },
  });

  useMemo(() => {
    const { error, data } = profileQuery;
    if (error) console.log(error);
    if (data) {
      const _data = data.getUserProfile! as Profile;
      setProfile(_data);
    }
  }, [profileQuery]);

  const profileScrollHandler: UIEventHandler<HTMLDivElement> = (e) => {
    if (ref && ref.current) {
      const scrollValue = ref.current!.scrollTop;
      setScrollValue(() => scrollValue);
    }
  };

  let headerTitle = scrollValue > 40 ? `${user?.nickname}` : 'Profile';
  return (
    <ProfileParent
      ref={ref}
      onScroll={profileScrollHandler}
      id='profile-parent'>
      <ChildHeader text={headerTitle} className='comment-header' />
      <div className='top'>
        <div className='cover-photo'>
          <Image
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
              <div className='follow'>
                <FollowButton userId={user.id} nickName={user.nickname} />
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
