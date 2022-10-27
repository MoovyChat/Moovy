import { MdMenu, MdOutlineClose } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { HomeHeaderParent } from './homeHeader.styles';
import QCLogo from '../../static/images/qc.png';
import { sliceSetNavBar } from '../../redux/slices/miscSlice';
import useIsAuth from '../../utils/isAuthUser';

type props = {
  className: string;
};
const HomeHeader: React.FC<props> = ({ className }) => {
  useIsAuth();
  const isNavBarOpen = useAppSelector((state) => state.misc.isNavBarOpen);
  const dispatch = useAppDispatch();
  const navBarHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetNavBar(!isNavBarOpen));
  };
  const user = useAppSelector((state) => state.user);
  return (
    <HomeHeaderParent className={className}>
      <div className='logo'>
        <div className='logo-image'>
          <img className='image' src={QCLogo} alt='QuietChat' />
        </div>
        <div className='logo-icon' onClick={navBarHandler}>
          {isNavBarOpen ? (
            <MdOutlineClose className='icon' size={20} />
          ) : (
            <MdMenu className='icon' size={20} />
          )}
        </div>
      </div>

      <div className='stats'>
        <div className='inner'>
          <div className='front side'>
            <div className='follower one'>
              <div className='text'>
                Quiet Chat<sup>&reg;</sup>
              </div>
            </div>
          </div>
          <div className='back side'>
            <div className='likes one'>
              <div className='count'>10</div>
              <div className='text'>likes</div>
            </div>
            <div className='comment one'>
              <div className='count'>12</div>
              <div className='text'>comments</div>
            </div>
            <div className='comment one'>
              <div className='count'>{user.watchedMovies?.length}</div>
              <div className='text'>titles</div>
            </div>
            <div className='comment one'>
              <div className='count'>{user.followingCount!}</div>
              <div className='text'>following</div>
            </div>
            <div className='comment one'>
              <div className='count'>{user.followerCount!}</div>
              <div className='text'>followers</div>
            </div>
          </div>
        </div>
      </div>
      <div className='user'>
        <div className='logo-image'>
          <img className='image' src={user.photoUrl} alt='user' />
        </div>
      </div>
    </HomeHeaderParent>
  );
};

export default HomeHeader;
