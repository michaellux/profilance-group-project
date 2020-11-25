import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav navigation">
        <ul className="navigation__menu row">
          <li className="menu__item menu__mainpage col col--4">
            <Link class="menu__itemlink itemlink" to="/">Главная</Link>
          </li>
          <li className="menu__item menu__newspage col col--4">
            <Link class="menu__itemlink itemlink" to="/news">Новости</Link>
          </li>
          <li className="menu__item menu__loginpage col col--4">
            <Link class="menu__itemlink itemlink" to="/login">Вход</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;