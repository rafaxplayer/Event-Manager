import React, { Component } from 'react';
import Event from './items/Event'
import Loader from './items/Loader'
import '../styles/Event'
import { MODALDETAIL } from '../constants'
import { connect } from 'react-redux'
import { showModal, getEvent, getAllEvents } from '../actions'
class List extends Component {
      
    showDetail(id){
        this.props.getEvent(id)
        this.props.showModal(MODALDETAIL,true)
    }

    render() {
  
        return (
            <section className="container">
                {
                 
                    this.props.events.length > 0 ? this.props.events.map((event,i) => <Event key={i} event={event} showdetail={this.showDetail.bind(this,event._id)}/>):<Loader/>
                    
                }
                
            </section>
        );
    }
}
const mapSateToProps = state =>({ events:state.events.list })
export default connect(mapSateToProps,{ showModal, getEvent, getAllEvents})(List);