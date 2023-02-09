import { atom } from 'recoil';
import { IUserInfo } from '../types';

export const toastMessageState = atom<string>({
  key: 'toastMessageState',
  default: '',
});

export const userInfoState = atom<IUserInfo>({
  key: 'userInfoState',
  default: {
    uid: '',
    email: '',
    nickName: '',
    rooms: [],
  },
});
