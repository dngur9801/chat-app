import React from 'react';
import { userInfoState } from '../../states';
import { useRecoilState } from 'recoil';
import useFetchUsers from '../../hook/useFetchUsers';
import authAPI from '../apis/auth';
import Users from './Users';
import roomsAPI from '../apis/rooms';
import { useRouter } from 'next/router';
import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { IUserInfo } from '../../types';

function UsersContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const uid = userInfo?.uid;
  const userList = useFetchUsers(uid as string);
  const router = useRouter();

  const handleClickCreateChat = async (partnerUid: string) => {
    try {
      const roomId = await roomsAPI.createRoom(uid as string, partnerUid);
      const user = await authAPI.getUser(partnerUid);
      const partnerName = user && user.data()?.nickName;
      router.push(`/chat/${roomId}?type=personal&title=${partnerName}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Users userList={userList} handleClickCreateChat={handleClickCreateChat} />
  );
}

export default UsersContainer;
