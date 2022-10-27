import React, { useCallback, useEffect, useRef } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import ImageChanger from '../imageChanger/imageChanger';
import NotFound from '../../pages/notFound/notFound';
import { PopupParent } from './popup.styles';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';

const Popup = () => {
  const ref = useRef<HTMLDivElement>(null);
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
        return <ImageChanger />;
      default:
        return <NotFound />;
    }
  }, [selectedElemFromRedux]);
  return (
    <PopupParent ref={ref}>
      <SelectedElement />
    </PopupParent>
  );
};

export default Popup;
