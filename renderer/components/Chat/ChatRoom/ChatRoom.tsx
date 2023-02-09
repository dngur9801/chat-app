import React from 'react';
import { IMessage } from '../../../types';
import ChatRoomHeader from '../../Common/ChatRoomHeader/ChatRoomHeader';
import GoBackButton from '../../Common/ChatRoomHeader/ChatRoomHeader';
import * as S from './ChatRoom.styles';
import Message from './Message/Message';

interface ChatRoomProps {
  handleSubmitMessage: (event: React.FormEvent<HTMLFormElement>) => void;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  messageList: IMessage[] | null;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
}

function ChatRoom({
  handleSubmitMessage,
  content,
  setContent,
  messageList,
  inputRef,
  scrollRef,
}: ChatRoomProps) {
  return (
    <>
      <S.ChatRoomLayout>
        <ChatRoomHeader />
        <S.ChatRoomContentBox ref={scrollRef}>
          <S.ChatRoomContentList>
            {messageList &&
              messageList.map((item, idx) => (
                <Message
                  key={idx}
                  content={item.content}
                  date={item.date}
                  user={item.user}
                />
              ))}
          </S.ChatRoomContentList>
        </S.ChatRoomContentBox>
        <S.ChatRoomFooterBox>
          <S.ChatRoomFooterForm onSubmit={handleSubmitMessage}>
            <S.ChatRoomFooterInput
              ref={inputRef}
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            <S.ChatRoomFooterSubmit type='submit'>전송</S.ChatRoomFooterSubmit>
          </S.ChatRoomFooterForm>
        </S.ChatRoomFooterBox>
      </S.ChatRoomLayout>
    </>
  );
}

export default ChatRoom;
