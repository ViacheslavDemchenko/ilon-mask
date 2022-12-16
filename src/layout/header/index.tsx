import React from 'react';

import style from './header.module.scss';
import { Logo } from '../../components/logo';
import { Menu } from '../../components/menu';
import { Burger } from '../../components/burger';

const Header: React.FC = () => {

  return(
    <header className={style.header}>
      <div className="container">
        <div className={style.header__inner}>
          <Logo />
          <Menu />
          <Burger />
        </div>
      </div>
    </header>
  );
}

export { Header };