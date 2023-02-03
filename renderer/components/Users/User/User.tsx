import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import * as S from './User.styles';

function User() {
  return (
    <S.UserLayout>
      <S.UserList>
        <S.UserItem>
          <S.UserProfileBox></S.UserProfileBox>
          <S.UserNameText>dngur9801</S.UserNameText>
          <S.UserSendImgBox>
            <FaCommentDots size={26} />
          </S.UserSendImgBox>
        </S.UserItem>
      </S.UserList>
    </S.UserLayout>
  );
}

export default User;
