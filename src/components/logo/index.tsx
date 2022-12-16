import React from 'react';

import logo from '../../assets/images/logo.png';
import style from './logo.module.scss';

const Logo: React.FC = () => {
  return(
    <a className={style.logoLink} href="index.html">
      <img src={logo} className={style.logo} alt="Логотип" />
    </a>
  );
}

export { Logo };