import { addDoc, collection } from 'firebase/firestore';
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  signInWithEmailAndPassword,
} from '../../config/firebaseConfig';
import { changeErrorMessage } from '../../utils';

const authAPI = {
  collectionName: 'users',
  async createUser(email: string, password: string) {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await this.saveUser(userData.user.email, userData.user.uid);
    } catch (err) {
      throw Error(changeErrorMessage(err.code));
    }
  },

  async saveUser(email: string, uid: string) {
    try {
      await addDoc(collection(db, this.collectionName), {
        email,
        uid,
        rooms: [],
      });
    } catch (err) {
      console.error(err);
    }
  },

  async login(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      throw Error(changeErrorMessage(err.code));
    }
  },
};

export default authAPI;
