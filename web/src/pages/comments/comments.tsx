import { Fragment, UIEventHandler, useEffect, useState } from 'react';

import { Comment } from '../../utils/interfaces';
import CommentCard from '../../components/comment-card/commentCard';
import { CommentParent } from './comments.styles';
import Loading from '../loading/loading';
import _ from 'lodash';
import { isServer } from '../../constants';
import { urqlClient } from '../../utils/urlClient';
import { useAppSelector } from '../../redux/hooks';
import { useGetCommentsOfTheUserQuery } from '../../generated/graphql';
import { withUrqlClient } from 'next-urql';

export interface allCommentsInterface {
  [key: string]: Comment[];
}
type props = {
  comments: Comment[];
  handleScroll: UIEventHandler<HTMLDivElement>;
  fetching: boolean;
};
const Comments: React.FC<props> = ({ comments, handleScroll, fetching }) => {
  return (
    <CommentParent>
      <Fragment>
        <div className='heading-container'>
          <div className='heading'>Comments</div>
          {/* <div className='sort'>
          <span>Sort</span> <MdSort size={20} />
        </div> */}
        </div>
        <div className='child' onScroll={handleScroll}>
          {comments &&
            comments.map((comment) => (
              <CommentCard comment={comment} key={comment.id} />
            ))}
          <div className='extra'>{fetching && <Loading />}</div>
        </div>
      </Fragment>
    </CommentParent>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Comments);
