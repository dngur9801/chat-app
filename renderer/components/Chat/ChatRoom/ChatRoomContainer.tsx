import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import useMessageList from '../../../hook/useMessageList';
import { userInfoState } from '../../../states';
import messageAPI from '../../apis/message';
import ChatRoom from './ChatRoom';

function ChatRoomContainer() {
  const [content, setContent] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const router = useRouter();
  const roomId = router.query.chatRoom;

  const { messageList, setMessageList } = useMessageList(roomId as string);

  console.log('messageList : ', messageList);

  const handleSubmitMessage = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const message = await messageAPI.createMessage(
      content,
      userInfo?.uid as string,
      userInfo?.nickName as string,
      roomId as string
    );
    setMessageList([...(messageList as any), { ...message?.data() }]);
    console.log('message : ', message?.data());
  };
  return (
    <ChatRoom
      handleSubmitMessage={handleSubmitMessage}
      setContent={setContent}
      messageList={messageList}
    />
  );
}

export default ChatRoomContainer;
