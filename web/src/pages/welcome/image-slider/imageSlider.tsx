import { useEffect, useRef, useState } from 'react';

import Screenshot10_1200 from '../../../static/images/screenshot10-1200x.webp';
import Screenshot10_600 from '../../../static/images/screenshot10-600x.webp';
import Screenshot11_1200 from '../../../static/images/screenshot11-1200x.webp';
import Screenshot11_600 from '../../../static/images/screenshot11-600x.webp';
import Screenshot12_1200 from '../../../static/images/screenshot12-1200x.webp';
import Screenshot12_600 from '../../../static/images/screenshot12-600x.webp';
import Screenshot13_1200 from '../../../static/images/screenshot13-1200x.webp';
import Screenshot13_600 from '../../../static/images/screenshot13-600x.webp';
import Screenshot14_1200 from '../../../static/images/screenshot14-1200x.webp';
import Screenshot14_600 from '../../../static/images/screenshot14-600x.webp';
import Screenshot15_1200 from '../../../static/images/screenshot15-1200x.webp';
import Screenshot15_600 from '../../../static/images/screenshot15-600x.webp';
import Screenshot16_1200 from '../../../static/images/screenshot16-1200x.webp';
import Screenshot16_600 from '../../../static/images/screenshot16-600x.webp';
import Screenshot1_1200 from '../../../static/images/screenshot1-1200x.webp';
import Screenshot1_600 from '../../../static/images/screenshot1-600x.webp';
import Screenshot2_1200 from '../../../static/images/screenshot2-1200x.webp';
import Screenshot2_600 from '../../../static/images/screenshot2-600x.webp';
import Screenshot3_1200 from '../../../static/images/screenshot3-1200x.webp';
import Screenshot3_600 from '../../../static/images/screenshot3-600x.webp';
import Screenshot4_1200 from '../../../static/images/screenshot4-1200x.webp';
import Screenshot4_600 from '../../../static/images/screenshot4-600x.webp';
import Screenshot5_1200 from '../../../static/images/screenshot5-1200x.webp';
import Screenshot5_600 from '../../../static/images/screenshot5-600x.webp';
import Screenshot6_1200 from '../../../static/images/screenshot6-1200x.webp';
import Screenshot6_600 from '../../../static/images/screenshot6-600x.webp';
import Screenshot7_1200 from '../../../static/images/screenshot7-1200x.webp';
import Screenshot7_600 from '../../../static/images/screenshot7-600x.webp';
import Screenshot9_1200 from '../../../static/images/screenshot9-1200x.webp';
import Screenshot9_600 from '../../../static/images/screenshot9-600x.webp';
import { StyledImageSlider } from './imageSlider.styles';

const ImageSlider = () => {
  const images = [
    `${Screenshot1_600} 600w, ${Screenshot1_1200} 1200w`,
    `${Screenshot2_600} 600w, ${Screenshot2_1200} 1200w`,
    `${Screenshot3_600} 600w, ${Screenshot3_1200} 1200w`,
    `${Screenshot4_600} 600w, ${Screenshot4_1200} 1200w`,
    `${Screenshot5_600} 600w, ${Screenshot5_1200} 1200w`,
    `${Screenshot6_600} 600w, ${Screenshot6_1200} 1200w`,
    `${Screenshot7_600} 600w, ${Screenshot7_1200} 1200w`,
    `${Screenshot9_600} 600w, ${Screenshot9_1200} 1200w`,
    `${Screenshot10_600} 600w, ${Screenshot10_1200} 1200w`,
    `${Screenshot11_600} 600w, ${Screenshot11_1200} 1200w`,
    `${Screenshot12_600} 600w, ${Screenshot12_1200} 1200w`,
    `${Screenshot13_600} 600w, ${Screenshot13_1200} 1200w`,
    `${Screenshot14_600} 600w, ${Screenshot14_1200} 1200w`,
    `${Screenshot15_600} 600w, ${Screenshot15_1200} 1200w`,
    `${Screenshot16_600} 600w, ${Screenshot16_1200} 1200w`,
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoSlideTime = 5000;
  useEffect(() => {
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      autoSlideTime
    );

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoSlideTime, images.length]);

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <StyledImageSlider className='slideshow'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${currentIndex === index ? 'active' : ''} ${
            currentIndex - 1 === index ||
            (currentIndex === 0 && index === images.length - 1)
              ? 'prev'
              : ''
          } ${
            currentIndex + 1 === index ||
            (currentIndex === images.length - 1 && index === 0)
              ? 'next'
              : ''
          }`}>
          <img
            srcSet={image}
            alt={`slide ${index + 1}`}
            sizes='(min-width: 620px) 594px, 276px'
            src={image.split(' ')[0]}
          />
        </div>
      ))}
      <button className='prev-arrow' onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className='next-arrow' onClick={goToNextSlide}>
        &#10095;
      </button>
    </StyledImageSlider>
  );
};

export default ImageSlider;
