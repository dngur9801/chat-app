import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../../../states';
import * as S from './ContentItem.styles';

interface ContentItemProps {
  content: string;
  timestamp: string;
  user: {
    avartar: string;
    nickName: string;
    uid: string;
  };
}

function ContentItem({
  content,
  timestamp,
  user: { avartar, nickName, uid },
}: ContentItemProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const isMyMessage = userInfo?.uid === uid;
  console.log('isMyMessage: ', isMyMessage);
  return (
    <S.ContentItem isMyMessage={isMyMessage}>
      {!isMyMessage && <S.ContentItemImg></S.ContentItemImg>}
      <S.ContentItemBox>
        {!isMyMessage && (
          <S.ContentItemUserName>{nickName}</S.ContentItemUserName>
        )}
        <S.ContentItemMessageBox isMyMessage={isMyMessage}>
          <S.ContentItemMessageText>{content}</S.ContentItemMessageText>
          <S.ContentItemDate>{timestamp}</S.ContentItemDate>
        </S.ContentItemMessageBox>
      </S.ContentItemBox>
    </S.ContentItem>
  );
}

export default ContentItem;
