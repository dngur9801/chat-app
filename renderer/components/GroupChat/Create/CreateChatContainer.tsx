import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import useFetchUsers from '../../../hook/useFetchUsers';
import { userInfoState } from '../../../states';
import { IUserInfo } from '../../../types';
import CreateChat from './CreateChat';

function CreateChatContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [checkedList, setCheckedList] = useState<IUserInfo[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [subject, setSubject] = useState('');
  const uid = userInfo?.uid;
  const userList = useFetchUsers(uid);

  const handleChangeChecked = (checked: boolean, userInfo: IUserInfo) => {
    if (checked) {
      setCheckedList([...(checkedList as IUserInfo[]), { ...userInfo }]);
    } else {
      const uncheckedItems = checkedList?.filter(
        item => item.uid !== userInfo.uid
      ) as IUserInfo[];
      setCheckedList(uncheckedItems);
    }
  };

  useEffect(() => {
    if (!subject || checkedList.length === 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [subject, checkedList]);

  return (
    <CreateChat
      userList={userList}
      handleChangeChecked={handleChangeChecked}
      checkedList={checkedList}
      isDisabled={isDisabled}
      setSubject={setSubject}
    />
  );
}

export default CreateChatContainer;
