import styled from 'styled-components';

export const CreateChatLayout = styled.div`
  padding: ${({ theme }) => theme.basicPadding};
`;

export const CreateChatTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.lg};
  margin-bottom: 20px;
`;

export const CreateChatInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 5px 10px;
  margin-bottom: 50px;
`;

export const CreateChatInviteList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
`;

export const CreateChatInviteItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const CreateChatInviteUserAvatar = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  line-height: 50px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  background-color: ${({ bgColor }) => bgColor};
`;

export const CreateChatInviteUserName = styled.span``;

export const CreateChatUserList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CreateChatComplete = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.base};
  background-color: rgba(11, 239, 184, 0.8);
  padding: 20px;
  left: 0;

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;
