import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { toastMessageState, userInfoState } from '../../../states';
import { MenuList } from '../../../types';
import ToastMessage from '../ToastMessage/ToastMessage';
import * as S from './Layout.styles';
import { ChildrenType } from './LayoutContainer';
import Menu from './Menu/Menu';

interface LayoutProps {
  children: ChildrenType;
  menuList: MenuList[];
  hiddenMenuPath: string[];
}

function Layout({ children, menuList, hiddenMenuPath }: LayoutProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [errorMessage, setErrorMessage] = useRecoilState(toastMessageState);
  const { pathname } = useRouter();
  const isHiddenMenu = hiddenMenuPath.includes(pathname);

  const router = useRouter();
  // 로그인 여부 값
  useEffect(() => {
    if (!userInfo?.uid) {
      router.push('/login');
    }
  }, []);

  return (
    <S.Container>
      {isHiddenMenu || (
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
      <S.LayoutChildrenBox isHiddenMenu={isHiddenMenu}>
        {children}
      </S.LayoutChildrenBox>
      {errorMessage && <ToastMessage />}
    </S.Container>
  );
}

export default Layout;
