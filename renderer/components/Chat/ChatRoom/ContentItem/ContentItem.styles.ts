import styled from 'styled-components';

export const ContentItem = styled.li<{ isMyMessage: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isMyMessage }) => (isMyMessage ? 'row-reverse' : 'row')};
`;

export const ContentItemImg = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-color: green;
`;

export const ContentItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  padding-top: 25px;
`;

export const ContentItemUserName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding-bottom: 5px;
`;

export const ContentItemMessageBox = styled.div<{ isMyMessage: boolean }>`
  display: flex;
  align-items: flex-end;
  flex-direction: ${({ isMyMessage }) => (isMyMessage ? 'row-reverse' : 'row')};
`;

export const ContentItemMessageText = styled.span`
  position: relative;
  display: inline-block;
  padding: 12px;
  background-color: #0befb87a;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const ContentItemDate = styled.div`
  margin: 0 5px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #909090;
`;
