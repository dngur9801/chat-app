import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import useFetchChatRooms from '../../../hook/useFetchChatRooms';
import { userInfoState } from '../../../states';
import ChatList from './ChatList';

function ChatListContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const uid = userInfo?.uid;
  const router = useRouter();

  const { chatRoomList } = useFetchChatRooms(uid as string);

  const handleClickMoveChatRoom = (
    roomId: string,
    type: string,
    title: string
  ) => {
    router.push(`/chat/${roomId}?type=${type}&title=${title}`);
  };

  return (
    <ChatList
      chatRoomList={chatRoomList}
      handleClickMoveChatRoom={handleClickMoveChatRoom}
    />
  );
}

export default ChatListContainer;
