import React, { MouseEventHandler } from 'react';
import {
  sliceSetIsPopupOpened,
  sliceSetPopupData,
  sliceSetSelectedElement,
} from '../../redux/slices/popupSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { CommentIcon } from './commentButton.styles';
import { MdReply } from 'react-icons/md';
import { batch } from 'react-redux';
import { popupStates } from '../../constants';

type props = {
  type: string;
  data: any;
};
const CommentButton: React.FC<props> = ({ type, data }) => {
  const dispatch = useAppDispatch();
  const isPopUpOpen = useAppSelector((state) => state.popup.isPopupOpened);
  const addCommentHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (isPopUpOpen) {
      batch(() => {
        dispatch(sliceSetIsPopupOpened(false));
        dispatch(sliceSetSelectedElement(''));
        dispatch(sliceSetPopupData({}));
      });
    } else {
      batch(() => {
        dispatch(sliceSetIsPopupOpened(true));
        if (type === 'movie') {
          dispatch(sliceSetSelectedElement(popupStates.ADD_COMMENT));
        } else if (type === 'comment')
          dispatch(sliceSetSelectedElement(popupStates.ADD_REPLY));
      });
      dispatch(sliceSetPopupData(data));
    }
  };
  return (
    <CommentIcon onClick={addCommentHandler} isOpen={isPopUpOpen}>
      <MdReply size={30} />
    </CommentIcon>
  );
};

export default CommentButton;
