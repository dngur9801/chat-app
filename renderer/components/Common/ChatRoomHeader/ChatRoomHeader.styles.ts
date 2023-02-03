import styled from 'styled-components';

export const ChatRoomHeaderBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px ${({ theme }) => theme.basicPadding};
`;

export const ChatRoomHeaderButton = styled.button`
  position: absolute;
  left: 30px;
  svg {
    font-size: 26px;
  }
`;

export const ChatRoomHeaderTitle = styled.p`
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.lg};
`;
