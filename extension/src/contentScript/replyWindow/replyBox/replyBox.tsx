import React, { useRef } from 'react';

import CommentCard from '../../commentCard/commentCard';
import { CommentInfo } from '../../../Utils/interfaces';

type props = {
  userComments: CommentInfo[];
  responseFromReplyWindow: any;
};
const ReplyBox: React.FC<props> = ({
  userComments,
  responseFromReplyWindow,
}) => {
  return (
    <div>
      {userComments.map((reply, index) => (
        <CommentCard
          className='reply-card'
          key={index}
          type='reply'
          responseFromReplyWindow={responseFromReplyWindow}
          comment={reply}
        />
      ))}
    </div>
  );
};

export default ReplyBox;
