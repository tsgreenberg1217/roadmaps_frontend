import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import reducers from "./reducers"
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware));


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
