import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { searchFieldReducer, requestDataReducer } from './reducers';

const logger = createLogger();
let middleware = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') { 
  middleware.push(logger)
};

const rootReducers = combineReducers({ searchFieldReducer, requestDataReducer })
const store = createStore(rootReducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
