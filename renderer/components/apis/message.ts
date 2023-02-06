import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';
import { getDate } from '../../utils';

const messageAPI = {
  collectionName: 'message',

  // 메세지 생성
  async createMessage(
    content: string,
    uid: string,
    nickName: string,
    roomId: string
  ) {
    try {
      const messageRef = await addDoc(collection(db, this.collectionName), {
        roomId,
        content,
        timestamp: getDate(),
        user: {
          avartar: '',
          uid,
          nickName,
        },
      });
      const docRef = doc(db, 'message', messageRef.id);
      return await getDoc(docRef);
    } catch (err) {
      console.error(err);
    }
  },

  async getMessages(roomId: string) {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('roomId', '==', roomId)
      );
      return await getDocs(q);
    } catch (err) {
      console.error(err);
    }
  },
};
export default messageAPI;
