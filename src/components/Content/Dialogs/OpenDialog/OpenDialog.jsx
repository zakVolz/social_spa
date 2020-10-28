import React from 'react';
import Message from './Message/Message';
import './OpenDialog.css'

const OpenDialog = (props) => {
    const renderMessages = props.messagesPage.messages
    .map(el => <Message avatar={el.avatar} sort={el.sort} text={el.text} key={el.id} />);
  return (
    <div className='dialogs__is-open'>
      <ul className='dialogs__message-list'>
        {renderMessages}
      </ul>
      <form className='dialogs__send-message' onSubmit={props.sendMessage}>
        <textarea
          className='dialogs__input'
          placeholder='enter a message...'
          onChange={props.onChangeMessageText}
          value={props.messagesPage.newMessageText}
          autoFocus
          required />
        <button className='dialogs__send-button'>{'>'}</button>
      </form>
    </div>
  )
}

export default OpenDialog;
