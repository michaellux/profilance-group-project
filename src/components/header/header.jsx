import React from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { Link } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import usePrepareLink from '../hooks/router/usePrepareLink';
import { GET_PARAMS, GET_ENUMS } from '../../router';

import { userLogOut } from '../../actions';

import './header.css';

const useStyles = makeStyles(() => ({
  menu__itemlink_active: {
    color: 'red',
  },
}));

const Header = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.app.logInStatus);

  const logInLink = usePrepareLink({
    query: {
      [GET_PARAMS.popup]: GET_ENUMS.popup.logIn,
    },
  });

  let logInOutLink = null;
  if (!isLoggedIn) {
    logInOutLink = (
      <li className="menu__item menu__loginpage col col--4">
        <Link activeClassName={classes.menu__itemlink_active} className="menu__itemlink itemlink" component={RouterLink} to={logInLink}>Вход</Link>
      </li>
    );
  } else {
    logInOutLink = (
      <li className="menu__item menu__loginpage col col--4">
        <Link
          activeClassName={classes.menu__itemlink_active}
          className="menu__itemlink itemlink"
          href="/"
          onClick={() => {
            dispatch(userLogOut());
          }}
        >
          Выход
        </Link>
      </li>
    );
  }

  return (
    <header className="header">
      <nav className="header__nav navigation">
        <ul className="navigation__menu row">
          <li className="menu__item menu__mainpage col col--4">
            <Link activeClassName={classes.menu__itemlink_active} className="menu__itemlink itemlink" component={NavLink} to="/" exact>Главная</Link>
          </li>
          <li className="menu__item menu__newspage col col--4">
            <Link activeClassName={classes.menu__itemlink_active} className="menu__itemlink itemlink" component={NavLink} to="/news">Новости</Link>
          </li>
          {logInOutLink}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
