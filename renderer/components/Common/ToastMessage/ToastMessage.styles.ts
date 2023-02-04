import styled, { keyframes } from 'styled-components';

const openSlide = keyframes`
   from {
    opacity: 0;
    transform: translateY(100%) 
  }
  to {
    opacity: 1;
    transform: translateY(0%) 
  }
`;
const closeSlide = keyframes`
  from {
    opacity: 1;
    transform: translateY(0%)
  }
  to {
    opacity: 0;
    transform: translateY(100%)
  }
`;

export const ToastMessageBox = styled.div<{ delay: number }>`
  position: fixed;
  display: flex;
  bottom: 20px;
  left: 20px;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  z-index: 9999;
  color: black;
  box-shadow: 0 17px 20px -18px rgba(0, 0, 0, 1);

  &.openAnimation {
    animation: ${openSlide} ${({ delay }) => delay / 1000 + 's'} ease-in-out
      forwards;
  }
  &.closeAnimation {
    animation: ${closeSlide} ${({ delay }) => delay / 1000 + 's'} ease-in-out
      forwards;
  }
`;

export const ToastMessageText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
