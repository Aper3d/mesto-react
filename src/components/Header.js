import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo/logo.svg' 

const Header = ({ loggedIn, userEmail, onSignOut }) => {

    const path = useLocation().pathname;

    return (
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            {loggedIn
                ? (<div className="header__container"><p className="header__email">{userEmail}</p><button className="header__button" onClick={onSignOut}>Выйти</button></div>)
                : (<Link to={path === "/sign-in" ? "/sign-up" : "/sign-in"} className="header__link">{path === "/sign-in" ? "Регистрация" : "Вход"}</Link>)
            }
        </header >
    )
}
export default Header