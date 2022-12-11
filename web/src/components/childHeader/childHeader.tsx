import React, { MouseEventHandler } from 'react';

import { ChildHeaderStyles } from './childHeader.styles';
import { HeaderText } from '../../pages/commentThread/commentThread.styles';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type props = {
  text: string;
  className: string;
};
const ChildHeader: React.FC<props> = ({ text, className }) => {
  const navigate = useNavigate();
  const backButtonHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    navigate(-1);
  };
  return (
    <ChildHeaderStyles className={className}>
      <div className='back-button' onClick={backButtonHandler}>
        <MdKeyboardBackspace size={30} />
      </div>
      <HeaderText className='header-text'>{text}</HeaderText>
    </ChildHeaderStyles>
  );
};

export default ChildHeader;
