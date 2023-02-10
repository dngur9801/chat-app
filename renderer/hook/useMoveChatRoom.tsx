import { useRouter } from 'next/router';
import React from 'react';

function useMoveChatRoom() {
  const router = useRouter();

  const moveChatRoom = (roomId: string, type: string, title: string) => {
    router.push(`/chat/${roomId}?type=${type}&title=${title}`);
  };
  return moveChatRoom;
}

export default useMoveChatRoom;
