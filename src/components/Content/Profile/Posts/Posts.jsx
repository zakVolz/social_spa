import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
  const renderPosts = props.postsData
    .map(el => <Post text={el.text} likeCounter={el.likeCounter} id={el.id} dispatch={props.dispatch} key={el.id} />);
  return (
    <div className='posts'>
      {renderPosts}
    </div>
  )
}

export default Posts;
