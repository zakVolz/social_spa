import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './components/Content/Content.css'
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='root'>
        <Header />
        <Nav state={props.state.friendsBox} />
        <section className='content'>
          <Route path='/profile'
            render={() => <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch} />} />
          <Route path='/dialogs'
            render={() => <Dialogs
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
