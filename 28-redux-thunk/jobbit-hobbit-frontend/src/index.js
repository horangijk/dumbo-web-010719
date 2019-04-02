import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import hobbitReducer from './reducers/hobbitReducer'

// const store = createStore(hobbitReducer)
const store = createStore(hobbitReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
  <App />
</Provider> , document.getElementById('root'));
