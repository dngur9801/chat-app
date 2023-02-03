import React from 'react';
import ChatRoomHeader from '../../Common/ChatRoomHeader/ChatRoomHeader';
import GoBackButton from '../../Common/ChatRoomHeader/ChatRoomHeader';
import * as S from './ChatRoom.styles';
import ContentItem from './ContentItem/ContentItem';

function ChatRoom() {
  return (
    <>
      <S.ChatRoomLayout>
        <ChatRoomHeader />
        <S.ChatRoomContentBox>
          <S.ChatRoomContentList>
            <ContentItem />
            <ContentItem />
            <ContentItem />
            <ContentItem />
          </S.ChatRoomContentList>
        </S.ChatRoomContentBox>
        <S.ChatRoomFooterBox>
          <S.ChatRoomFooterForm>
            <S.ChatRoomFooterInput />
            <S.ChatRoomFooterSubmit type='submit'>전송</S.ChatRoomFooterSubmit>
          </S.ChatRoomFooterForm>
        </S.ChatRoomFooterBox>
      </S.ChatRoomLayout>
    </>
  );
}

export default ChatRoom;
