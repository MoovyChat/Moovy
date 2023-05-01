import React, { useEffect, useState } from 'react';

import { NotFoundParent } from './notFound.styles';

interface Texts {
  heading: string;
  sub: string;
}

type props = {
  type: string;
};
const NotFound: React.FC<props> = ({ type }) => {
  const [texts, setTexts] = useState<Texts>({ heading: '', sub: '' });
  useEffect(() => {
    switch (type) {
      case 'profile':
        setTexts({ heading: 'Profile not found!', sub: '404 Not found' });
        break;
      case 'likes':
        setTexts({
          heading: 'No likes yet!',
          sub: 'Be the first one to like :)',
        });
        break;
      default:
        setTexts({
          heading: 'Something went wrong',
          sub: 'Please report to us :)',
        });
        break;
    }
  }, [type]);
  return (
    <NotFoundParent>
      <div className="heading">{texts.heading}</div>
      <div className="sub">{texts.sub}</div>
    </NotFoundParent>
  );
};

export default NotFound;
