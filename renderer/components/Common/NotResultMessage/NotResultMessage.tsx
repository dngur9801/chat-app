import React from 'react';
import * as S from './NotResultMessage.styles';

function NotResultMessage({ children }) {
  return (
    <S.NotResultMessageLayout>
      <S.NotResultMessageText>{children}</S.NotResultMessageText>
    </S.NotResultMessageLayout>
  );
}

export default NotResultMessage;
