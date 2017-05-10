import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';

export const store = createStore(
  allReducers
  ,
  applyMiddleware(thunk)
)

store.subscribe(function(){
  console.log("Store update : ", store.getState());
})