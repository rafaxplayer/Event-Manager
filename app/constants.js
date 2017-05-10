module.exports={
    MODALNEW : 1,
    MODALEDIT : 2,
    MODALDETAIL : 3,
    MONGOURL : process.env.MONGOURL || 'mongodb://localhost:27017/events',
    PORT : process.env.PORT || 9000,
    API_URL_EVENTS: 'http://localhost:9000/api/events',
    API_URL_EVENT:'http://localhost:9000/api/event/',
    API_URL_EVENTS_TODAY:'http://localhost:9000/api/events/today',
    LIST_EVENTS:'list_events',
    LIST_EVENTS_TODAY:'list_events_today',
    SELECTED_EVENT:'selected_event',
    DELETE_EVENT:'delete_event',
    NEW_EVENT:'new_event',
    UPDATE_EVENT:'update_event',
    NEW_EVENT_START:'new_event_start'
}

