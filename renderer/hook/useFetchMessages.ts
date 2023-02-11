import { collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import messageAPI from '../components/apis/messages';
import { db } from '../config/firebaseConfig';
import { IMessage } from '../types';

function useFetchMessages(roomId: string) {
  const [messageList, setMessageList] = useState<IMessage[] | null>(null);

  // 실시간 데이터 감지
  useEffect(() => {
    onSnapshot(collection(db, 'messages'), async () => {
      const messages = await messageAPI.getMessages(roomId);
      const newMessageList: IMessage[] = [];
      messages?.forEach(docs => newMessageList.push(docs.data() as IMessage));
      setMessageList(newMessageList);
    });
  }, []);
  return { messageList, setMessageList };
}

export default useFetchMessages;
