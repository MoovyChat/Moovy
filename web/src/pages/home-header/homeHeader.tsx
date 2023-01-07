import { MdMenu, MdOutlineClose } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { HomeHeaderParent } from './homeHeader.styles';
import MoovyLogo from '../../svgs/moovy-white.svg';
import SearchBar from '../../components/search-bar/searchBar';
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
          <img className='image' src={MoovyLogo} alt='QuietChat' />
        </div>
        <div className='logo-icon' onClick={navBarHandler}>
          {isNavBarOpen ? (
            <MdOutlineClose className='icon' size={20} />
          ) : (
            <MdMenu className='icon' size={20} />
          )}
        </div>
      </div>
      <SearchBar />
      <div className='user'>
        <div className='logo-image'>
          <img className='image' src={user.photoUrl} alt='user' />
        </div>
      </div>
    </HomeHeaderParent>
  );
};

export default HomeHeader;
