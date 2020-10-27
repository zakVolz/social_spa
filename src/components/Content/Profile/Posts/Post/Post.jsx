import React from 'react';
import { NavLink } from 'react-router-dom';
import { actionLikePost } from '../../../../../redux/profileReducer';
import './Post.css';

const Post = (props) => {
  const likeButton = (e) => {
    let updateCounter;
    e.target.classList.toggle('posts__like-button_active');
    if (e.target.classList.contains('posts__like-button_active')) {
      updateCounter = props.likeCounter + 1;
    } else {
      updateCounter = props.likeCounter - 1;
    }
    props.dispatch(actionLikePost(props.id, updateCounter))
  }

  return (
    <div className='posts__item'>
      <NavLink to='/profile' className='posts__avatar'></NavLink>
      <p className='posts__text'>{props.text}</p>
      <div className='posts__like'>
        <button className='posts__like-button' onClick={likeButton}></button>
        <span className='posts__like-counter'>{props.likeCounter}</span>
      </div>
    </div>
  )
}

export default Post;