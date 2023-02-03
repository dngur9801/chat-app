import Link from 'next/link';
import React from 'react';
import { CHAT_TITLE, USER_LIST_TEXT } from '../../constants';
import Header from '../Common/Header/Header';
import NotResultMessage from '../Common/NotResultMessage/NotResultMessage';
import User from './User/User';
import * as S from './Users.styles';

function Users() {
  return (
    <>
      <Header
        title={USER_LIST_TEXT}
        description={`현재 ${CHAT_TITLE}을 이용중인 유저 목록 입니다.\n 원하시는 상대에게 채팅을 요청해보세요!`}
      />
      <S.UsersLayout>
        {/* <User />
        <User /> */}
        <NotResultMessage>
          현재 이용 중인 유저가 없어서
          <br /> 채팅을 요청할 수 없습니다. 😂
        </NotResultMessage>
        <Link href={'/chat/23'}>
          <a>go chatroom</a>
        </Link>
      </S.UsersLayout>
    </>
  );
}

export default Users;
