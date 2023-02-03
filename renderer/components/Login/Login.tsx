import React from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import * as S from './Login.style';
import Link from 'next/link';
import { CHAT_TITLE } from '../../constants';

function Login() {
  return (
    <S.LoginLayout>
      <S.LoginBox>
        <S.LoginTitle>{CHAT_TITLE}</S.LoginTitle>
        <S.LoginInputBox>
          <FaUserAlt className='icon' />
          <S.LoginInput placeholder='아이디를 입력해주세요.' />
        </S.LoginInputBox>
        <S.LoginInputBox>
          <FaLock className='icon' />
          <S.LoginInput placeholder='비밀번호를 입력해주세요.' />
        </S.LoginInputBox>
        <S.LoginButton>
          <Link href={'/users'}>로그인</Link>
        </S.LoginButton>
        <S.LoginTextBox>
          <S.LoginGuideText>아직 계정이 없으시다면?</S.LoginGuideText>
          <S.LoginSignupText>회원가입</S.LoginSignupText>
        </S.LoginTextBox>
      </S.LoginBox>
    </S.LoginLayout>
  );
}

export default Login;

//Chatty
