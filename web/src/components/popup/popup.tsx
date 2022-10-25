import React, { useCallback } from 'react';

import ImageChanger from '../imageChanger/imageChanger';
import NotFound from '../../pages/notFound/notFound';
import { PopupParent } from './popup.styles';
import { popupStates } from '../../constants';
import { useAppSelector } from '../../redux/hooks';

const Popup = () => {
  const selectedElemFromRedux = useAppSelector(
    (state) => state.popup.selectedElement
  );
  const SelectedElement = useCallback(() => {
    switch (selectedElemFromRedux) {
      case popupStates.IMAGE_POP_UP:
        return <ImageChanger />;
      default:
        return <NotFound />;
    }
  }, [selectedElemFromRedux]);
  return (
    <PopupParent>
      <SelectedElement />
    </PopupParent>
  );
};

export default Popup;
