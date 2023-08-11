import React from 'react';
import { StyledMiniInfo } from './miniInfo.styles';
import { HOMEPAGE_ICONS } from '../../../constants';

interface Props {
  title: string;
  subTitle: string;
  src: string;
}

const MiniInfoCard: React.FC<Props> = ({ title, subTitle, src }) => {
  return (
    <StyledMiniInfo>
      <div className="mini-info-image">
        <img src={src} alt={title} width={78} height={78} />
      </div>
      <div className="mini-info">
        <h2 className="info-title">{title}</h2>
        <h3 className="info-sub-title">{subTitle}</h3>
      </div>
    </StyledMiniInfo>
  );
};

export default MiniInfoCard;
