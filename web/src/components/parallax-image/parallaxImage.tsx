import React, { useEffect, useState, useRef } from 'react';

interface ParallaxImageProps {
  src: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src }) => {
  const [offset, setOffset] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrolledPercent = scrolled / scrollHeight;
        const maxOffset = imageRef.current.clientWidth - window.innerWidth;
        setOffset(scrolledPercent * maxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        width: '110vw',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        ref={imageRef}
        src={src}
        style={{
          width: '110vw',
          height: 'auto',
          objectFit: 'cover',
          padding: '100px 0',
          transform: `translateX(-${offset}px)`,
          objectPosition: '50% 50%',
        }}
        alt="Parallax"
      />
    </div>
  );
};

export default ParallaxImage;
