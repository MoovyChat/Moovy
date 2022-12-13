import './popup.css';

import React, { useCallback, useEffect, useRef } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CSSTransition } from 'react-transition-group';
import EditProfile from '../edit-profile/editProfile';
import ImageChanger from '../image-changer/imageChanger';
import Loading from '../../pages/loading/loading';
import NotFound from '../../pages/notFound/notFound';
import { PopupParent } from './popup.styles';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';

const Popup = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isPopupOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const dispatch = useAppDispatch();
  const selectedElemFromRedux = useAppSelector(
    (state) => state.popup.selectedElement
  );
  useEffect(() => {
    function handleOutSideClick(event: any) {
      if (ref && !ref.current?.contains(event.target)) {
        batch(() => {
          dispatch(sliceSetIsPopupOpened(false));
          dispatch(sliceSetSelectedElement(''));
        });
      }
    }
    document.addEventListener('click', handleOutSideClick);
    return () => {
      document.removeEventListener('click', handleOutSideClick);
    };
  }, [ref]);
  const SelectedElement = useCallback(() => {
    switch (selectedElemFromRedux) {
      case popupStates.IMAGE_POP_UP:
        return <ImageChanger type='pfp' />;
      case popupStates.EDIT_PROFILE:
        return <EditProfile />;
      case popupStates.BG_POP_UP:
        return <ImageChanger type='bg' />;
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
