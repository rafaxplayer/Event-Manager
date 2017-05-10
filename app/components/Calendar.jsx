import React, { Component } from 'react';
import $ from 'jquery'
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import New from './items/New'
import EditEvent from './items/EditEvent'
import DetailEvent from './items/DetailEvent'
import Modal from 'simple-react-modal'
import moment from 'moment'
import { MODALNEW , MODALEDIT, MODALDETAIL } from '../constants'
import { connect } from 'react-redux'
import { getAllEvents, getEvent, showModal,setNewEventStart } from '../actions'

class Calendar extends Component {
    
   initCalendar(){
        const self = this;  
        $("#calendar").fullCalendar({
            events:this.props.events,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			eventClick: function(calEvent, jsEvent, view) {
                self.props.getEvent(calEvent._id)
                self.props.showModal(MODALDETAIL,true)
                
            },
            dayClick: function(date, jsEvent, view, resourceObj) {
                self.props.setNewEventStart(moment(date).toISOString())
                self.props.showModal(MODALNEW,true)          
            }
        });
        
   }

    componentDidMount() {
       
        this.initCalendar()
          
    }

    componentWillReceiveProps(props){
        $('#calendar').fullCalendar( 'removeEvents');
        $("#calendar").fullCalendar("addEventSource", props.events);
    }


    render() {
         return (
            <div className="container">
                <div id="calendar"></div>
            </div>
            
        );
    }
}
const mapStateToProps = state => ({events:state.events.list})
export default connect(mapStateToProps,{ getAllEvents, getEvent, showModal, setNewEventStart})(Calendar);