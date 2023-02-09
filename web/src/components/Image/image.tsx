import React, { useEffect, useState } from 'react';

import MoovyIcon from '../../svgs/moovy-logo-white.jpg';
import { ReactComponent as MoovyLogo } from '../../svgs/moovy-white.svg';

type props = {
  src: string;
  alt: string;
  id?: string;
  lazy?: boolean;
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
  lazy,
  onLoad,
}) => {
  const [key, setKey] = React.useState(1);
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSrc(() => src);
    }, 1000);
    return () => clearInterval(interval);
  }, [src]);

  return (
    <>
      <img
        src={imageSrc}
        alt={alt}
        key={key}
        ref={ref}
        onError={() => setImageError(() => true)}
        onLoad={() => {
          setImageError(() => false);
        }}
        style={{ display: imageError ? 'none' : 'block' }}
        className={className}
        id={id}
        loading={lazy ? 'lazy' : 'eager'}
        onClick={onClick}
      />
      <div
        style={{ display: imageError ? 'flex' : 'none', maxHeight: '100px' }}>
        <MoovyLogo />
      </div>
    </>
  );
};
