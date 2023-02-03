import React from 'react';
import * as S from './ChatItem.styles';

function ChatItem() {
  return (
    <S.ChatItemList>
      <S.ChatItemItem>
        <S.ChatItemProfileBox></S.ChatItemProfileBox>
        <S.ChatItemBox>
          <S.ChatItemNameText>dngur9801</S.ChatItemNameText>
          <S.ChatItemMessageText>안녕하세요</S.ChatItemMessageText>
        </S.ChatItemBox>
        <S.ChatItemDate>2023.01.02</S.ChatItemDate>
      </S.ChatItemItem>
    </S.ChatItemList>
  );
}

export default ChatItem;
