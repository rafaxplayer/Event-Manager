import { LIST_EVENTS, LIST_EVENTS_TODAY, SELECTED_EVENT, DELETE_EVENT, NEW_EVENT, UPDATE_EVENT } from '../constants'

const initiaState={ list:[], list_today:[], selected:{}, deleteresp:{}, newresp:{}, updateresp:{}}

export default function(state = initiaState, action){
    switch (action.type) {
        case LIST_EVENTS:
            return Object.assign({},state ,{list:action.payload})
        case LIST_EVENTS_TODAY:
            return Object.assign({},state ,{list_today:action.payload})   
        case SELECTED_EVENT:
            return Object.assign({},state ,{selected:action.payload})
        case DELETE_EVENT:
            return Object.assign({},state ,{deleteresp:action.payload})
        case NEW_EVENT:
            return Object.assign({},state ,{newresp:action.payload})
        case UPDATE_EVENT:
            return Object.assign({},state ,{updateresp:action.payload})
        default:
            return state;
    }
};