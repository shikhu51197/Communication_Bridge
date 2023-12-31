import React from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';

axios.defaults.baseURL = "https://libretranslate.de/translate";

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
