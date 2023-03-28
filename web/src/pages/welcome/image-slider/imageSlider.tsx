import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

import Dark from '../../../static/images/dark-chat.webp';
import Light from '../../../static/images/light-chat.webp';
import Screenshot1 from '../../../static/images/screenshot1.webp';
import Screenshot10 from '../../../static/images/screenshot10.webp';
import Screenshot11 from '../../../static/images/screenshot11.webp';
import Screenshot12 from '../../../static/images/screenshot12.webp';
import Screenshot13 from '../../../static/images/screenshot13.webp';
import Screenshot14 from '../../../static/images/screenshot14.webp';
import Screenshot15 from '../../../static/images/screenshot15.webp';
import Screenshot16 from '../../../static/images/screenshot16.webp';
import Screenshot2 from '../../../static/images/screenshot2.webp';
import Screenshot3 from '../../../static/images/screenshot3.webp';
import Screenshot4 from '../../../static/images/screenshot4.webp';
import Screenshot5 from '../../../static/images/screenshot5.webp';
import Screenshot6 from '../../../static/images/screenshot6.webp';
import Screenshot7 from '../../../static/images/screenshot7.webp';
import Screenshot8 from '../../../static/images/screenshot8.webp';
import Screenshot9 from '../../../static/images/screenshot9.webp';
import { StyledImageSlider } from './imageSlider.styles';
import { useAppDispatch } from '../../../redux/hooks';

const ImageSlider = () => {
  const images = [
    Dark,
    Light,
    Screenshot1,
    Screenshot2,
    Screenshot3,
    Screenshot4,
    Screenshot5,
    Screenshot6,
    Screenshot7,
    Screenshot8,
    Screenshot9,
    Screenshot10,
    Screenshot11,
    Screenshot12,
    Screenshot13,
    Screenshot14,
    Screenshot15,
    Screenshot16,
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
          key={image}
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
          <img src={image} alt={`slide ${index + 1}`} />
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
