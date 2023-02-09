import React from 'react';
import { getRandomBgColor } from '../../../../utils';
import * as S from './ChatItem.styles';

interface ChatItemProps {
  roomId: string;
  roomType: string;
  lastContent: string;
  lastDate: string;
  partnerNickName: string;
  partnerAvatar: string;
  handleClickMoveChatRoom: (
    roomId: string,
    type: string,
    title: string
  ) => void;
}

function ChatItem({
  roomId,
  roomType,
  lastContent,
  lastDate,
  partnerAvatar,
  partnerNickName,
  handleClickMoveChatRoom,
}: ChatItemProps) {
  return (
    <S.ChatItemList
      onClick={() => handleClickMoveChatRoom(roomId, roomType, partnerNickName)}
    >
      <S.ChatItemItem>
        <S.ChatItemProfileBox bgColor={partnerAvatar}>
          {partnerNickName[0]}
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
