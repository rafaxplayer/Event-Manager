import constants from '../constants'

export function getAllEvents(){
    return (dispatch,getstate) => {
        fetch(constants.API_URL_EVENTS)
        .then((response) => {
            return response.json()
        })
        .then((resp) => {
            console.log("Get All")
            dispatch({type:constants.LIST_EVENTS, payload:resp.events})
       
        })
    }
}

export function getEventsToday(){
    return (dispatch,getstate) => {

    }
}

export function getEvent(id){
    return (dispatch,getstate) => {
        fetch(constants.API_URL_EVENT + id)
        .then((response) => {
            return response.json()
        })
        .then((resp) => {
            dispatch({type:constants.SELECTED_EVENT, payload:resp.event})
        })
    }
}
export function deleteEvent(id){
    return (dispatch, getstate) =>{
        fetch(constants.API_URL_EVENT + id,{ method:'DELETE'})
            .then((response) => {
                return response.json()
           
            })
            .then((resp) => {
              dispatch({type:constants.DELETE_EVENT, payload:resp})
            
            })
    }
}

export function saveEvent(data){
    return (dispatch, getstate) =>{
        let headers = new Headers()
            headers.append('Content-Type', 'application/json')
        fetch(constants.API_URL_EVENT,
            { method:'post',headers:headers,body:JSON.stringify(data)})  
            .then((response) => {
                 return response.json()
            })
            .then((resp) => {
              dispatch({type:constants.NEW_EVENT, payload:resp})
                    
            })
    }
}

export function updateEvent(id,data){
    return (dispatch, getstate) => {
        let headers = new Headers()
            headers.append('Content-Type', 'application/json')
         fetch('http://localhost:9000/api/event/' + id,
            { method:'PUT', headers, body:JSON.stringify(data)})  
            .then((response) => {
                 return response.json()
            })
            .then((resp) => {
                dispatch({type:constants.UPDATE_EVENT, payload:resp})
                     
        })
    }
}

export function closeAllModals(){
    return (dispatch, getstate) =>{
        dispatch({type:constants.MODALDETAIL,payload:false})
        dispatch({type:constants.MODALEDIT,payload:false})
        dispatch({type:constants.MODALNEW,payload:false})
    }
}

export function showModal(idModal,boolShow){
    return (dispatch, getstate) =>{
        closeAllModals()
        dispatch({type:idModal,payload:boolShow})
    }
}

export function setNewEventStart(eventstart){
    return (dispatch, getstate) =>{
        dispatch({type:constants.NEW_EVENT_START,payload:eventstart})
    }
}