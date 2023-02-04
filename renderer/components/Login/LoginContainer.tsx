import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { toastMessageState, userInfoState } from '../../states';
import Login from './Login';
import { loginInitialValue } from '../../utils';
import authAPI from '../apis/auth';

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

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = loginValue;
    if (!email || !password) {
      return setToastMessage('🚫 모든 항목을 입력해 주세요.');
    }
    try {
      const userData = await authAPI.login(email, password);
      setToastMessage('✅ 로그인이 완료되었습니다.');
      setUserInfo({
        id: userData.user.email.split('@')[0],
        uid: userData.user.uid,
      });
      router.push('/users');
    } catch (err) {
      setToastMessage(err.message);
    }
  };
  return (
    <Login handleChange={handleChange} handleSubmitLogin={handleSubmitLogin} />
  );
}

export default LoginContainer;
