import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './Store';
window.store = store;
document.body.style.backgroundColor = '#2c2f33';
function importAll(r) {
  return r.keys().map(r);
}

/* const images = importAll(require.context('./assets/attackStyles/2h_sword', false, /\.(png|jpe?g|svg)$/)); */
ReactDOM.render(
  <Provider store={store}>
    <App  /* images={images} *//>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
