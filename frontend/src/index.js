/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import { React, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import './utils/i18n';

const store = configureStore();

ReactDOM.render(

  <Provider store={store}>
    <Suspense fallback="... is loading">
      <App />
    </Suspense>
  </Provider>,

  document.getElementById('root'),
);
