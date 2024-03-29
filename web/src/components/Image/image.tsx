import React, { ReactEventHandler, useEffect, useState } from 'react';

import MoovyIcon from '../../svgs/moovy-logo-white.jpg';
import { ReactComponent as MoovyLogo } from '../../svgs/moovy-white.svg';

type props = {
  src?: string;
  srcSet?: string;
  alt: string;
  id?: string;
  lazy?: boolean;
  className?: string;
  ref?: any;
  onClick?: any;
  onLoad?: any;
  width?: string;
  height?: string;
};
export const Image: React.FC<props> = ({
  src,
  alt,
  id,
  onClick,
  ref,
  className,
  lazy,
  srcSet,
  onLoad,
  width,
  height,
}) => {
  const [key, setKey] = useState<string>('1');
  const [imageError, setImageError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(Math.random().toString(36).substring(7) as string);
    }, 5000); // refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLoad: ReactEventHandler<HTMLImageElement> = () => {
    setImageError(() => false);
  };

  return (
    <>
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        key={key}
        ref={ref}
        onError={() => setImageError(() => true)}
        onLoad={handleLoad}
        style={{ display: imageError ? 'none' : 'block' }}
        className={className}
        id={id}
        loading={lazy ? 'lazy' : 'eager'}
        onClick={onClick}
        width={width}
        height={height}
      />
      <div
        style={{ display: imageError ? 'flex' : 'none', maxHeight: '100px' }}
      >
        <MoovyLogo />
      </div>
    </>
  );
};
