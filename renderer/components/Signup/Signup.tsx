import React from 'react';
import AuthLayout from '../Common/AuthLayout/AuthLayout';
import * as S from './Signup.styles';

function Signup() {
  return (
    <AuthLayout>
      <S.SignupInput placeholder='이메일을 입력하세요' />
      <S.SignupInput placeholder='비밀번호를 입력하세요' />
      <S.SignupInput placeholder='비밀번호를 다시 입력하세요' />
      <S.SignupButton>회원가입</S.SignupButton>
    </AuthLayout>
  );
}

export default Signup;
