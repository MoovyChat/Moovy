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
            <img src={src} alt={title} width={78} height={78} />
          </div>
          <div className="mini-info">
            <h2 className="heading">{title}</h2> {/* Using semantic tags */}
            <h3 className="sub-heading">{subTitle}</h3>
          </div>
        </div>
        <div className="description">{desc}</div>
      </div>
      <div className="mockup-image">
        {isVideo ? (
          <video
            autoPlay
            loop
            muted
            width="70%"
            disablePictureInPicture
            aria-label={`Video of ${title}`} // accessibility enhancement
            title={`Promotional video for ${title}`}
            poster="path_to_placeholder_image.jpg" // path to a placeholder image
          >
            <source src={src} type="video/mp4" />
            {alternateMockUp && (
              <source src={alternateMockUp} type="video/mp4" />
            )}
            Your browser does not support HTML5 video.
          </video>
        ) : (
          <img src={mockup} alt={`Mockup of ${title}`} />
        )}
      </div>
    </StyledServiceInfoCard>
  );
};

export default ServiceInfoCard;
