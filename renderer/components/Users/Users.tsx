import React from 'react';
import { CHAT_TITLE, USER_LIST_TEXT } from '../../constants';
import Header from '../Common/Header/Header';
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
        <User />
        <User />
      </S.UsersLayout>
    </>
  );
}

export default Users;
