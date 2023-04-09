import './select.styles.css';

import { BiReset } from 'react-icons/bi';
import React from 'react';
import { SliderParent } from '../slider/slider.styles';

type props = {
  options: string[];
  title: string;
  reset: any;
  value: string;
  setValue: any;
};
const SelectDropDown: React.FC<props> = ({
  options,
  title,
  reset,
  value,
  setValue,
}) => {
  return (
    <SliderParent>
      <div className='slider-title'>{title}</div>
      <select
        value={value}
        onChange={(e) => {
          e.stopPropagation();
          setValue(e.target.value);
        }}>
        <option defaultChecked value='none'>
          none
        </option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <div
        className='value'
        onClick={(e) => {
          e.stopPropagation();
          reset();
        }}>
        <BiReset size={15} />
      </div>
    </SliderParent>
  );
};

export default SelectDropDown;
