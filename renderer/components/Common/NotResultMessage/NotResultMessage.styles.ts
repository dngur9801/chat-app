import styled from 'styled-components';

export const NotResultMessageLayout = styled.div`
  padding: ${({ theme }) => theme.basicPadding};
  text-align: center;
  line-height: 1.5;

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.basic};
  }
`;

export const NotResultMessageText = styled.span`
  color: #909090;
`;
