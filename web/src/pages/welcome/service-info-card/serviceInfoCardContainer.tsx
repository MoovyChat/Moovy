import React from 'react';
import { StyledServiceInfoCard } from './serviceInfoCard.styles';

interface Props {
  src: string;
  title: string;
  subTitle: string;
  desc: string;
  mockup: string;
  otherWay?: boolean;
  isVideo?: boolean;
  alternateMockUp?: string;
}
const ServiceInfoCard: React.FC<Props> = ({
  src,
  title,
  subTitle,
  desc,
  mockup,
  otherWay,
  isVideo,
  alternateMockUp,
}) => {
  return (
    <StyledServiceInfoCard otherWay={otherWay ? otherWay : false}>
      <div className="service-container">
        <div className="image">
          <div className="mini-info-image">
            <img src={src} width={78} height={78} />
          </div>
          <div className="mini-info">
            <div className="heading">{title}</div>
            <div className="sub-heading">{subTitle}</div>
          </div>
        </div>
        <div className="description">{desc}</div>
      </div>
      <div className="mockup-image">
        {isVideo ? (
          <video autoPlay loop muted width="70%" disablePictureInPicture>
            <source src={src} type="video/mp4" />
            {alternateMockUp && (
              <source src={alternateMockUp} type="video/mp4" />
            )}
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <img src={mockup} />
        )}
      </div>
    </StyledServiceInfoCard>
  );
};

export default ServiceInfoCard;
