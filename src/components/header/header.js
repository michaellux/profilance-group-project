import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import usePrepareLink from "../hooks/router/usePrepareLink";
import { GET_PARAMS, GET_ENUMS } from "../../router";



import './header.css';

const Header = () => {

  const logInLink = usePrepareLink({
    query: {
      [GET_PARAMS.popup]: GET_ENUMS.popup.logIn
    }
  });

  return (
    <header className="header">
      <nav className="header__nav navigation">
        <ul className="navigation__menu row">
          <li className="menu__item menu__mainpage col col--4">
            <Link className="menu__itemlink itemlink" component={RouterLink} to="/">Главная</Link>
          </li>
          <li className="menu__item menu__newspage col col--4">
            <Link className="menu__itemlink itemlink" component={RouterLink} to="/news">Новости</Link>
          </li>
          <li className="menu__item menu__loginpage col col--4">
            <Link className="menu__itemlink itemlink" component={RouterLink} to={logInLink}>Вход</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;