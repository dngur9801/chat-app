import React from 'react';
import { GROUP_CHAT_TEXT } from '../../constants';
import Header from '../Common/Header/Header';
import NotResultMessage from '../Common/NotResultMessage/NotResultMessage';
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
        <S.GroupChatCreateButton>그룹 채팅방 생성</S.GroupChatCreateButton>
        {/* <GroupChatRoom />
        <GroupChatRoom /> */}
        <NotResultMessage>
          진행 중인 그룹 채팅 목록이 없습니다.
          <br />
          그룹 채팅방 생성 버튼을 눌러서 <br />
          그룹 채팅방을 만들어보세요!
        </NotResultMessage>
      </S.GroupChatLayout>
    </>
  );
}

export default GroupChat;
