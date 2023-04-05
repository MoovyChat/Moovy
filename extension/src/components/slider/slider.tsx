import React, { useEffect, useRef } from 'react';

import { BiReset } from 'react-icons/bi';
import { SliderParent } from './slider.styles';
import { filterType } from '../../Utils/interfaces';
import { useAppSelector } from '../../redux/hooks';

type props = {
  filter: filterType;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  reset: (f: filterType) => void;
  rangeValue: string | undefined;
};
const Slider: React.FC<props> = ({ filter, onChange, reset, rangeValue }) => {
  const rangeRef = useRef<HTMLInputElement | null>(null);
  const accentColor = useAppSelector((state) => state.misc.accentColor);
  useEffect(() => {
    if (rangeRef.current)
      rangeRef.current.value = rangeValue ? rangeValue : '0';
  }, [rangeValue]);

  return (
    <SliderParent accentColor={accentColor}>
      <div className="slider-title">{filter.title}</div>
      <div className="slider">
        <input
          type="range"
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
        className="value"
        onClick={(e) => {
          e.stopPropagation();
          reset(filter);
        }}
      >
        <div className="val-icon">
          <BiReset size={15} />
        </div>
      </div>
    </SliderParent>
  );
};

export default Slider;
