import React, { useEffect, useRef } from 'react';

import { BiReset } from 'react-icons/bi';
import { SliderParent } from './slider.styles';
import { filterType } from '../../Utils/interfaces';

type props = {
  filter: filterType;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  reset: (f: filterType) => void;
  rangeValue: string | undefined;
};
const Slider: React.FC<props> = ({ filter, onChange, reset, rangeValue }) => {
  let rangeRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    rangeRef.current!.value = rangeValue ? rangeValue : '0';
  }, [rangeValue]);

  return (
    <SliderParent>
      <div className='slider-title'>{filter.title}</div>
      <div className='slider'>
        <input
          type='range'
          ref={rangeRef}
          id={filter.title}
          name={filter.title}
          min={filter.min}
          max={filter.max}
          defaultValue={filter.defaultValue}
          step={filter.step}
          onChange={onChange}
        />
      </div>
      <div
        className='value'
        onClick={(e) => {
          e.stopPropagation();
          reset(filter);
        }}>
        <BiReset size={15} />
      </div>
    </SliderParent>
  );
};

export default Slider;
