import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store} >
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
window.store = store.getState();
// Рендер приложения при загрузке страницы
renderEntireTree(store.getState());
// Рендер приложения при обновлении state
store.subscribe(() => {
  renderEntireTree(store.getState());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
