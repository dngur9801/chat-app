import { atom } from 'recoil';
import { IUserInfo } from '../types';

export const toastMessageState = atom<string | null>({
  key: 'toastMessageState',
  default: null,
});

export const userInfoState = atom<IUserInfo | null>({
  key: 'userInfoState',
  default: null,
});
