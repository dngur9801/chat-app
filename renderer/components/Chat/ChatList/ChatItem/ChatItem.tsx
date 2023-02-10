import React from 'react';
import { IRoom, MoveChatRoomType } from '../../../../types';
import { getRandomBgColor } from '../../../../utils';
import * as S from './ChatItem.styles';

type ChatItemProps = IRoom & {
  handleClickMoveChatRoom: MoveChatRoomType;
};

function ChatItem({
  id,
  type,
  lastContent,
  lastDate,
  partnerAvatar,
  partnerNickName,
  handleClickMoveChatRoom,
}: ChatItemProps) {
  return (
    <S.ChatItemList
      onClick={() =>
        handleClickMoveChatRoom(id, type, partnerNickName as string)
      }
    >
      <S.ChatItemItem>
        <S.ChatItemProfileBox bgColor={partnerAvatar as string}>
          {partnerNickName?.[0]}
        </S.ChatItemProfileBox>
        <S.ChatItemBox>
          <S.ChatItemNameText>{partnerNickName}</S.ChatItemNameText>
          <S.ChatItemMessageText>{lastContent}</S.ChatItemMessageText>
        </S.ChatItemBox>
        <S.ChatItemDate>{lastDate.split(' ')[0]}</S.ChatItemDate>
      </S.ChatItemItem>
    </S.ChatItemList>
  );
}

export default ChatItem;
