import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

import { fetchPosts } from './api/api'
import configureStore from './store/configureStore'

const store = configureStore()

store.dispatch(fetchPosts())
// store.dispatch(fetchComments('8xf0y6ziyjabvozdd253nd'))

console.log("store is: ",store.getState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
