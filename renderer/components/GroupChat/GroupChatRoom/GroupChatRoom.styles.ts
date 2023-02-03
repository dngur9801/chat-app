import styled from 'styled-components';

export const GroupChatRoomList = styled.ul`
  padding: 12px ${({ theme }) => theme.basicPadding};
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const GroupChatRoomItem = styled.li`
  display: flex;
  align-items: center;
`;

export const GroupChatRoomProfileBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: red;
`;

export const GroupChatRoomBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const GroupChatRoomNameBox = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

export const GroupChatRoomNameText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const GroupChatRoomTotalPeople = styled(GroupChatRoomNameText)`
  padding-left: 7px;
  color: #909090;
`;

export const GroupChatRoomMessageText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;

export const GroupChatRoomDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;
