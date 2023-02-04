import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import * as S from './Login.style';
import Link from 'next/link';
import { CHAT_TITLE, SIGNUP_PATH } from '../../constants';
import AuthLayout from '../Common/AuthLayout/AuthLayout';
import ToastMessage from '../Common/ToastMessage/ToastMessage';

interface LoginProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitLogin: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

function Login({ handleChange, handleSubmitLogin }: LoginProps) {
  return (
    <AuthLayout>
      <S.LoginForm onSubmit={handleSubmitLogin}>
        <S.LoginInputBox>
          <FaUserAlt className='icon' />
          <S.LoginInput
            name='email'
            placeholder='이메일을 입력해 주세요'
            onChange={handleChange}
          />
        </S.LoginInputBox>
        <S.LoginInputBox>
          <FaLock className='icon' />
          <S.LoginInput
            name='password'
            type='password'
            placeholder='비밀번호를 입력해 주세요.'
            onChange={handleChange}
          />
        </S.LoginInputBox>
        <S.LoginButton type='submit'>로그인</S.LoginButton>
      </S.LoginForm>
      <S.LoginTextBox>
        <S.LoginGuideText>아직 계정이 없으시다면?</S.LoginGuideText>
        <S.LoginSignupText>
          <Link href={SIGNUP_PATH}>
            <a>회원가입</a>
          </Link>
        </S.LoginSignupText>
      </S.LoginTextBox>
    </AuthLayout>
  );
}

export default Login;

//Chatty
