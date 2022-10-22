import { CenterParent } from './centerPanel.styles';
import Comments from '../../../components/comments/comments';
import MessageBox from '../../../components/messageBox/messageBox';
import React from 'react';

type props = {
  className: string;
};
const CenterPanel: React.FC<props> = ({ className }) => {
  return (
    <CenterParent className={className}>
      <div className='comment-section'>
        <Comments />
      </div>
    </CenterParent>
  );
};

export default CenterPanel;
