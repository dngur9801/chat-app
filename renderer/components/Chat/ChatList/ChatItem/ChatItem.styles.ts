import styled from 'styled-components';

export const ChatItemList = styled.ul`
  padding: 12px 30px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const ChatItemItem = styled.li`
  display: flex;
  align-items: center;
`;

export const ChatItemProfileBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: red;
`;

export const ChatItemBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const ChatItemNameText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding-bottom: 8px;
`;

export const ChatItemMessageText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;

export const ChatItemDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;
