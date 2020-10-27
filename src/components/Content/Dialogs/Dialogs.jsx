import React from 'react';
import './Dialogs.css'
import DialogItem from './DialogItem/DialogItem';
import OpenDialogContainer from './OpenDialog/OpenDialogContainer';

const Dialogs = (props) => {
  const renderDialogs = props.state.dialogs
    .map(el => <DialogItem id={el.id} name={el.name} key={el.id} />);
  return (
    <section className='dialogs'>
      <ul className='dialogs__list'>
        <h1 className='dialogs__title'>Dialogs</h1>
        {renderDialogs}
      </ul>
      <OpenDialogContainer
        state={props.state}
        dispatch={props.dispatch} />
    </section>
  )
}

export default Dialogs;
