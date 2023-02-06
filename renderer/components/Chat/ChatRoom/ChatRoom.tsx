import React from 'react';
import { IMessage } from '../../../types';
import ChatRoomHeader from '../../Common/ChatRoomHeader/ChatRoomHeader';
import GoBackButton from '../../Common/ChatRoomHeader/ChatRoomHeader';
import * as S from './ChatRoom.styles';
import ContentItem from './ContentItem/ContentItem';

interface ChatRoomProps {
  handleSubmitMessage: (event: React.FormEvent<HTMLFormElement>) => void;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  messageList: IMessage[] | null;
}

function ChatRoom({
  handleSubmitMessage,
  setContent,
  messageList,
}: ChatRoomProps) {
  return (
    <>
      <S.ChatRoomLayout>
        <ChatRoomHeader />
        <S.ChatRoomContentBox>
          <S.ChatRoomContentList>
            {messageList &&
              messageList.map((item, idx) => (
                <ContentItem
                  key={idx}
                  content={item.content}
                  timestamp={item.timestamp}
                  user={item.user}
                />
              ))}
          </S.ChatRoomContentList>
        </S.ChatRoomContentBox>
        <S.ChatRoomFooterBox>
          <S.ChatRoomFooterForm onSubmit={handleSubmitMessage}>
            <S.ChatRoomFooterInput onChange={e => setContent(e.target.value)} />
            <S.ChatRoomFooterSubmit type='submit'>전송</S.ChatRoomFooterSubmit>
          </S.ChatRoomFooterForm>
        </S.ChatRoomFooterBox>
      </S.ChatRoomLayout>
    </>
  );
}

export default ChatRoom;
