import React, { useCallback, useEffect, useState } from 'react';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
  sliceSetPopSlideLikes,
  sliceSetPopSlideUserId,
} from '../../redux/slices/settings/settingsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import EmojiPicker from '../emojiPicker/emojiPicker';
import { IoMdCloseCircle } from 'react-icons/io';
import LikesWindow from '../likesWindow/likesWindow';
import { PopSlideParent } from './popSlide.styles';
import ProfileWindow from '../profileWindow/profileWindow';
import VideoStyles from '../../contentScript/videoStyles/videoStyles';
import { batch } from 'react-redux';

const PopSlide = () => {
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState<any>({});
  const isPopSlideOpen = useAppSelector(
    (state) => state.settings.isPopSlideOpen
  );
  const PopSlideContentType = useAppSelector(
    (state) => state.settings.popSlideContentType
  );
  const popSlideContentLikes = useAppSelector(
    (state) => state.settings.popSlideLikes
  );

  const closePopSlide: React.MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetPopSlide(false));
      dispatch(sliceSetPopSlideLikes([]));
      dispatch(sliceSetPopSlideUserId(''));
      dispatch(slicePopSlideContentType(''));
    });
  };

  useEffect(() => {
    switch (PopSlideContentType) {
      case 'likes':
        let ex = {
          title: 'Likes',
          subTitle: `${
            popSlideContentLikes && popSlideContentLikes.length
          } likes`,
        };
        setInputs(ex);
        break;
      case 'smiley':
        let smiles = {
          title: 'Smiley',
          subTitle: 'Quick Chat',
        };
        setInputs(smiles);
        break;
      case 'video-styles':
        let styles = {
          title: 'Paint',
          subTitle: 'Video styles ',
        };
        setInputs(styles);
        break;
      case 'profile':
        let profile = {
          title: 'Profile',
          subTitle: 'Brief info',
        };
        setInputs(profile);
        break;
      default:
        let defaults = {
          title: 'Title',
          subTitle: 'SubTitle',
        };
        setInputs(defaults);
    }
  }, [PopSlideContentType]);

  const SelectedElement = useCallback(() => {
    switch (PopSlideContentType) {
      case 'likes':
        return <LikesWindow />;
      case 'smiley':
        return <EmojiPicker />;
      case 'video-styles':
        return <VideoStyles />;
      case 'profile':
        return <ProfileWindow />;
      default:
        return (
          <div>
            <div>Unrecognized selection</div>
            <div>Please report this bug to us</div>
          </div>
        );
    }
  }, [PopSlideContentType]);

  return (
    <PopSlideParent isPopSlideOpen={isPopSlideOpen} className='pop-slide'>
      <div className='header'>
        <div className='section'>
          <div className='title'>{inputs.title}</div>
          <div className='sub'>{inputs.subTitle}</div>
        </div>
        <IoMdCloseCircle
          className='close-icon'
          size={20}
          onClick={closePopSlide}
        />
      </div>
      <div className='content'>
        <SelectedElement />
      </div>
    </PopSlideParent>
  );
};

export default PopSlide;
