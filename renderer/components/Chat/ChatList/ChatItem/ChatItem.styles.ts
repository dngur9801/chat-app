import styled from 'styled-components';

export const ChatItemList = styled.ul`
  padding: 12px ${({ theme }) => theme.basicPadding};
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

export const ChatItemItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatItemProfileBox = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${({ bgColor }) => bgColor};
  line-height: 50px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const ChatItemBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 20px;
`;

export const ChatItemNameText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatItemMessageText = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ChatItemDate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;
