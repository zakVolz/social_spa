import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const renderDialogs = props.state.dialogs
    .map(el => <DialogItem id={el.id} name={el.name} key={el.id} />);
  return <Dialogs renderDialogs={renderDialogs} state={props.state} dispatch={props.dispatch} />
}

export default DialogsContainer;
