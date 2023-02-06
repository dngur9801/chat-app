import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import messageAPI from '../components/apis/message';
import { IMessage } from '../types';

function useMessageList(roomId: string) {
  const [messageList, setMessageList] = useState<IMessage[] | null>(null);
  useEffect(() => {
    (async () => {
      const messages = await messageAPI.getMessages(roomId);
      const newMessageList: IMessage[] = [];
      messages?.forEach(docs => newMessageList.push(docs.data() as IMessage));
      setMessageList(newMessageList);
    })();
  }, []);
  return { messageList, setMessageList };
}

export default useMessageList;
