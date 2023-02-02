import styled from 'styled-components';

export const MenuItem = styled.li`
  .menu-icon {
    &:hover {
      background-color: ${({ theme }) => theme.colors.basic};
    }
    display: block;
    padding: 25px 0;

    svg {
      width: 100%;
      font-size: 30px;
    }
  }
`;
