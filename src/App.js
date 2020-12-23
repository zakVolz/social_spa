import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './components/Content/Content.css';
import Header from './components/Header/Header';
import Profile from './components/Content/Profile/Profile';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import NavContainer from './components/Nav/NavContainer';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='root'>
        <Header />
        <NavContainer state={props.state.friendsBox} />
        <section className='content'>
          <Route path='/profile'
            render={() => <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch} />} />
          <Route path='/dialogs'
            render={() => <DialogsContainer
              state={props.state.messagesPage}
              dispatch={props.dispatch} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
