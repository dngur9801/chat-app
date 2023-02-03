import React from 'react';
import * as S from './GroupChatRoom.styles';

function GroupChatRoom() {
  return (
    <S.GroupChatRoomList>
      <S.GroupChatRoomItem>
        <S.GroupChatRoomProfileBox></S.GroupChatRoomProfileBox>
        <S.GroupChatRoomBox>
          <S.GroupChatRoomNameBox>
            <S.GroupChatRoomNameText>카페 갈사람</S.GroupChatRoomNameText>
            <S.GroupChatRoomTotalPeople>6</S.GroupChatRoomTotalPeople>
          </S.GroupChatRoomNameBox>
          <S.GroupChatRoomMessageText>안녕하세요</S.GroupChatRoomMessageText>
        </S.GroupChatRoomBox>
        <S.GroupChatRoomDate>2023.01.02</S.GroupChatRoomDate>
      </S.GroupChatRoomItem>
    </S.GroupChatRoomList>
  );
}

export default GroupChatRoom;
