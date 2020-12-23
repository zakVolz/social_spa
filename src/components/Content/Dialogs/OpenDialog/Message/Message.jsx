import React from 'react';
import './Message.css'

const Message = (props) => {
  return (
    <li className={`dialogs__message-item dialogs__message-item_${props.sort}`}>
      <div className='dialogs__message-avatar' style={{ backgroundImage: `url(${props.avatar})` }}></div>
      <p className='dialogs__message-text'>{props.text}</p>
    </li>
  )
}

export default Message;