import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

import { toastMessageState, userInfoState } from '../../states';
import Login from './Login';
import authAPI from '../apis/auth';
import { ILoginValue } from '../../types';
import roomsAPI from '../apis/rooms';

function LoginContainer() {
  const [loginValue, setLoginValue] = useState<ILoginValue>({} as ILoginValue);
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
      const user = await authAPI.getUser(userData.user.uid);
      setToastMessage('✅ 로그인이 완료되었습니다.');
      setUserInfo({
        uid: userData.user.uid,
        email: userData.user.email as string,
        nickName: userData.user?.email?.split('@')[0] as string,
        rooms: user && user.data()?.rooms,
        avatar: user && user.data()?.avatar,
      });
      router.push('/users');
    } catch (err: any) {
      setToastMessage(err.message);
    }
  };
  return (
    <Login handleChange={handleChange} handleSubmitLogin={handleSubmitLogin} />
  );
}

export default LoginContainer;
