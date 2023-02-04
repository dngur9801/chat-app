import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  createUserWithEmailAndPassword,
  firebaseAuth,
} from '../../config/firebaseConfig';
import { LOGIN_PATH } from '../../constants';
import { ToastMessageState } from '../../states';
import Signup from './Signup';

const initialValue = {
  email: '',
  password: '',
  re_password: '',
};

function SignupContainer() {
  const [signupValue, setSignupValue] = useState(initialValue);
  const [toastMessage, setToastMessage] = useRecoilState(ToastMessageState);

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // TODO: 추후 코드 리팩토링
  const handleClickRegister = async () => {
    const { email, password, re_password } = signupValue;
    if (!email || !password || !re_password) {
      return setToastMessage('🚫 모든 항목을 입력해 주세요.');
    }

    if (re_password !== password) {
      return setToastMessage('🚫 비밀번호를 재입력해 주세요.');
    }
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      setToastMessage('✅ 회원가입이 완료되었습니다.');
      router.push(LOGIN_PATH);
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          setToastMessage('🚫 잘못된 이메일 주소 형식입니다.');
          break;
        case 'auth/weak-password':
          setToastMessage('🚫 비밀번호는 6자리 이상이어야 합니다.');
          break;
        case 'auth/email-already-in-use':
          setToastMessage('🚫 이미 가입되어 있는 계정입니다.');
          break;
      }
    }
  };
  return (
    <Signup
      handleChange={handleChange}
      handleClickRegister={handleClickRegister}
      toastMessage={toastMessage}
    />
  );
}

export default SignupContainer;
