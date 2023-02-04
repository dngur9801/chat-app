import React from 'react';
import { collection, addDoc } from 'firebase/firestore';
import AuthLayout from '../Common/AuthLayout/AuthLayout';
import * as S from './Signup.styles';
import Link from 'next/link';
import { LOGIN_PATH } from '../../constants';
import ToastMessage from '../Common/ToastMessage/ToastMessage';

interface SignupProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickRegister: () => Promise<void>;
  toastMessage: string | null;
}

function Signup({
  handleChange,
  handleClickRegister,
  toastMessage,
}: SignupProps) {
  return (
    <AuthLayout>
      <S.SignupInput
        placeholder='이메일을 입력해 주세요'
        name='email'
        onChange={handleChange}
      />
      <S.SignupInput
        placeholder='비밀번호를 입력해 주세요'
        type='password'
        name='password'
        onChange={handleChange}
      />
      <S.SignupInput
        placeholder='비밀번호를 다시 입력해 주세요'
        type='password'
        name='re_password'
        onChange={handleChange}
      />
      <S.SignupButton onClick={handleClickRegister}>회원가입</S.SignupButton>
      <S.SignupTextBox>
        <S.SignupGuideText>아직 계정이 없으시다면?</S.SignupGuideText>
        <S.SignupText>
          <Link href={LOGIN_PATH}>
            <a>로그인</a>
          </Link>
        </S.SignupText>
      </S.SignupTextBox>
      {toastMessage && <ToastMessage />}
    </AuthLayout>
  );
}

export default Signup;
