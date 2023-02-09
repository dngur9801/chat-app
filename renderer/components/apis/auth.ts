import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  signInWithEmailAndPassword,
} from '../../config/firebaseConfig';
import { changeErrorMessage } from '../../utils';

const authAPI = {
  collectionName: 'users' as const,
  // 유저 생성
  async createUser(email: string, password: string) {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await this.saveUser(userData.user.email as string, userData.user.uid);
    } catch (err: any) {
      throw Error(changeErrorMessage(err.code));
    }
  },

  // 생성한 유저 store에 저장
  async saveUser(email: string, uid: string) {
    try {
      await setDoc(doc(db, this.collectionName, uid), {
        uid,
        email,
        nickName: email?.split('@')[0],
        rooms: [],
      });
    } catch (err) {
      console.error(err);
    }
  },

  // 로그인
  async login(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      throw Error(changeErrorMessage(err.code));
    }
  },

  // 나를 제외한 전체 유저리스트 가져옴
  async getUserList(uid: string) {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('uid', '!=', uid)
      );
      return await getDocs(q);
    } catch (err: any) {
      console.error(err);
    }
  },

  // 해당하는 유저 정보 가져옴
  async getUser(uid: string) {
    try {
      const docRef = doc(db, 'users', uid);
      return await getDoc(docRef);
    } catch (err: any) {
      console.error(err);
    }
  },
};

export default authAPI;
