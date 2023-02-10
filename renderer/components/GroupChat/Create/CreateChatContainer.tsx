import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import useFetchUsers from '../../../hook/useFetchUsers';
import { userInfoState } from '../../../states';
import { IUserInfo } from '../../../types';
import roomsAPI from '../../apis/rooms';
import CreateChat from './CreateChat';

function CreateChatContainer() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [checkedList, setCheckedList] = useState<IUserInfo[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [subject, setSubject] = useState('');
  const uid = userInfo?.uid;
  const userList = useFetchUsers(uid);

  const router = useRouter();

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

  const handleClickCreateRoom = async () => {
    const uids = [uid, ...checkedList.map(user => user.uid)];
    const roomId = await roomsAPI.createGroupRoom(uids, subject);
    router.push(`/chat/${roomId}?type=group&title=${subject}`);
  };

  useEffect(() => {
    // 제목, 유저 미선택시 완료버튼 비활성화
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
      handleClickCreateRoom={handleClickCreateRoom}
    />
  );
}

export default CreateChatContainer;
