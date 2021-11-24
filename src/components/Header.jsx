import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../images/Logo.svg';
import { Menu } from './icons';

const Header = () => {
  return (
    <Header className="bg-white flex flex-between">
      <NavLink to="/">
        <Logo></Logo>
      </NavLink>
      <nav>
        <button className="p-[1.875rem]">
          <Menu className={"fill-current text-primary"} />
        </button>
        <ul className="bg-primary divide-y divide-blue-dark">
          <li className="text-center">
            <NavLink to="/" className="py-6">
              找公車
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="station" className="py-6">
              附近站牌
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="transfer" className="py-6">
              轉乘規劃
            </NavLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
}

export default Header;
