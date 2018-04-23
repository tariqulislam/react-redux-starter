import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import './asset/index.scss';
import App from './App';
import initializeStore, { history } from './core/initializeStore'
import registerServiceWorker from './registerServiceWorker';
import {ConnectedRouter as Router} from "react-router-redux";

const store = initializeStore();

ReactDOM.render(
   <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
