import React from 'react';
import { actionLikePost } from '../../../../../redux/profileReducer';
import PostItem from './PostItem';

const PostContainer = (props) => {
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

  return <PostItem likeButton={likeButton} id={props.id} text={props.text} likeCounter={props.likeCounter} />
}

export default PostContainer;
