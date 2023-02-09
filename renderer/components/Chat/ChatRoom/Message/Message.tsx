import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../states';
import * as S from './Message.styles';

interface MessageProps {
  content: string;
  timestamp: string;
  user: {
    avartar: string;
    nickName: string;
    uid: string;
  };
}

function Message({
  content,
  timestamp,
  user: { avartar, nickName, uid },
}: MessageProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const isMyMessage = userInfo?.uid === uid;
  return (
    <S.MessageLayout isMyMessage={isMyMessage}>
      {!isMyMessage && <S.MessageImg></S.MessageImg>}
      <S.MessageBox>
        {!isMyMessage && <S.MessageUserName>{nickName}</S.MessageUserName>}
        <S.MessageMessageBox isMyMessage={isMyMessage}>
          <S.MessageMessageText>{content}</S.MessageMessageText>
          <S.MessageDate>{timestamp}</S.MessageDate>
        </S.MessageMessageBox>
      </S.MessageBox>
    </S.MessageLayout>
  );
}

export default Message;
