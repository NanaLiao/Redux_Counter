import * as actionTypes from './actionTypes'

// this is synchronous actions creator
export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(res)) //create asynchronous action creators which in the end dispatch action created by synchronouse ones. and this will update the state in the store 
    }, 2000)
  }
};

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: id
  }
};


//  redux-thunk allows function to not  return the action itself, but return a function which will eventually dispatch an action, so then we can run asychronous code 