import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { LOGIN_PATH } from '../../constants';
import { toastMessageState } from '../../states';
import { signupInitialValue } from '../../utils';
import authAPI from '../apis/auth';
import Signup from './Signup';

function SignupContainer() {
  const [signupValue, setSignupValue] = useState(signupInitialValue());
  const [toastMessage, setToastMessage] = useRecoilState(toastMessageState);

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupValue(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickRegister = async () => {
    const { email, password, re_password } = signupValue;
    if (!email || !password || !re_password) {
      return setToastMessage('🚫 모든 항목을 입력해 주세요.');
    }
    if (re_password !== password) {
      return setToastMessage('🚫 비밀번호를 재입력해 주세요.');
    }
    try {
      await authAPI.createUser(email, password);
      setToastMessage('✅ 회원가입이 완료되었습니다.');
      router.push(LOGIN_PATH);
    } catch (err) {
      setToastMessage(err.message);
    }
  };
  return (
    <Signup
      handleChange={handleChange}
      handleClickRegister={handleClickRegister}
    />
  );
}

export default SignupContainer;
