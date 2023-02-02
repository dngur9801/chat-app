import React from 'react';
import { FaUserFriends, FaComment, FaComments, FaTools } from 'react-icons/fa';
import {
  USERS_PATH,
  CHAT_PATH,
  GROUP_CHAT_PATH,
  SETTING_PATH,
  LOGIN_PATH,
} from '../../../constants/path';
import Layout from './Layout';

export type ChildrenType = React.ReactNode;

export type MenuList = {
  title: string;
  path: string;
  icon: () => JSX.Element;
};

interface LayoutContainerProps {
  children: ChildrenType;
}

const menuList: MenuList[] = [
  {
    title: '유저 목록',
    path: USERS_PATH,
    icon: () => <FaUserFriends />,
  },
  {
    title: '1:1 채팅',
    path: LOGIN_PATH,
    icon: () => <FaComment />,
  },
  {
    title: '그룹채팅',
    path: GROUP_CHAT_PATH,
    icon: () => <FaComments />,
  },
  {
    title: '설정',
    path: SETTING_PATH,
    icon: () => <FaTools />,
  },
];

function LayoutContainer({ children }: LayoutContainerProps) {
  return <Layout menuList={menuList}>{children}</Layout>;
}

export default LayoutContainer;
