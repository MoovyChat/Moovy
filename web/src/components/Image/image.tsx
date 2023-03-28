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
}) => {
  const [key, setKey] = useState<string>('1');
  const [imageError, setImageError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [_src, setSrc] = useState<string>(src ? src : '');
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(Math.random().toString(36).substring(7) as string);
    }, 5000); // refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoading) setSrc(() => MoovyIcon);
    else src && setSrc(() => src);
  }, [isLoading]);

  const handleLoad: ReactEventHandler<HTMLImageElement> = () => {
    setIsLoading(() => false);
    setImageError(() => false);
  };

  return (
    <>
      <img
        src={_src}
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
      />
      <div
        style={{ display: imageError ? 'flex' : 'none', maxHeight: '100px' }}>
        <MoovyLogo />
      </div>
    </>
  );
};
