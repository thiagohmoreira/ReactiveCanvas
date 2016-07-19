/**
 * Application entry point
 */
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

ReactDOM.render((
    <h1>Hello Word</h1>
), document.getElementById('root'));
