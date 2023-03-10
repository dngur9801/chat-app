import React from 'react';
import * as S from './ChatRoomHeader.styles';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface ChatRoomHeaderProps {
  subject?: string;
}

function ChatRoomHeader({ subject }: ChatRoomHeaderProps) {
  const router = useRouter();
  const title = router.query?.title;
  return (
    <S.ChatRoomHeaderBox>
      <S.ChatRoomHeaderButton onClick={() => router.back()}>
        <FaArrowLeft />
      </S.ChatRoomHeaderButton>
      <S.ChatRoomHeaderTitle>{title || subject}</S.ChatRoomHeaderTitle>
    </S.ChatRoomHeaderBox>
  );
}

export default ChatRoomHeader;
