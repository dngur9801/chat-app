import React from 'react';
import { CHAT_TITLE, USER_LIST_TEXT } from '../../constants';
import { IUserInfo } from '../../types';
import Header from '../Common/Header/Header';
import NotResultMessage from '../Common/NotResultMessage/NotResultMessage';
import User from './User/User';
import * as S from './Users.styles';

interface UsersProps {
  userList: IUserInfo[] | null;
  handleClickCreateChat: (partnerUid: string) => void;
}

function Users({ userList, handleClickCreateChat }: UsersProps) {
  return (
    <>
      <Header
        title={USER_LIST_TEXT}
        description={`현재 ${CHAT_TITLE}을 이용중인 유저 목록 입니다.\n 원하시는 상대에게 채팅을 요청해보세요!`}
      />
      <S.UsersLayout>
        {userList?.map(item => (
          <User
            key={item.uid}
            nickName={item.nickName}
            uid={item.uid}
            handleClickCreateChat={handleClickCreateChat}
          />
        ))}
        {!userList ||
          (userList.length === 0 && (
            <NotResultMessage>
              현재 이용 중인 유저가 없어서
              <br /> 채팅을 요청할 수 없습니다. 😂
            </NotResultMessage>
          ))}
      </S.UsersLayout>
    </>
  );
}

export default Users;
