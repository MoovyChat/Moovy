import './popup.css';

import { PopupParent, StyledPopUP } from './popup.styles';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import AddComment from '../add-comment/addComment';
import { CSSTransition } from 'react-transition-group';
import DeleteComment from '../delete-comment/deleteComment';
import EditProfile from '../edit-profile/editProfile';
import ImageChanger from '../image-changer/imageChanger';
import Loading from '../../pages/loading/loading';
import NotFound from '../../pages/notFound/notFound';
import ShowFollow from '../show-follow/showFollow';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';
import { sliceSetTextAreaMessage } from '../../redux/slices/textAreaSlice';

const Popup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const dispatch = useAppDispatch();
  const selectedElemFromRedux = useAppSelector(
    (state) => state.popup.selectedElement
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
        return <ImageChanger type='pfp' />;
      case popupStates.EDIT_PROFILE:
        return <EditProfile />;
      case popupStates.BG_POP_UP:
        return <ImageChanger type='bg' />;
      case popupStates.ADD_COMMENT:
        return <AddComment type='movie' />;
      case popupStates.ADD_REPLY:
        return <AddComment type='comment' />;
      case popupStates.OPEN_FOLLOW:
        return <ShowFollow />;
      case popupStates.DELETE_COMMENT:
        return <DeleteComment type='comment' />;
      case popupStates.DELETE_REPLY:
        return <DeleteComment type='reply' />;
      default:
        return <div></div>;
    }
  }, [selectedElemFromRedux]);
  return (
    <CSSTransition
      classNames='alert'
      in={isPopupOpen}
      nodeRef={ref}
      timeout={500}
      unmountOnExit>
      <StyledPopUP id='popup-parent' ref={ref}>
        <PopupParent id='popup-child'>
          <SelectedElement />
        </PopupParent>
      </StyledPopUP>
    </CSSTransition>
  );
};

export default Popup;