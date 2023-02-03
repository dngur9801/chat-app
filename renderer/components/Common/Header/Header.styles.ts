import styled from 'styled-components';

export const HeaderLayout = styled.div`
  margin-bottom: 50px;
  padding: 30px 30px 0;
`;

export const HeaderTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.xl};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: 20px;
`;

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #909090;
  white-space: pre-line;
`;
