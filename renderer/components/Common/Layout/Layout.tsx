import { useRouter } from 'next/router';
import React from 'react';
import * as S from './Layout.styles';
import { ChildrenType, MenuList } from './LayoutContainer';
import Menu from './Menu/Menu';

interface LayoutProps {
  children: ChildrenType;
  menuList: MenuList[];
}

function Layout({ children, menuList }: LayoutProps) {
  const { asPath } = useRouter();
  return (
    <S.Container>
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
      <S.LayoutChildrenBox>{children}</S.LayoutChildrenBox>
    </S.Container>
  );
}

export default Layout;
