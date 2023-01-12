import React, { useEffect, useState } from 'react';

import MoovyIcon from '../../svgs/moovy-logo-white.jpg';

type props = {
  src: string;
  alt: string;
  id?: string;
  loading?: string;
  className?: string;
  ref?: any;
  onClick?: any;
  onLoad?: any;
};
export const Image: React.FC<props> = ({
  src,
  alt,
  id,
  onClick,
  ref,
  className,
  onLoad,
}) => {
  const [key, setKey] = React.useState(1);
  const [imageUrl, setImageUrl] = useState(src);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageUrl(() => src);
    }, 1000);
    return () => clearInterval(interval);
  }, [src]);

  function refreshImage() {
    setKey(key + 1);
    setImageUrl(MoovyIcon);
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      key={key}
      ref={ref}
      onError={refreshImage}
      className={className}
      id={id}
      onLoad={onLoad}
      loading='lazy'
      onClick={onClick}
    />
  );
};
