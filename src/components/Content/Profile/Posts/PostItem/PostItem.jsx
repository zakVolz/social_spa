import React from 'react';
import { NavLink } from 'react-router-dom';
import './PostItem.css';

const PostItem = (props) => {
  return (
    <div className='posts__item'>
      <NavLink to='/profile' className='posts__avatar'></NavLink>
      <p className='posts__text'>{props.text}</p>
      <div className='posts__like'>
        <button className='posts__like-button' onClick={props.likeButton}></button>
        <span className='posts__like-counter'>{props.likeCounter}</span>
      </div>
    </div>
  )
}

export default PostItem;
