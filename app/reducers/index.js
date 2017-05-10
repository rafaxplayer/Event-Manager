import { combineReducers } from 'redux';
import eventsReducer from './events'
import modalsReducer from './modals'
const allReducers = combineReducers({
   events:eventsReducer,
   modals:modalsReducer
   
})

export default allReducers;
