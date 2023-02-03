import React from 'react';
import * as S from './ContentItem.styles';

function ContentItem() {
  return (
    <S.ContentItem>
      <S.ContentItemImg></S.ContentItemImg>
      <S.ContentItemBox>
        <S.ContentItemUserName>dngur9801</S.ContentItemUserName>
        <S.ContentItemMessageBox>
          <S.ContentItemMessageText>
            안녕하세요 메세지입니다.
          </S.ContentItemMessageText>
          <S.ContentItemDate>2023.01.02</S.ContentItemDate>
        </S.ContentItemMessageBox>
      </S.ContentItemBox>
    </S.ContentItem>
  );
}

export default ContentItem;
