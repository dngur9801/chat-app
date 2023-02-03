import styled from 'styled-components';

export const ContentItem = styled.li`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  height: 100px;
`;

export const ContentItemImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: green;
`;

export const ContentItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  padding-top: 40px;
`;

export const ContentItemUserName = styled.div`
  padding-bottom: 5px;
`;

export const ContentItemMessageBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ContentItemMessageText = styled.span`
  position: relative;
  display: inline-block;
  padding: 12px;
  background-color: #0befb87a;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  &::before {
    border-bottom: 8px solid transparent;
    border-left: 8px solid #0befb87a;
    border-right: 8px solid transparent;
    border-top: 8px solid transparent;
    content: '';
    position: absolute;
    top: -6px;
    left: 0px;
  }
`;

export const ContentItemDate = styled.div`
  margin: 0 5px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
`;
