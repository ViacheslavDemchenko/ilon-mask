import React from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import './menu.scss';
import { menu } from '../../types';

const menuItems: menu[] = [
  {id: 1, text: 'Главная'},
  {id: 2, text: 'Технология'}, 
  {id: 3, text: 'График полетов'}, 
  {id: 4, text: 'Гарантии'}, 
  {id: 5, text: 'О компании'}, 
  {id: 6, text: 'Контакты'}, 
];

const Menu: React.FC = () => {
  const mobileNav = useSelector((state: RootState) => state.main.mobileMenu);

  return(
    <nav className={mobileNav ? 'nav active' : 'nav'}>
      {
        menuItems.map(item => {
          return <li className="nav__item" key={item.id}>
              <a className="nav__itemLink" href="#!">{item.text}</a>
            </li>
        })
      }
    </nav>
  );
}

export { Menu };