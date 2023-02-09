import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import useFetchMessages from '../../../hook/useFetchMessages';
import { userInfoState } from '../../../states';
import messageAPI from '../../apis/messages';
import roomsAPI from '../../apis/rooms';
import ChatRoom from './ChatRoom';

function ChatRoomContainer() {
  const [content, setContent] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const roomId = router.query.chatRoom;

  const { messageList, setMessageList } = useFetchMessages(roomId as string);

  const handleSubmitMessage = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    inputRef && inputRef.current?.focus();
    setContent('');

    const message = await messageAPI.createMessage(
      content,
      userInfo?.uid as string,
      userInfo?.nickName as string,
      roomId as string
    );
    await roomsAPI.setLastContent(
      roomId as string,
      content,
      message?.data()?.date
    );
    setMessageList([...(messageList as any), { ...message?.data() }]);
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  return (
    <ChatRoom
      handleSubmitMessage={handleSubmitMessage}
      content={content}
      setContent={setContent}
      messageList={messageList}
      inputRef={inputRef}
      scrollRef={scrollRef}
    />
  );
}

export default ChatRoomContainer;
