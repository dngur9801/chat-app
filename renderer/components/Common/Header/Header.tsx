import React from 'react';
import * as S from './Header.styles';

interface HeaderProps {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <S.HeaderLayout>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.Description>{description}</S.Description>
    </S.HeaderLayout>
  );
}

export default Header;
