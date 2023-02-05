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
  rooms: number[];
}

export interface IMessage {
  roomId: string;
  content: string;
  timestamp: string;
  user: {
    avartar: string;
    uid: string;
    nickName: string;
  };
}
