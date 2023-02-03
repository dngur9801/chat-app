import React from 'react';
import * as S from './ChatRoomHeader.styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

function ChatRoomHeader() {
  const router = useRouter();
  return (
    <S.ChatRoomHeaderBox>
      <S.ChatRoomHeaderButton onClick={() => router.back()}>
        <FaArrowLeft />
      </S.ChatRoomHeaderButton>
      <S.ChatRoomHeaderTitle>제목 입니다.</S.ChatRoomHeaderTitle>
    </S.ChatRoomHeaderBox>
  );
}

export default ChatRoomHeader;
