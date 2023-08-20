import { LeftParent, StyledLinks, StyledNavLink } from './leftPanel.styles';
import {
  MdDynamicFeed,
  MdFavorite,
  MdModeComment,
  MdNightlight,
  MdNotificationsActive,
  MdOutlineReply,
  MdOutlineWbSunny,
  MdPerson,
  MdStorage,
} from 'react-icons/md';
import React, { MouseEventHandler, useEffect, useRef } from 'react';
import { batch, useDispatch } from 'react-redux';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../../redux/slices/popupSlice';
import { FaMicrophoneLines } from 'react-icons/fa6';
import { sliceSetNavBar } from '../../../redux/slices/miscSlice';
import { useAppSelector } from '../../../redux/hooks';
import ListCard from '../../../components/list-card/listCard';

type props = {
  className: string;
};
const LeftPanel: React.FC<props> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const user = useAppSelector(state => state.user);
  const dispatch = useDispatch();

  const iconSize = 25;
  // log changed data
  useEffect(() => {
    // console.log(user.photoUrl);
  }, [user.photoUrl]);

  useEffect(() => {
    function handleOutSideClick(event: any) {
      if (ref && !ref.current?.contains(event.target)) {
        dispatch(sliceSetNavBar(false));
      }
    }
    document.addEventListener('click', handleOutSideClick);
    return () => {
      document.removeEventListener('click', handleOutSideClick);
    };
  }, [ref]);

  const linkClickHandler: MouseEventHandler<HTMLAnchorElement> = e => {
    batch(() => {
      dispatch(sliceSetIsPopupOpened(false));
      dispatch(sliceSetSelectedElement(''));
      dispatch(sliceSetNavBar(false));
    });
  };
  return (
    <LeftParent className={className} ref={ref}>
      <div className="left-parent-options">
        <StyledNavLink to="/home" end onClick={linkClickHandler}>
          <div className="icon feed">
            <MdDynamicFeed size={iconSize} />
          </div>
          <div className="panel-text">Feed</div>
        </StyledNavLink>
        <StyledNavLink to="catalog" onClick={linkClickHandler}>
          <div className="icon catalog">
            <MdStorage size={iconSize} />
          </div>
          <div className="panel-text">Catalog</div>
        </StyledNavLink>
        <StyledNavLink
          to={`profile/${user.nickname}`}
          onClick={linkClickHandler}
        >
          <div className="icon p">
            <MdPerson size={iconSize} />
          </div>
          <div className="panel-text">Profile</div>
        </StyledNavLink>
        <StyledNavLink
          to={`activity/${user.nickname}/favorites`}
          onClick={linkClickHandler}
        >
          <div className="icon favorites">
            <MdFavorite size={iconSize} />
          </div>
          <div className="panel-text">Favorites</div>
        </StyledNavLink>
        <StyledNavLink
          to={`comments/${user.nickname}`}
          onClick={linkClickHandler}
        >
          <div className="icon comments">
            <MdModeComment size={iconSize} />
          </div>
          <div className="panel-text">Comments</div>
        </StyledNavLink>
        <StyledNavLink
          to={`replies/${user.nickname}`}
          onClick={linkClickHandler}
        >
          <div className="icon replies">
            <MdOutlineReply size={iconSize} />
          </div>
          <div className="panel-text">Replies</div>
        </StyledNavLink>
        <StyledNavLink to={`nests`} onClick={linkClickHandler}>
          <div className="icon nests">
            <FaMicrophoneLines size={iconSize} />
          </div>
          <div className="panel-text">Nests</div>
        </StyledNavLink>
        <StyledNavLink to="notifications" onClick={linkClickHandler}>
          <div className="icon notifications">
            <MdNotificationsActive size={iconSize} />
          </div>
          <div className="panel-text">Notifications</div>
        </StyledNavLink>
      </div>
      {/* <ListCard title="Web Nests">
        <></>
      </ListCard>
      <ListCard title="Moovy Nest">
        <></>
      </ListCard> */}
      {/* <StyledLinks>
        <div
          onClick={e => {
            e.stopPropagation();
            window.open('/terms-and-conditions', '_blank');
          }}
        >
          Terms of Service
        </div>
        <div
          onClick={e => {
            e.stopPropagation();
            window.open('/privacy', '_blank');
          }}
        >
          Privacy Policy
        </div>
        <div
          onClick={e => {
            e.stopPropagation();
            window.open('/cookie-policy', '_blank');
          }}
        >
          Cookie Policy
        </div>
        <div
          onClick={e => {
            e.stopPropagation();
            window.open('/about-us', '_blank');
          }}
        >
          About us
        </div>
        <div
          onClick={e => {
            e.stopPropagation();
            window.open('/contact', '_blank');
          }}
        >
          Contact us
        </div>
        <div>© {new Date().getFullYear()} MoovyChat.</div>
      </StyledLinks> */}
    </LeftParent>
  );
};

export default LeftPanel;
