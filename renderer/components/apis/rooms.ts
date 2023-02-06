import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  DocumentData,
  DocumentReference,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

const roomsAPI = {
  collectionName: 'rooms',

  // 채팅방 생성
  async createRoom(uid: string, partnerUid: string) {
    try {
      const existRoomId = await this.findExistPersonalChatRoom(uid, partnerUid);
      if (existRoomId) return existRoomId;
      const roomRef = await addDoc(collection(db, this.collectionName), {
        users: [uid, partnerUid],
        type: 'personal',
      });
      await this.userIntoRoom([uid, partnerUid], roomRef);

      return roomRef.id;
    } catch (err) {
      console.error(err);
    }
  },

  // 채팅방 유저 입장
  async userIntoRoom(uids: string[], roomRef: DocumentReference<DocumentData>) {
    try {
      await Promise.all(
        uids.map(uid =>
          updateDoc(doc(db, 'users', uid), {
            rooms: arrayUnion(roomRef.id),
          })
        )
      );
    } catch (err) {
      console.error(err);
    }
  },

  // 상대와의 채팅방이 이미 생성되어있는지 체크
  async findExistPersonalChatRoom(uid: string, partnerUid: string) {
    const personalChatRoomRef = collection(db, this.collectionName);

    const q = query(
      personalChatRoomRef,
      where('users', 'in', [
        [uid, partnerUid],
        [partnerUid, uid],
      ]),
      limit(1)
    );
    const docs = await getDocs(q);

    const rooms: QueryDocumentSnapshot<DocumentData>[] = [];

    docs.forEach(room => {
      rooms.push(room);
    });

    return rooms[0]?.id;
  },
};
export default roomsAPI;
