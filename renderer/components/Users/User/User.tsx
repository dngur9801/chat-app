import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import { getRandomBgColor } from '../../../utils';
import * as S from './User.styles';

interface UserProps {
  nickName: string;
  uid: string;
  avatar: string;
  handleClickCreateChat: (partnerUid: string) => void;
}

function User({ nickName, uid, avatar, handleClickCreateChat }: UserProps) {
  return (
    <S.UserList>
      <S.UserItem>
        <S.UserProfileBox bgColor={avatar}>{nickName[0]}</S.UserProfileBox>
        <S.UserNameText>{nickName}</S.UserNameText>
        <S.UserSendImgBox onClick={() => handleClickCreateChat(uid)}>
          <FaCommentDots size={26} />
        </S.UserSendImgBox>
      </S.UserItem>
    </S.UserList>
  );
}

export default User;
