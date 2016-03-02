import './style/index.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import reducer from './reducer';
import createStore from './store/createStore';

import App from './container/App';

let store = createStore(undefined, [], reducer);

let wrapper = document.createElement('div');
wrapper.className = 'appContainer';
document.body.appendChild(wrapper);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  wrapper
);
