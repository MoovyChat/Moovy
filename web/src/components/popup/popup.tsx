import './popup.css';

import React, { useCallback, useEffect, useRef } from 'react';
import {
  sliceSetIsPopupOpened,
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
import { PopupParent } from './popup.styles';
import ShowFollow from '../show-follow/showFollow';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';

const Popup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const dispatch = useAppDispatch();
  const selectedElemFromRedux = useAppSelector(
    (state) => state.popup.selectedElement
  );

  function handleOutSideClick(event: any) {
    if (ref && !ref.current?.contains(event.target)) {
      batch(() => {
        dispatch(sliceSetIsPopupOpened(false));
        dispatch(sliceSetSelectedElement(''));
      });
      document.removeEventListener('click', handleOutSideClick);
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
      timeout={1000}
      unmountOnExit>
      <PopupParent ref={ref}>
        <SelectedElement />
      </PopupParent>
    </CSSTransition>
  );
};

export default Popup;
