import { collection, getDocs } from 'firebase/firestore';
import React from 'react';
import { auth, db } from '../../config/firebaseConfig';
import { userInfoState } from '../../states';
import { useRecoilState } from 'recoil';
import useUserList from '../../hook/useUserList';
import authAPI from '../apis/auth';
import Users from './Users';
import roomsAPI from '../apis/rooms';
import { useRouter } from 'next/router';

function UsersContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const uid = userInfo?.uid;
  const userList = useUserList(uid as string);

  const router = useRouter();

  const handleClickCreateChat = async (
    partnerUid: string,
    nickName: string
  ) => {
    try {
      const roomId = await roomsAPI.createRoom(uid as string, partnerUid);
      router.push(`/chat/${roomId}?type=personal&title=${nickName}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Users userList={userList} handleClickCreateChat={handleClickCreateChat} />
  );
}

export default UsersContainer;
