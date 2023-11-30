import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* eslint-disable */
const mount = el => ReactDOM.render(<App />, el);
const devRoot = document.querySelector('#_marketing-dev-root');
if (process.env.NODE_ENV === 'development' && devRoot) {
  mount(devRoot);
}

export { mount };
