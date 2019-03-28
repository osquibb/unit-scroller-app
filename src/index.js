import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { DATA } from './shared/data';

ReactDOM.render(<App data={DATA} />, document.getElementById('root'));
