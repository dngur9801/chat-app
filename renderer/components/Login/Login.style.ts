import styled from 'styled-components';

export const LoginInputBox = styled.div`
  position: relative;

  .icon {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    margin-top: -2px;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  margin-bottom: 5px;
  border: 1px solid #909090;
  padding: 13px ${({ theme }) => theme.basicPadding};
`;

export const LoginButton = styled.button`
  display: block;
  margin: 30px auto;
  background-color: ${({ theme }) => theme.colors.basic};
  padding: 10px 50px;
  border-radius: 20px;
  border: 1px solid #909090;
  transition: all 0.2s;

  &:hover {
    background-color: white;
  }
`;

export const LoginTextBox = styled.div`
  text-align: center;
`;

export const LoginGuideText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #4c4c4c;
`;
export const LoginSignupText = styled(LoginGuideText)`
  text-decoration: underline;
  padding-left: 5px;
`;
