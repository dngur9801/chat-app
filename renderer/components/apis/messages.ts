import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { getDate } from '../../utils';

const messageAPI = {
  collectionName: 'messages',

  // 메세지 생성
  async createMessage(
    content: string,
    uid: string,
    nickName: string,
    roomId: string,
    avatar: string
  ) {
    try {
      const messageRef = await addDoc(collection(db, this.collectionName), {
        roomId,
        content,
        date: getDate(),
        user: {
          avartar: avatar,
          uid,
          nickName,
        },
      });
      const docRef = doc(db, this.collectionName, messageRef.id);
      return await getDoc(docRef);
    } catch (err) {
      console.error(err);
    }
  },

  // 해당하는 채팅방 메세지 가져옴
  async getMessages(roomId: string) {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('roomId', '==', roomId),
        orderBy('date', 'asc')
      );
      return await getDocs(q);
    } catch (err) {
      console.error(err);
    }
  },
};
export default messageAPI;
