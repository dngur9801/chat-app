import styled from 'styled-components';
import { CreateChatInviteUserAvatar } from '../CreateChat.styles';

export const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserItemAvatar = styled(CreateChatInviteUserAvatar)``;

export const UserItemName = styled.span`
  flex: 1;
  padding-left: 10px;
`;

export const UserItemCheckBox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
