import React from 'react';
import PostContainer from './PostItem/PostItemContainer';
import Posts from './Posts';

const PostsContainer = (props) => {
  const renderPosts = props.postsData
    .map(el => <PostContainer text={el.text} likeCounter={el.likeCounter} id={el.id} dispatch={props.dispatch} key={el.id} />);
  return <Posts renderPosts={renderPosts} />
}

export default PostsContainer;
