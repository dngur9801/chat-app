import styled from 'styled-components';
import css from 'styled-jsx/css';

export const Container = styled.div`
  display: flex;
`;

export const LayoutBox = styled.div`
  position: fixed;
  width: 80px;
  height: 100%;
  border-right: 1px solid #eee;
`;

export const LayoutList = styled.ul``;

export const LayoutChildrenBox = styled.div<{ isHiddenMenu: boolean }>`
  flex: 1;
  width: 100%;
  ${({ isHiddenMenu }) =>
    !isHiddenMenu &&
    css`
      padding-left: 80px;
    `}
`;
