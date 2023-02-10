import React from 'react';
import { IRoom, MoveChatRoomType } from '../../../../types';
import * as S from './GroupChatItem.styles';

type GroupChatItemProps = IRoom & {
  totalPeople: number;
  handleClickMoveChatRoom: MoveChatRoomType;
};

function GroupChatItem({
  id,
  subject,
  lastContent,
  lastDate,
  avatar,
  totalPeople,
  handleClickMoveChatRoom,
}: GroupChatItemProps) {
  return (
    <S.GroupChatItemList
      onClick={() => handleClickMoveChatRoom(id, 'group', subject as string)}
    >
      <S.GroupChatItem>
        <S.GroupChatItemProfileBox bgColor={avatar as string}>
          {subject?.[0]}
        </S.GroupChatItemProfileBox>
        <S.GroupChatItemBox>
          <S.GroupChatItemNameBox>
            <S.GroupChatItemNameText>{subject}</S.GroupChatItemNameText>
            <S.GroupChatItemTotalPeople>
              {totalPeople}
            </S.GroupChatItemTotalPeople>
          </S.GroupChatItemNameBox>
          <S.GroupChatItemMessageText>{lastContent}</S.GroupChatItemMessageText>
        </S.GroupChatItemBox>
        <S.GroupChatItemDate>{lastDate.split(' ')[0]}</S.GroupChatItemDate>
      </S.GroupChatItem>
    </S.GroupChatItemList>
  );
}

export default GroupChatItem;
