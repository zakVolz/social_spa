import React from 'react';
import './OpenDialog.css'

const OpenDialog = (props) => {
  return (
    <div className='dialogs__is-open'>
      <ul className='dialogs__message-list'>
        {props.renderMessages}
      </ul>
      <form className='dialogs__send-message' onSubmit={props.sendMessage}>
        <textarea
          className='dialogs__input'
          placeholder='enter a message...'
          onChange={props.onChangeMessageText}
          value={props.state.newMessageText}
          autoFocus
          required />
        <button className='dialogs__send-button'>{'>'}</button>
      </form>
    </div>
  )
}

export default OpenDialog;
