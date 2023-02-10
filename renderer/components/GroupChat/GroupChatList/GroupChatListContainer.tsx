import React from 'react';
import { useRecoilState } from 'recoil';
import useFetchChatRooms from '../../../hook/useFetchChatRooms';
import useMoveChatRoom from '../../../hook/useMoveChatRoom';
import { userInfoState } from '../../../states';
import GroupChatList from './GroupChatList';

function GroupChatListContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const uid = userInfo?.uid;
  const { chatRoomList } = useFetchChatRooms(uid, 'group');
  const handleClickMoveChatRoom = useMoveChatRoom();

  return (
    <GroupChatList
      chatRoomList={chatRoomList}
      handleClickMoveChatRoom={handleClickMoveChatRoom}
    />
  );
}

export default GroupChatListContainer;
