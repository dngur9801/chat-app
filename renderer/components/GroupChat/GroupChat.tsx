import React from 'react';
import { GROUP_CHAT_TEXT } from '../../constants';
import Header from '../Common/Header/Header';
import * as S from './GroupChat.styles';
import GroupChatRoom from './GroupChatRoom/GroupChatRoom';

function GroupChat() {
  return (
    <>
      <Header
        title={GROUP_CHAT_TEXT}
        description='현재 진행중인 그룹 채팅 목록 입니다. '
      />
      <S.GroupChatLayout>
        <GroupChatRoom />
        <GroupChatRoom />
      </S.GroupChatLayout>
    </>
  );
}

export default GroupChat;
