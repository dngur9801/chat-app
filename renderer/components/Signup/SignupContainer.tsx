import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { LOGIN_PATH } from '../../constants';
import { toastMessageState } from '../../states';
import { ISignupValue } from '../../types';
import authAPI from '../apis/auth';
import Signup from './Signup';

function SignupContainer() {
  const [signupValue, setSignupValue] = useState<ISignupValue>(
    {} as ISignupValue
  );
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
      return setToastMessage('π« λͺ¨λ  ν­λͺ©μ μλ ₯ν΄ μ£ΌμΈμ.');
    }
    if (re_password !== password) {
      return setToastMessage('π« λΉλ°λ²νΈλ₯Ό μ¬μλ ₯ν΄ μ£ΌμΈμ.');
    }
    try {
      await authAPI.createUser(email, password);
      setToastMessage('β νμκ°μμ΄ μλ£λμμ΅λλ€.');
      router.push(LOGIN_PATH);
    } catch (err: any) {
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
