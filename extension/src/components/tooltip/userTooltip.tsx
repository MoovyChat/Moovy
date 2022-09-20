import React from 'react';
import { User } from '../../Utils/interfaces';
import { UserToolTipParent } from './tooltip.styles';

type props = {
  user: User;
};
const UserTooltip: React.FC<props> = ({ user }) => {
  return <UserToolTipParent></UserToolTipParent>;
};

export default UserTooltip;
