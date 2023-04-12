// Import necessary dependencies.
import React, { MouseEventHandler } from 'react';

import { ChildHeaderStyles } from './childHeader.styles';
import { HeaderText } from '../../pages/commentThread/commentThread.styles';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface props {
  text?: string;
  className: string;
  children?: React.ReactNode;
}

// Define the ChildHeader component.
// It takes in a `text`, `className`, and optional `children` as props.
const ChildHeader: React.FC<props> = ({ text, className, children }) => {
  // Get the `navigate()` function from `useNavigate()` hook.
  const navigate = useNavigate();

  // Define a click handler for the back button.
  const backButtonHandler: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    console.log(history.state, history.state !== null && history.state.idx !== 0);
    if(history.state !== null) navigate(-1); // Navigate back to the previous page.
  };

  // Render the ChildHeader component.
  return (
    <ChildHeaderStyles className={className}>
      {/* Render the back button. */}
      <div className="back-button" onClick={backButtonHandler}>
        <MdKeyboardBackspace size={30} />
      </div>
      {/* Render the header text. */}
      <HeaderText className="header-text">{text ? text : children}</HeaderText>
    </ChildHeaderStyles>
  );
};

// Export the component as default.
export default ChildHeader;
