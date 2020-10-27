import React from 'react';
import Message from './Message/Message';
import { actionOnChangeMessageText, actionSendMessage } from '../../../../redux/messagesReducer';
import OpenDialog from './OpenDialog';

const OpenDialogContainer = (props) => {
  const renderMessages = props.state.messages
    .map(el => <Message avatar={el.avatar} sort={el.sort} text={el.text} key={el.id} />);

  const onChangeMessageText = (e) => {
    const text = e.target.value;
    props.dispatch(actionOnChangeMessageText(text));
  }

  const sendMessage = (e) => {
    e.preventDefault();
    props.dispatch(actionSendMessage());
  }

  return (
    <OpenDialog renderMessages={renderMessages}
      onChangeMessageText={onChangeMessageText}
      sendMessage={sendMessage}
      state={props.state} />
  )
}

export default OpenDialogContainer;
