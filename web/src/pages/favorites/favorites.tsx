import React, { useEffect } from 'react';

import ChildHeader from '../../components/childHeader/childHeader';
import EmptyPage from '../../components/empty-page/emptyPage';
import { FavoriteStyles } from './favorites.styles';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites - Moovy';
  }, []);
  return (
    <FavoriteStyles>
      <ChildHeader text='Favorites' className='feed-header' />
      <EmptyPage msg='Your Favorites is empty!' />
    </FavoriteStyles>
  );
};

export default Favorites;
