import React from 'react';
import { FaUserFriends, FaComment, FaComments, FaWhmcs } from 'react-icons/fa';
import {
  USERS_PATH,
  GROUP_CHAT_PATH,
  SETTING_PATH,
  USER_LIST_TEXT,
  GENERAL_CHAT_TEXT,
  GROUP_CHAT_TEXT,
  SETTING_TEXT,
  CHAT_PATH,
} from '../../../constants';
import { MenuList } from '../../../types';

import Layout from './Layout';

export type ChildrenType = React.ReactNode;

interface LayoutContainerProps {
  children: ChildrenType;
}

const menuList: MenuList[] = [
  {
    title: USER_LIST_TEXT,
    path: USERS_PATH,
    icon: () => <FaUserFriends />,
  },
  {
    title: GENERAL_CHAT_TEXT,
    path: CHAT_PATH,
    icon: () => <FaComment />,
  },
  {
    title: GROUP_CHAT_TEXT,
    path: GROUP_CHAT_PATH,
    icon: () => <FaComments />,
  },
  {
    title: SETTING_TEXT,
    path: SETTING_PATH,
    icon: () => <FaWhmcs />,
  },
];

const hiddenMenuPath = [
  '/login',
  '/signup',
  '/chat/[chatRoom]',
  '/group-chat/create',
  '/home',
];

function LayoutContainer({ children }: LayoutContainerProps) {
  return (
    <Layout menuList={menuList} hiddenMenuPath={hiddenMenuPath}>
      {children}
    </Layout>
  );
}

export default LayoutContainer;
