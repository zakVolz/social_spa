import React from 'react';
import Posts from './Posts/Posts';
import './Profile.css';
import SendContainer from './Send/SendContainer';

const Profile = (props) => {
  return (
    <div className='profile'>
      <div className='profile__cover'></div>
      <div className='profile__user'>
        <div className='profile__avatar'></div>
        <div className='profile__info'>
          <h3 className='profile__item'>ZakaZak</h3>
          <p className='profile__item'>Birtday: 22.08.1995</p>
          <p className='profile__item'>City: St.P.</p>
          <p className='profile__item'>Education: Y.p.</p>
          <p className='profile__item'>Site: <a href='https://news-explorer-project.tk/' target="_blank" rel="noreferrer noopener" className='profile__link'>https://news-explorer-project.tk/</a></p>
        </div>
      </div>
      <SendContainer state={props.state} dispatch={props.dispatch} />
      <Posts postsData={props.state.posts} dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;