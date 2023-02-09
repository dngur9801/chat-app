import React from 'react';
import * as S from './GroupChatItem.styles';

function GroupChatItem() {
  return (
    <S.GroupChatItemList>
      <S.GroupChatItem>
        <S.GroupChatItemProfileBox></S.GroupChatItemProfileBox>
        <S.GroupChatItemBox>
          <S.GroupChatItemNameBox>
            <S.GroupChatItemNameText>카페 갈사람</S.GroupChatItemNameText>
            <S.GroupChatItemTotalPeople>6</S.GroupChatItemTotalPeople>
          </S.GroupChatItemNameBox>
          <S.GroupChatItemMessageText>안녕하세요</S.GroupChatItemMessageText>
        </S.GroupChatItemBox>
        <S.GroupChatItemDate>2023.01.02</S.GroupChatItemDate>
      </S.GroupChatItem>
    </S.GroupChatItemList>
  );
}

export default GroupChatItem;
