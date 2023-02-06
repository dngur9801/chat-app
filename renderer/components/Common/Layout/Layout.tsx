import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import { toastMessageState } from '../../../states';
import ToastMessage from '../ToastMessage/ToastMessage';
import * as S from './Layout.styles';
import { ChildrenType, MenuList } from './LayoutContainer';
import Menu from './Menu/Menu';

interface LayoutProps {
  children: ChildrenType;
  menuList: MenuList[];
}

const hiddenMenuPath = ['/login', '/signup', '/chat/[chatRoom]'];

function Layout({ children, menuList }: LayoutProps) {
  const [errorMessage, setErrorMessage] = useRecoilState(toastMessageState);
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
      {errorMessage && <ToastMessage />}
    </S.Container>
  );
}

export default Layout;
