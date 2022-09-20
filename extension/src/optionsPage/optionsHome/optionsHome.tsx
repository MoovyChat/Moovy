import React, { useEffect, useState } from 'react';

import OptionsHeader from '../header/header';
import { OptionsMain } from './optionsHome.styles';
import { User } from '../../Utils/interfaces';
import { getStoredUserLoginDetails } from '../../Utils/storage';

const OptionsHome = () => {
  return (
    <OptionsMain>
      <OptionsHeader />
      <div className='panels'></div>
    </OptionsMain>
  );
};

export default OptionsHome;
