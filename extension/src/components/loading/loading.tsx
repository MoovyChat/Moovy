import { LoaderParent } from './loading.styles';
import { Pic } from '../../extension/components/logout/logout.styles';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';

const Loading = () => {
  const photoUrl = useAppSelector((state) => state.user.photoUrl);
  return (
    <LoaderParent>
      <Pic
        className='loading'
        photoURL={
          photoUrl
            ? photoUrl
            : 'https://icons.iconarchive.com/icons/martz90/circle/256/chat-icon.png'
        }></Pic>
    </LoaderParent>
  );
};

export default Loading;
