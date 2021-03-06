import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './coffee.css'

import 'bootstrap/dist/css/bootstrap.css';
import Bootstrap from 'bootstrap';
import './font/fonts.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// eslint-disable-next-line
import App from './js/App';

import * as serviceWorker from './serviceWorker';
//begin util
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
//end util
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
