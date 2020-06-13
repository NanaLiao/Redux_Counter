const redux = require('redux'); //node.js syntax
const createStore = redux.createStore; // createStore is a function but dont execute it yet

const initialState={
  counter:0,
}

//Reducer
const rootReducer = (state=initialState,action) =>{
  if(action.type ==='INC_COUNTER'){
    return {
      ...state,
      counter:state.counter +1
    };
  };

  if(action.type ==='ADD_COUNTER'){
    return {
      ...state,
      counter:state.counter +action.value,
    };
  };
  return state; // it does nothing, just return the state we already have
}

//Store
const store = createStore(rootReducer);//a store should be initialize it as a reducer
console.log(store.getState());

//Subscription
store.subscribe(()=>console.log('[Subscription]',store.getState())); // subscribe method takes an function as argument, whenever the state update,it will be triggered

//Dispatching Action
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
console.log(store.getState());

