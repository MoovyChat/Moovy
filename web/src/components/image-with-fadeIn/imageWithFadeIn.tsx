import { animated, useSpring } from '@react-spring/web';

import { useState } from 'react';

interface ImageProps {
  src300: string;
  src600: string;
  alt: string;
  width: string;
  height: string;
  className: string;
  sizes: string;
}

const ImageWithFadeIn: React.FC<ImageProps> = ({
  src300,
  src600,
  alt,
  width,
  height,
  className,
  sizes,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const fadeIn = useSpring({
    opacity: loaded ? 1 : 0,
  });

  return (
    <animated.img
      className={className}
      srcSet={`${src300} 300w, ${src600} 600w`}
      src={src300}
      alt={alt}
      sizes={sizes}
      width={width}
      height={height}
      style={fadeIn}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default ImageWithFadeIn;
