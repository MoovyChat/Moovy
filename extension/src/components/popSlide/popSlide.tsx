import { LikesUserView, PopSlideParent } from './popSlide.styles';
import React, { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { IoMdCloseCircle } from 'react-icons/io';
import { Pic } from '../../extension/components/logout/logout.styles';
import { sliceSetPopSlide } from '../../redux/slices/settings/settingsSlice';

const PopSlide = () => {
  const dispatch = useAppDispatch();
  const [inputs, setInputs] = useState<any>({});
  const PopSlideContentType = useAppSelector(
    (state) => state.settings.popSlideContentType
  );
  const popSlideContentLikes = useAppSelector(
    (state) => state.settings.popSlideLikes
  );
  const closePopSlide: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    dispatch(sliceSetPopSlide(false));
  };

  useEffect(() => {
    let ex = {
      title: PopSlideContentType === 'likes' ? 'Likes' : 'Title',
      subTitle:
        PopSlideContentType === 'likes'
          ? `${popSlideContentLikes && popSlideContentLikes.length} likes`
          : 'SubTitle',
    };
    setInputs(ex);
  }, []);
  return (
    <PopSlideParent>
      <div className='header'>
        <div className='section'>
          <div className='title'>{inputs.title}</div>
          <div className='sub'>{inputs.subTitle}</div>
        </div>
        <div className='close' onClick={closePopSlide}>
          <IoMdCloseCircle className='close-icon' size={20} color='white' />
        </div>
      </div>
      <div className='content'>
        {PopSlideContentType === 'likes' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            {popSlideContentLikes &&
              popSlideContentLikes.map((user: any) => (
                <LikesUserView key={user?.uid}>
                  <div className='pic'>
                    <Pic photoURL={user?.photoUrl}></Pic>
                  </div>
                  <div className='nick'>{user.nickname}</div>
                </LikesUserView>
              ))}
          </div>
        )}
      </div>
    </PopSlideParent>
  );
};

export default PopSlide;
