import React from 'react';
import { User } from '../../generated/graphql';
import { UserToolTipParent } from './tooltip.styles';

type props = {
  user: User;
};
const UserTooltip: React.FC<props> = ({ user }) => {
  return <UserToolTipParent></UserToolTipParent>;
};

export default UserTooltip;
