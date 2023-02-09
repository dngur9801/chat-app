import React from 'react';
import { IUserInfo } from '../../../../types';
import * as S from './UserItem.styles';

interface UserItemProps {
  item: IUserInfo;
  handleChangeChecked: (checked: boolean, userInfo: IUserInfo) => void;
}

function UserItem({ item, handleChangeChecked }: UserItemProps) {
  return (
    <S.UserItem>
      <S.UserItemAvatar bgColor={item?.avatar}>
        {item.nickName[0]}
      </S.UserItemAvatar>
      <S.UserItemName>{item?.nickName}</S.UserItemName>
      <S.UserItemCheckBox
        type='checkbox'
        onChange={e => handleChangeChecked(e.target.checked, item)}
      />
    </S.UserItem>
  );
}

export default UserItem;
