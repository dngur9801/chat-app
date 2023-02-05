import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import authAPI from '../components/apis/auth';

import { IUserInfo } from '../types';

function useUserList(myId: string) {
  const [userList, setUserList] = useState<IUserInfo[] | null>(null);

  useEffect(() => {
    (async () => {
      const getUsers = await authAPI.getUserList(myId);
      const newUserList: IUserInfo[] = [];
      getUsers?.forEach(docs => newUserList.push(docs.data() as IUserInfo));
      setUserList(newUserList);
    })();
  }, []);
  return userList;
}

export default useUserList;
