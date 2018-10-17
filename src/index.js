import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { requestDataReducer, setCurrentTempReducer } from './components/redux/reducers';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   palette: {
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      main: '#6200ea',
    },
  },
});

const logger = createLogger();
let middleware = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') { 
  middleware.push(logger)
};

const rootReducers = combineReducers({ requestDataReducer, setCurrentTempReducer })
const store = createStore(rootReducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
  	<MuiThemeProvider theme={theme}>
    	<App/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();


        
        