import React from 'react';
import * as S from './GroupChatList.styles';
import GroupChatItem from './GroupChatItem/GroupChatItem';
import { GROUP_CHAT_TEXT } from '../../../constants';
import NotResultMessage from '../../Common/NotResultMessage/NotResultMessage';
import Header from '../../Common/Header/Header';
import Link from 'next/link';

function GroupChatList() {
  return (
    <>
      <Header
        title={GROUP_CHAT_TEXT}
        description='현재 진행중인 그룹 채팅 목록 입니다. '
      />
      <S.GroupChatListLayout>
        <S.GroupChatListCreateButton>
          <Link href={'/group-chat/create'}>
            <a>그룹 채팅방 생성</a>
          </Link>
        </S.GroupChatListCreateButton>
        {/* <GroupChatItem />
        <GroupChatItem /> */}
        <NotResultMessage>
          진행 중인 그룹 채팅 목록이 없습니다.
          <br />
          그룹 채팅방 생성 버튼을 눌러서 <br />
          그룹 채팅방을 만들어보세요!
        </NotResultMessage>
      </S.GroupChatListLayout>
    </>
  );
}

export default GroupChatList;
