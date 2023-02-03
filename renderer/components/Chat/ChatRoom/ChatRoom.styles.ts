import styled from 'styled-components';

export const ChatRoomLayout = styled.div`
  padding: 12px 0;
`;

export const ChatRoomList = styled.ul``;

export const ChatRoomItem = styled.li`
  display: flex;
  align-items: center;
`;

export const ChatRoomProfileBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: red;
`;

export const ChatRoomNameTextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const ChatRoomNameText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding-bottom: 8px;
`;

export const ChatRoomMessageText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;

export const ChatRoomDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;
