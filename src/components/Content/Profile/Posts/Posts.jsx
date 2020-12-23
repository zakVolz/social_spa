import React from 'react';

const Posts = (props) => {
  return (
    <div className='posts'>
      {props.renderPosts}
    </div>
  )
}

export default Posts;
