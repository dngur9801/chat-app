import React from 'react';
import { useRecoilState } from 'recoil';
import useFetchChatRooms from '../../../hook/useFetchChatRooms';
import useMoveChatRoom from '../../../hook/useMoveChatRoom';
import { userInfoState } from '../../../states';
import ChatList from './ChatList';

function ChatListContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const uid = userInfo?.uid;

  const { chatRoomList } = useFetchChatRooms(uid as string, 'personal');
  const handleClickMoveChatRoom = useMoveChatRoom();

  return (
    <ChatList
      chatRoomList={chatRoomList}
      handleClickMoveChatRoom={handleClickMoveChatRoom}
    />
  );
}

export default ChatListContainer;
