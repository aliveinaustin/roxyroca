import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/popper.js/dist/popper';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
require('core-js/modules/es6.symbol');

const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <Router forceRefresh={!supportsHistory}>
    <App />
  </Router>,
  document.getElementById('root'));
// registerServiceWorker();
