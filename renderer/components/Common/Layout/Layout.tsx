import { useRouter } from 'next/router';
import React from 'react';
import * as S from './Layout.styles';
import { ChildrenType, MenuList } from './LayoutContainer';
import Menu from './Menu/Menu';

interface LayoutProps {
  children: ChildrenType;
  menuList: MenuList[];
}

const hiddenMenuPath = ['/login', '/signup', '/chat/[chat-room]'];

function Layout({ children, menuList }: LayoutProps) {
  const { pathname } = useRouter();
  return (
    <S.Container>
      {hiddenMenuPath.includes(pathname) || (
        <S.LayoutBox>
          <S.LayoutList>
            {menuList.map((item, idx) => (
              <Menu
                key={idx}
                title={item.title}
                path={item.path}
                icon={item.icon}
              />
            ))}
          </S.LayoutList>
        </S.LayoutBox>
      )}
      <S.LayoutChildrenBox>{children}</S.LayoutChildrenBox>
    </S.Container>
  );
}

export default Layout;
