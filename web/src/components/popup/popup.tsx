import './popup.css';

import {
  AddCommentTypes,
  DeleteCommentTypes,
  ImageChangerTypes,
} from '../../utils/types';
import FocusLock from 'react-focus-lock';
import { PopupParent, StyledPopUP } from './popup.styles';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useCallback, useRef } from 'react';

import AddComment from '../add-comment/addComment';
import { CSSTransition } from 'react-transition-group';
import DeleteComment from '../delete-comment/deleteComment';
import EditProfile from '../edit-profile/editProfile';
import ImageChanger from '../image-changer/imageChanger';
import ShowFollow from '../show-follow/showFollow';
import ShowLikes from '../show-follow/showLikes';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';
import { sliceSetTextAreaMessage } from '../../redux/slices/textAreaSlice';
import ThemeWindow from '../open-theme/themeWindow';
import SearchBar from '../search-bar/searchBar';

const Popup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isPopupOpen = useAppSelector(state => state.popup.isPopupOpened);
  const dispatch = useAppDispatch();
  const selectedElemFromRedux = useAppSelector(
    state => state.popup.selectedElement,
  );

  function handleOutSideClick(e: any) {
    let target = e.target as HTMLDivElement;
    if (target.id === 'popup-parent') {
      batch(() => {
        dispatch(sliceSetIsPopupOpened(false));
        dispatch(sliceSetSelectedElement(''));
        dispatch(sliceSetPopupData(null));
        dispatch(sliceSetTextAreaMessage(''));
      });
    }
  }
  document.addEventListener('click', handleOutSideClick);

  const SelectedElement = useCallback(() => {
    switch (selectedElemFromRedux) {
      case popupStates.IMAGE_POP_UP:
        return <ImageChanger type={ImageChangerTypes.PFP} />;
      case popupStates.EDIT_PROFILE:
        return <EditProfile />;
      case popupStates.BG_POP_UP:
        return <ImageChanger type={ImageChangerTypes.BG} />;
      case popupStates.ADD_COMMENT:
        return <AddComment type={AddCommentTypes.MOVIE} />;
      case popupStates.ADD_REPLY:
        return <AddComment type={AddCommentTypes.COMMENT} />;
      case popupStates.OPEN_FOLLOW:
        return <ShowFollow />;
      case popupStates.OPEN_LIKES:
        return <ShowLikes />;
      case popupStates.OPEN_THEME:
        return <ThemeWindow />;
      case popupStates.OPEN_SEARCH:
        return <SearchBar />;
      case popupStates.DELETE_COMMENT:
        return <DeleteComment type={DeleteCommentTypes.COMMENT} />;
      case popupStates.DELETE_REPLY:
        return <DeleteComment type={DeleteCommentTypes.REPLY} />;
      default:
        return <div></div>;
    }
  }, [selectedElemFromRedux]);
  return (
    <CSSTransition
      classNames="alert"
      in={isPopupOpen}
      nodeRef={ref}
      timeout={500}
      unmountOnExit
    >
      <StyledPopUP id="popup-parent" ref={ref}>
        <FocusLock returnFocus>
          <PopupParent id="popup-child">
            <SelectedElement />
          </PopupParent>
        </FocusLock>
      </StyledPopUP>
    </CSSTransition>
  );
};

export default Popup;
