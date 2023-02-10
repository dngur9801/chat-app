import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  DocumentData,
  DocumentReference,
  getDocs,
  limit,
  orderBy,
  query,
  QueryDocumentSnapshot,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { getRandomBgColor } from '../../utils';

const roomsAPI = {
  collectionName: 'rooms',

  // 1:1 채팅방 생성
  async createPersonalRoom(uid: string, partnerUid: string) {
    try {
      const existRoomId = await this.findExistPersonalRoom(uid, partnerUid);
      if (existRoomId) return existRoomId;
      const roomRef = await addDoc(collection(db, this.collectionName), {
        users: [uid, partnerUid],
        type: 'personal',
        lastContent: '',
        lastDate: '',
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
  async findExistPersonalRoom(uid: string, partnerUid: string) {
    try {
      const personalRoomRef = collection(db, this.collectionName);
      const q = query(
        personalRoomRef,
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
    } catch (err) {
      console.error(err);
    }
  },

  // 마지막 채팅내용과 날짜저장
  async setLastContent(roomId: string, content: string, date: string) {
    try {
      const docRef = doc(db, this.collectionName, roomId);
      const docs = await updateDoc(docRef, {
        lastContent: content,
        lastDate: date,
      });
      return docs;
    } catch (err) {
      console.error(err);
    }
  },

  // 진행중인 채팅방 가져옴
  async getRooms(uid: string, type: string) {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('users', 'array-contains', uid),
        where('type', '==', type)
        // orderBy('lastDate', 'desc')
      );
      return await getDocs(q);
    } catch (err) {
      console.error(err);
    }
  },

  // 그룹 채팅방 생성
  async createGroupRoom(uids: string[], subject: string) {
    try {
      const roomRef = await addDoc(collection(db, this.collectionName), {
        users: uids,
        type: 'group',
        subject,
        lastContent: '',
        lastDate: '',
        avatar: getRandomBgColor(),
      });
      await this.userIntoRoom(uids, roomRef);

      return roomRef.id;
    } catch (err) {
      console.error(err);
    }
  },
};
export default roomsAPI;
