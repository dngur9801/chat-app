import styled from 'styled-components';
import { CreateChatInviteUserAvatar } from '../../Create/CreateChat.styles';

export const GroupChatItemList = styled.ul`
  padding: 12px ${({ theme }) => theme.basicPadding};
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const GroupChatItem = styled.li`
  display: flex;
  align-items: center;
`;

export const GroupChatItemProfileBox = styled(CreateChatInviteUserAvatar)``;

export const GroupChatItemBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const GroupChatItemNameBox = styled.div`
  display: flex;
  padding-bottom: 8px;
`;

export const GroupChatItemNameText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const GroupChatItemTotalPeople = styled(GroupChatItemNameText)`
  padding-left: 7px;
  color: #909090;
`;

export const GroupChatItemMessageText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;

export const GroupChatItemDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;
