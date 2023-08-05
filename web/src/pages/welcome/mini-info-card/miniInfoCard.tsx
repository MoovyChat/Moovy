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
        <img src={src} width={78} height={78} />
      </div>
      <div className="mini-info">
        <div className="info-title">{title}</div>
        <div className="info-sub-title">{subTitle}</div>
      </div>
    </StyledMiniInfo>
  );
};

export default MiniInfoCard;
