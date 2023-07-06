import React from 'react';
import { StyledHeading } from './heading.styles';

interface HeadingProps {
  title: string;
  content?: string;
  id?: string;
}
const Heading: React.FC<HeadingProps> = ({ title, content, id }) => {
  return (
    <StyledHeading id={id}>
      <h2 className="slider-header">{title}</h2>
      {content && <p className="slider-header-content">{content}</p>}
    </StyledHeading>
  );
};

export default Heading;
