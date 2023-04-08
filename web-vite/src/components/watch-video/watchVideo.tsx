import { MdLocalMovies, MdOutlineLocalMovies } from 'react-icons/md';
import React, { MouseEventHandler } from 'react';

import { WatchVideoContainer } from './watchVideo.styles';

type props = {
  className?: string;
  platform: string;
  url?: string;
  type?: string;
  id?: string;
};
const WatchVideo: React.FC<props> = ({
  className,
  platform,
  url,
  type,
  id,
}) => {
  const onClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (platform === 'NETFLIX') {
      let url = `https://www.netflix.com/${
        type === 'show' ? 'title' : 'watch'
      }/${id}`;
      window.open(url, '_blank');
    }
  };
  return (
    <WatchVideoContainer onClick={onClickHandler} className={className}>
      <span>
        <MdOutlineLocalMovies size={20} />
      </span>
      <span> Watch on {platform}</span>
    </WatchVideoContainer>
  );
};

export default WatchVideo;
