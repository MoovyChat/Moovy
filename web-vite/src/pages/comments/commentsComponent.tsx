import { Outlet, useLocation, useParams } from 'react-router-dom';

import ChildHeader from '../../components/childHeader/childHeader';

type props = {
  type: string;
};
const CommentsComponent: React.FC<props> = ({ type }) => {
  const location = useLocation();
  return (
    <>
      <ChildHeader text={type} className='comment-header' />
      <Outlet key={location.pathname} />
    </>
  );
};

export default CommentsComponent;
