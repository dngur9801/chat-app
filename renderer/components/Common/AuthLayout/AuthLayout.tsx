import React from 'react';
import { CHAT_TITLE } from '../../../constants';
import * as S from './AuthLayout.styles';

function AuthLayout({ children }) {
  return (
    <S.LoginLayout>
      <S.LoginBox>
        <S.LoginTitle>{CHAT_TITLE}</S.LoginTitle>
        {children}
      </S.LoginBox>
    </S.LoginLayout>
  );
}

export default AuthLayout;
