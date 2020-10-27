import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogItem.css';

const DialogItem = (props) => {
  return (
    <li className='dialogs__item'>
      <NavLink to={'/dialogs/' + props.id} className='dialogs__name'>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;
