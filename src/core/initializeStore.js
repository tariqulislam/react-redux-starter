import { createStore, applyMiddleware, compose } from "redux";
import createReducer from "./rootReducer";
import { routerMiddleware } from 'react-router-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const enhancers = []

const middleware = [thunk, promise, routerMiddleware(history)]

let initialState = {}
const initializeStore = () => {
 
  const store = createStore(
    createReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
     ),
    // NOTE: Don't put this in a prod build, just doing this for the demo.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    
  );


  store.asyncReducers = {};
  store.injectReducer = (key, reducer) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
  };

  return store;
};

export default initializeStore;
