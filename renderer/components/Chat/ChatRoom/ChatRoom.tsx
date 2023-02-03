import React from 'react';
import * as S from './ChatRoom.styles';

function ChatRoom() {
  return (
    <S.ChatRoomLayout>
      <S.ChatRoomList>
        <S.ChatRoomItem>
          <S.ChatRoomProfileBox></S.ChatRoomProfileBox>
          <S.ChatRoomNameTextBox>
            <S.ChatRoomNameText>dngur9801</S.ChatRoomNameText>
            <S.ChatRoomMessageText>안녕하세요</S.ChatRoomMessageText>
          </S.ChatRoomNameTextBox>
          <S.ChatRoomDate>2023.01.02</S.ChatRoomDate>
        </S.ChatRoomItem>
      </S.ChatRoomList>
    </S.ChatRoomLayout>
  );
}

export default ChatRoom;
