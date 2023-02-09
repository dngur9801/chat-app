import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import * as S from './User.styles';

interface UserProps {
  nickName: string | undefined;
  uid: string;
  handleClickCreateChat: (partnerUid: string) => void;
}

function User({ nickName, uid, handleClickCreateChat }: UserProps) {
  return (
    <S.UserList>
      <S.UserItem>
        <S.UserProfileBox></S.UserProfileBox>
        <S.UserNameText>{nickName}</S.UserNameText>
        <S.UserSendImgBox onClick={() => handleClickCreateChat(uid)}>
          <FaCommentDots size={26} />
        </S.UserSendImgBox>
      </S.UserItem>
    </S.UserList>
  );
}

export default User;
