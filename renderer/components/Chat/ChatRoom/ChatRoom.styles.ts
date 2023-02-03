import styled from 'styled-components';

export const ChatRoomLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const ChatRoomContentBox = styled.div`
  flex: 1;
  padding: 0 ${({ theme }) => theme.basicPadding};
  overflow-y: scroll;
  padding-bottom: 20px;
`;

export const ChatRoomContentList = styled.ul``;

export const ChatRoomFooterBox = styled.div`
  border-top: 1px solid #909090;
`;

export const ChatRoomFooterForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px ${({ theme }) => theme.basicPadding};
  gap: 30px;
`;

export const ChatRoomFooterInput = styled.input`
  width: 100%;
  flex: 9;
  border-radius: 5px;
  padding: 0 10px;
`;

export const ChatRoomFooterSubmit = styled.button`
  padding: 10px 12px;
  border-radius: 20px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.basic};
`;
