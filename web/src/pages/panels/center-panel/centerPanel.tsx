import { Outlet, Route, Routes } from 'react-router-dom';

import { CenterParent } from './centerPanel.styles';
import Comments from '../../comments/comments';
import Feed from '../../feed/feed';
import { MdSort } from 'react-icons/md';
import MessageBox from '../../../components/messageBox/messageBox';
import MovieThread from '../../movieThread/movieThread';
import NotFound from '../../notFound/notFound';
import Notifications from '../../notifications/NotificationsModule';
import Profile from '../../profile/profile';
import React from 'react';
import Replies from '../../replies/replies';
import Trending from '../../trending/trending';

type props = {
  className: string;
};
const CenterPanel: React.FC<props> = ({ className }) => {
  return (
    <CenterParent className={className}>
      <Outlet />
    </CenterParent>
  );
};

export default CenterPanel;
