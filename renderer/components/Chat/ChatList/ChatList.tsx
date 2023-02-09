import Link from 'next/link';
import React from 'react';
import { GENERAL_CHAT_TEXT } from '../../../constants';
import { IRoom } from '../../../types';
import Header from '../../Common/Header/Header';
import NotResultMessage from '../../Common/NotResultMessage/NotResultMessage';
import ChatItem from './ChatItem/ChatItem';
import * as S from './ChatList.styles';

interface ChatListProps {
  chatRoomList: IRoom[] | null;
  handleClickMoveChatRoom: (
    roomId: string,
    type: string,
    title: string
  ) => void;
}
function ChatList({ chatRoomList, handleClickMoveChatRoom }: ChatListProps) {
  return (
    <>
      <Header
        title={GENERAL_CHAT_TEXT}
        description='현재 진행중인 개인 채팅 목록 입니다.'
      />
      <S.ChatListLayout>
        {chatRoomList?.map(item => (
          <ChatItem
            key={item.id}
            roomId={item.id}
            roomType={item.type}
            lastContent={item.lastContent}
            lastDate={item.lastDate}
            partnerAvatar={item.partnerAvatar}
            partnerNickName={item.partnerNickName}
            handleClickMoveChatRoom={handleClickMoveChatRoom}
          />
        ))}
        {chatRoomList?.length === 0 && (
          <NotResultMessage>
            현재 진행중인 1:1 채팅이 없습니다.
            <br /> 원하시는 상대에게 채팅 요청을 해보세요!
            <br />
            <Link href='/users'>
              <a>채팅 요청하러 가기</a>
            </Link>
          </NotResultMessage>
        )}
      </S.ChatListLayout>
    </>
  );
}

export default ChatList;
