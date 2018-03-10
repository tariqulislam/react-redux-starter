import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './asset/index.scss';
import App from './route/App';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from "./core/store";
import {ConnectedRouter} from "react-router-redux";

ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
            <App />
        </div>
      </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
