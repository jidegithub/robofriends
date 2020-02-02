import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons'
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App.jsx';




ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
