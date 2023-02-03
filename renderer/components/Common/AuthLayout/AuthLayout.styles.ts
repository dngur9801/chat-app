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
