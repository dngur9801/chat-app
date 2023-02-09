import React from 'react';
import { IUserInfo } from '../../../types';
import { getRandomBgColor } from '../../../utils';
import ChatRoomHeader from '../../Common/ChatRoomHeader/ChatRoomHeader';
import * as S from './CreateChat.styles';
import UserItem from './UserItem/UserItem';

interface CreateChatProps {
  userList: IUserInfo[] | null;
  handleChangeChecked: (checked: boolean, userInfo: IUserInfo) => void;
  checkedList: IUserInfo[];
  isDisabled: boolean;
  setSubject: React.Dispatch<React.SetStateAction<string>>;
}

function CreateChat({
  userList,
  handleChangeChecked,
  checkedList,
  isDisabled,
  setSubject,
}: CreateChatProps) {
  return (
    <>
      <ChatRoomHeader subject='그룹 채팅 초대' />
      <S.CreateChatLayout>
        <S.CreateChatTitle>제목</S.CreateChatTitle>
        <S.CreateChatInput
          placeholder='채팅방 제목을 입력하세요.'
          onChange={e => setSubject(e.target.value)}
        />
        <S.CreateChatTitle>초대 목록</S.CreateChatTitle>
        <S.CreateChatInviteList>
          {checkedList?.map(item => (
            <S.CreateChatInviteItem>
              <S.CreateChatInviteUserAvatar bgColor={item.avatar}>
                {item.nickName[0]}
              </S.CreateChatInviteUserAvatar>
              <S.CreateChatInviteUserName>
                {item.nickName}
              </S.CreateChatInviteUserName>
            </S.CreateChatInviteItem>
          ))}
        </S.CreateChatInviteList>
        <S.CreateChatTitle>초대 가능한 유저 리스트</S.CreateChatTitle>
        <S.CreateChatUserList>
          {userList?.map(item => (
            <UserItem
              key={item.uid}
              item={item}
              handleChangeChecked={handleChangeChecked}
            />
          ))}
        </S.CreateChatUserList>
        <S.CreateChatComplete disabled={isDisabled}>완료</S.CreateChatComplete>
      </S.CreateChatLayout>
    </>
  );
}

export default CreateChat;
