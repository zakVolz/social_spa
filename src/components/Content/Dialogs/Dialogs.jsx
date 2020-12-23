import React from 'react';
import './Dialogs.css'
import OpenDialogContainer from './OpenDialog/OpenDialogContainer';

const Dialogs = (props) => {
  return (
    <section className='dialogs'>
      <ul className='dialogs__list'>
        <h1 className='dialogs__title'>Dialogs</h1>
        {props.renderDialogs}
      </ul>
      <OpenDialogContainer />
    </section>
  )
}

export default Dialogs;
