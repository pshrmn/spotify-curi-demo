import React from 'react';
import ReactDOM from 'react-dom';
import { createRouter } from '@curi/router';
import { browser } from '@hickory/browser';
import { createRouterComponent } from '@curi/react-dom';

import './index.css';
import routes from './routes';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import "./api/session";

const router = createRouter(browser, routes);
const Router = createRouterComponent(router);

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
