import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/profile' className="header__link">
                <img src='../../images/hash-logo.png' className='header__logo' alt='logo app' />
            </NavLink>
        </header>
    )
}

export default Header;
