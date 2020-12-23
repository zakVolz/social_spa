import React from 'react';
import { NavLink } from 'react-router-dom';
import './FriendsBox.css';

const FriendsBox = (props) => {
  return (
    <li className='friends-box__item'>
      <NavLink to={'/' + props.id} className='friends-box__link'>
        <div className='friends-box__avatar' style={{ backgroundImage: `url(${props.avatar})` }}></div>
        {props.name}
      </NavLink>
    </li>
  )
}

export default FriendsBox;
