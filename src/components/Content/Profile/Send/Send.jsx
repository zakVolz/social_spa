import React from 'react';
import './Send.css';

const Send = (props) => {
  return (
    <div className='send'>
      <h3 className='send__title'>My posts</h3>
      <form className='send__form' onSubmit={props.sendPost}>
        <textarea
          className='send__input'
          placeholder='your news...'
          onChange={props.onChangePostText}
          value={props.state.newPostText}
          required />
        <button className='send__button'>Send</button>
      </form>
    </div>
  )
}

export default Send;
