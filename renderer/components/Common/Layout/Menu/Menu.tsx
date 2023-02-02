import Link from 'next/link';
import React from 'react';
import { MenuList } from '../LayoutContainer';
import { MenuItem } from './Menu.style';

type MenuProps = MenuList;

function Menu({ title, path, icon }: MenuProps) {
  return (
    <MenuItem>
      <Link href={path}>
        <a title={title} className='menu-icon'>
          {icon()}
        </a>
      </Link>
    </MenuItem>
  );
}

export default Menu;
