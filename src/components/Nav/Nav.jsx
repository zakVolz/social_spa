import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsBox from './FriendsBox/FriendsBox';
import './Nav.css';

const Nav = (props) => {
  const renderFriends = props.state.map(el => <FriendsBox id={el.id} avatar={el.avatar} name={el.name} key={el.id} />);
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'><NavLink to='/profile' className='nav__link'>Profile</NavLink></li>
        <li className='nav__item'><NavLink to='/dialogs' className='nav__link'>Messages</NavLink></li>
        <li className='nav__item'><NavLink to='/news' className='nav__link'>News</NavLink></li>
        <li className='nav__item'><NavLink to='/music' className='nav__link'>Music</NavLink></li>
        <li className='nav__item'><NavLink to='/settings' className='nav__link'>Settings</NavLink></li>
      </ul>
      <NavLink to='/friends' className='friends-box__title'>Friends</NavLink>
      <ul className='friends-box__list'>
        {renderFriends}
      </ul>
    </nav>
  )
}

export default Nav;
