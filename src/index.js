import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import middleware from './middlewares';
import App from './App';

const store = createStore(rootReducer, middleware);

const title = 'Unlimited Songs';

ReactDOM.render(
  <Provider store={store}>
    <App title={title} />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
