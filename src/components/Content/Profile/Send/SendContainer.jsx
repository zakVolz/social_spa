import React from 'react';
import { actionOnChangePostText, actionSendPost } from '../../../../redux/profileReducer';
import Send from './Send';

const SendContainer = (props) => {
  const onChangePostText = (e) => {
    const text = e.target.value;
    props.dispatch(actionOnChangePostText(text));
  }
  const sendPost = (e) => {
    e.preventDefault();
    props.dispatch(actionSendPost());
  }
  return <Send onChangePostText={onChangePostText}
    sendPost={sendPost}
    state={props.state} />
}

export default SendContainer;
