import styled from 'styled-components';

export const UserList = styled.ul`
  padding: 12px 30px;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
`;

export const UserProfileBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: red;
`;

export const UserNameText = styled.span`
  flex: 1;
  padding-left: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const UserSendImgBox = styled.div`
  cursor: pointer;
`;
