import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';

atatus.config('d3775e39f9664de9b73b2e275766a942').install();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.register();

