import React from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

import { mobileMenuToggle } from '../../redux/slices/mainSlice';

const Burger: React.FC = () => {
  const mobileNav = useSelector((state: RootState) => state.main.mobileMenu);

  const dispatch = useAppDispatch();

  return(
    <button 
      className={mobileNav ? "cmn-toggle-switch cmn-toggle-switch__htx active" : "cmn-toggle-switch cmn-toggle-switch__htx"} 
      id="#menu__button"
      onClick={() => dispatch(mobileMenuToggle(!mobileNav))}
      >
      <span></span>
    </button>
  );
}

export { Burger };