import React, { Component } from 'react'
import moment from 'moment'
class Event extends Component {
    constructor(props){
        super(props)
        
        this.showDetail = this.showDetail.bind(this)
    }
    
    dateFormat(date){
        return moment(date).format('DD-MM-YYYY hh:mm')
    }
    showDetail(){
        this.props.showdetail(this.props.event._id)
    }

    render() {
        const {start,end,comment,title} = this.props.event
            return (
                <article className="card" onClick={this.showDetail}>
                    <div className="right-info">
                        <spam>Inicio : {moment(start).format('DD-MM-YYYY hh:mm')}</spam>
                        
                        <spam>Fin : {moment(end).format('DD-MM-YYYY hh:mm')}</spam>
                        
                    </div>
                    <div className="card-content">
                        <span className="card-title">{title}</span>
                        <p>{comment}</p>
                    </div>
                    
                </article>
            );
        }
    }

export default Event;