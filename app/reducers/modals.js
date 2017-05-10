import { MODALNEW, MODALEDIT, MODALDETAIL, NEW_EVENT_START} from '../constants'

const initiaState={ modalNewIsOpen:false, modalEditIsOpen:false, modalDetailIsOpen:false, eventstart:0 }

export default function(state = initiaState, action){
    switch (action.type) {
        case MODALNEW:
            return Object.assign({},state,{modalNewIsOpen:action.payload})
        case MODALEDIT:
            return Object.assign({},state,{modalEditIsOpen:action.payload})   
        case MODALDETAIL:
            return Object.assign({},state,{modalDetailIsOpen:action.payload})
         case NEW_EVENT_START:
            return Object.assign({},state,{eventstart:action.payload})   
        default:
            return state;
    }
};