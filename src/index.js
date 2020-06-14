import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'; // thunk is a function that returns a middleware
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const logger =store =>{
  return next =>{  // a function takes next as argument, let action continue journey to reducer 
    return action =>{   // this func receive action as input ,this func is a middleware, it can access store,next and action, the code in this function can run in between the action and the reducer
      console.log('[Middleware] Dispatching', action);
      const result = next(action); // this will let action continue to the reducer
      console.log('[Middleware] next state', store.getState());
      return result;
     }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer ,composeEnhancers(applyMiddleware(logger,thunk)));

//Provider inject store to react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
