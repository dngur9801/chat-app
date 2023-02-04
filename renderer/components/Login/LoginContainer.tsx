import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import firebase from 'firebase/app';
import {
  auth,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from '../../config/firebaseConfig';
import { toastMessageState, userInfoState } from '../../states';
import Login from './Login';
import { useRouter } from 'next/router';
import { loginInitialValue } from '../../utils';

function LoginContainer() {
  const [loginValue, setLoginValue] = useState(loginInitialValue());
  const [toastMessage, setToastMessage] = useRecoilState(toastMessageState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // TODO: 추후 코드 리팩토링
  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = loginValue;
    if (!email || !password) {
      return setToastMessage('🚫 모든 항목을 입력해 주세요.');
    }
    try {
      const curUserInfo = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUserInfo({
        id: curUserInfo.user.email.split('@')[0],
        uid: curUserInfo.user.uid,
      });
      setToastMessage('✅ 로그인이 완료되었습니다.');
      router.push('/users');
    } catch (err) {
      console.log(err);
      switch (err.code) {
        case 'auth/invalid-email':
          setToastMessage('🚫 잘못된 이메일 주소 형식입니다.');
          break;
        case 'auth/user-not-found':
          setToastMessage('🚫 가입된 이메일 주소가 아닙니다.');
          break;
        case 'auth/wrong-password':
          setToastMessage('🚫 비밀번호를 잘못 입력하셨습니다.');
          break;
      }
    }
  };
  return (
    <Login handleChange={handleChange} handleSubmitLogin={handleSubmitLogin} />
  );
}

export default LoginContainer;
