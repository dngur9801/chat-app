import { atom } from 'recoil';
import { userInfoInitialValue } from '../utils';

export const toastMessageState = atom({
  key: 'toastMessageState',
  default: null,
});

export const userInfoState = atom({
  key: 'userInfoState',
  default: userInfoInitialValue(),
});
