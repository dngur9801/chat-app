import React from 'react';
import { GENERAL_CHAT_TEXT } from '../../constants';
import Header from '../Common/Header/Header';
import * as S from './Chat.styles';
import ChatRoom from './ChatRoom/ChatRoom';

function Chat() {
  return (
    <>
      <Header
        title={GENERAL_CHAT_TEXT}
        description='현재 진행중인 개인 채팅 목록 입니다.'
      />
      <S.ChatLayout>
        <ChatRoom />
        <ChatRoom />
      </S.ChatLayout>
    </>
  );
}

export default Chat;
