import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer)

console.log("store is: ",store.getState)
ReactDOM.render(<BrowserRouter><App store={store} /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
