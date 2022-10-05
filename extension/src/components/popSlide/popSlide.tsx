import { LikesUserView, PopSlideParent } from './popSlide.styles';
import React, { useCallback, useEffect, useState } from 'react';
import {
  slicePopSlideContentType,
  sliceSetPopSlide,
  sliceSetPopSlideLikes,
  sliceSetPopSlideNickName,
} from '../../redux/slices/settings/settingsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import EmojiPicker from '../emojiPicker/emojiPicker';
import { IoMdCloseCircle } from 'react-icons/io';
import NotFound from '../notFound/notFound';
import { Pic } from '../../extension/components/logout/logout.styles';
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
  const closePopSlide: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    batch(() => {
      dispatch(sliceSetPopSlide(false));
      dispatch(sliceSetPopSlideLikes([]));
      dispatch(sliceSetPopSlideNickName(''));
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
        return (
          <React.Fragment>
            {popSlideContentLikes.length !== 0 ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                {popSlideContentLikes.map((user: any) => (
                  <LikesUserView key={user?.uid}>
                    <div className='pic'>
                      <Pic photoURL={user?.photoUrl}></Pic>
                    </div>
                    <div className='nick'>{user.nickname}</div>
                  </LikesUserView>
                ))}
              </div>
            ) : (
              <React.Fragment>
                <NotFound type='likes' />
              </React.Fragment>
            )}
          </React.Fragment>
        );
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
        <div className='close' onClick={closePopSlide}>
          <IoMdCloseCircle className='close-icon' size={20} />
        </div>
      </div>
      <div className='content'>
        <SelectedElement />
      </div>
    </PopSlideParent>
  );
};

export default PopSlide;
