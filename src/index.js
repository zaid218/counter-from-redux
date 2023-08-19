import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);
