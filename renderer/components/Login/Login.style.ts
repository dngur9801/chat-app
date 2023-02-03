import styled from 'styled-components';

export const LoginLayout = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #14f675, #0befb8, #03f0da);
`;

export const LoginBox = styled.div`
  width: 300px;
`;

export const LoginTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.titleL};
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

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
