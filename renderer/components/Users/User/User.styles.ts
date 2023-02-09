import styled from 'styled-components';

export const UserList = styled.ul`
  padding: 12px ${({ theme }) => theme.basicPadding};
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
`;

export const UserProfileBox = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  line-height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-align: center;
  background-color: ${({ bgColor }) => bgColor};
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
