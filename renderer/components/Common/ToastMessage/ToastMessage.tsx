import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { toastMessageState } from '../../../states';
import * as S from './ToastMessage.styles';

interface Props {}

const delay = 400;
const ToastMessage = () => {
  const [toastMessage, setToastMessage] = useRecoilState(toastMessageState);
  const [animation, setAnimation] = useState<
    'openAnimation' | 'closeAnimation' | null
  >('openAnimation');

  useEffect(() => {
    let timer2: NodeJS.Timeout;
    let timer3: NodeJS.Timeout;
    const timer = setTimeout(() => {
      setAnimation(null);
      timer2 = setTimeout(() => {
        setAnimation('closeAnimation');
        timer3 = setTimeout(() => {
          setToastMessage(null);
        }, delay);
      }, 2000);
    }, delay);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [toastMessage]);

  return (
    <S.ToastMessageBox delay={delay} className={animation}>
      <S.ToastMessageText>{toastMessage}</S.ToastMessageText>
    </S.ToastMessageBox>
  );
};

export default ToastMessage;
