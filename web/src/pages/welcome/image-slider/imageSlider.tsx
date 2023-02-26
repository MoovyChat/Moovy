import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

import Dark from '../../../static/images/dark-chat.png';
import Light from '../../../static/images/light-chat.png';
import Screenshot1 from '../../../static/images/screenshot1.png';
import Screenshot10 from '../../../static/images/screenshot10.png';
import Screenshot11 from '../../../static/images/screenshot11.png';
import Screenshot12 from '../../../static/images/screenshot12.png';
import Screenshot13 from '../../../static/images/screenshot13.png';
import Screenshot14 from '../../../static/images/screenshot14.png';
import Screenshot15 from '../../../static/images/screenshot15.png';
import Screenshot16 from '../../../static/images/screenshot16.png';
import Screenshot2 from '../../../static/images/screenshot2.png';
import Screenshot3 from '../../../static/images/screenshot3.png';
import Screenshot4 from '../../../static/images/screenshot4.png';
import Screenshot5 from '../../../static/images/screenshot5.png';
import Screenshot6 from '../../../static/images/screenshot6.png';
import Screenshot7 from '../../../static/images/screenshot7.png';
import Screenshot8 from '../../../static/images/screenshot8.png';
import Screenshot9 from '../../../static/images/screenshot9.png';
import { StyledImageSlider } from './imageSlider.styles';
import { useAppDispatch } from '../../../redux/hooks';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const sliderThumbsRef = useRef<HTMLDivElement | null>(null);
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
  const previousSlide: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setAutoPlay(false);
    if (sliderThumbsRef && sliderThumbsRef.current) {
      const selectedThumb = sliderThumbsRef.current.children[
        currentIndex
      ] as HTMLDivElement;
      const thumbWidth = selectedThumb.offsetWidth;
      const thumbLeft = selectedThumb.offsetLeft;
      sliderThumbsRef.current.scrollLeft =
        thumbLeft - (sliderThumbsRef.current.offsetWidth - thumbWidth) / 2;
    }
  };

  const handleThumbClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    if (sliderThumbsRef && sliderThumbsRef.current) {
      const selectedThumb = sliderThumbsRef.current.children[
        index
      ] as HTMLDivElement;
      const thumbWidth = selectedThumb.offsetWidth;
      const thumbLeft = selectedThumb.offsetLeft;
      sliderThumbsRef.current.scrollLeft =
        thumbLeft - (sliderThumbsRef.current.offsetWidth - thumbWidth) / 2;
    }
  };

  const nextSlide: MouseEventHandler<HTMLButtonElement> = () => {
    setAutoPlay(false);
    setCurrentIndex((currentIndex + 1) % images.length);
    if (sliderThumbsRef && sliderThumbsRef.current) {
      const selectedThumb = sliderThumbsRef.current.children[
        currentIndex
      ] as HTMLDivElement;
      const thumbWidth = selectedThumb.offsetWidth;
      const thumbLeft = selectedThumb.offsetLeft;
      sliderThumbsRef.current.scrollLeft =
        thumbLeft - (sliderThumbsRef.current.offsetWidth - thumbWidth) / 2;
    }
  };
  useEffect(() => {
    let intervalId: NodeJS.Timer | null = null;
    if (autoPlay) {
      intervalId = setInterval(() => {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex === images.length ? 0 : newIndex);
        if (sliderThumbsRef && sliderThumbsRef.current) {
          const selectedThumb = sliderThumbsRef.current.children[
            currentIndex
          ] as HTMLDivElement;
          const thumbWidth = selectedThumb.offsetWidth;
          const thumbLeft = selectedThumb.offsetLeft;
          sliderThumbsRef.current.scrollLeft =
            thumbLeft - (sliderThumbsRef.current.offsetWidth - thumbWidth) / 3;
        }
      }, 2000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <StyledImageSlider className='slider'>
      <div className='slider-main'>
        <img src={images[currentIndex]} />
      </div>
      <div className='slider-thumbs'>
        <button className='previous' onClick={previousSlide}>
          <MdChevronLeft />
        </button>
        <div className='slider-thumbs' ref={sliderThumbsRef}>
          {images.map((image, index) => (
            <div
              key={image}
              className={`thumb ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbClick(index)}>
              <img src={image} />
            </div>
          ))}
        </div>
        <button className='next-slide' onClick={nextSlide}>
          <MdChevronRight />
        </button>
      </div>
    </StyledImageSlider>
  );
};

export default ImageSlider;
