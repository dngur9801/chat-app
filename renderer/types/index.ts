export interface ILoginValue {
  email: string;
  password: string;
}

export interface ISignupValue extends ILoginValue {
  re_password: string;
}

export interface IUserInfo {
  uid: string;
  email: string;
  nickName: string;
  avatar: string;
  rooms: number[];
}

export interface IMessage {
  roomId: string;
  content: string;
  date: string;
  user: {
    avartar: string;
    uid: string;
    nickName: string;
  };
}
export interface IRoom {
  id: string;
  type: string;
  lastContent: string;
  lastDate: string;
  subject?: string;
  avatar?: string;
  partnerNickName?: string;
  partnerAvatar?: string;
  users: string[];
}

export type MoveChatRoomType = (
  roomId: string,
  type: string,
  title: string
) => void;

export type MenuList = {
  title: string;
  path: string;
  icon: () => JSX.Element;
};
