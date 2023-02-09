import { DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import authAPI from '../components/apis/auth';
import roomsAPI from '../components/apis/rooms';
import { IRoom } from '../types';

function useFetchChatRooms(myId: string) {
  const [chatRoomList, setChatRoomList] = useState<IRoom[] | null>(null);

  const getPartnerNickNameObj = async (room: IRoom) => {
    const partnerId = room.users.filter((item: string) => item !== myId)[0];
    const partnerData = await authAPI.getUser(partnerId);
    const partnerNickName = partnerData?.data()?.nickName;
    const updatedPartnerNickObj = { ...room, partnerNickName };
    return updatedPartnerNickObj;
  };

  useEffect(() => {
    (async () => {
      const getRooms = await roomsAPI.getRooms(myId);
      const newChatRoomList: IRoom[] = [];
      getRooms?.forEach(docs => {
        const room = { ...docs.data(), id: docs.id } as IRoom;
        newChatRoomList.push(room);
      });
      const updatedPartnerNickObj = await Promise.all(
        newChatRoomList.map(email => getPartnerNickNameObj(email))
      );
      setChatRoomList(updatedPartnerNickObj);
    })();
  }, []);
  return { chatRoomList };
}

export default useFetchChatRooms;
