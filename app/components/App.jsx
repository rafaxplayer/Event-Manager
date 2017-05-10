import React, { Component } from 'react';
import Header from './Header.jsx'
import '../styles/App'
import Calendar from './Calendar'
import NotificationSystem from 'react-notification-system'
import List from './List'
import moment from 'moment'
import New from './items/New'
import EditEvent from './items/EditEvent'
import DetailEvent from './items/DetailEvent'
import Modal from 'simple-react-modal'
import { connect } from 'react-redux'
import { getEventsToday ,showModal, getAllEvents} from '../actions'
import { MODALNEW, MODALEDIT, MODALDETAIL} from '../constants'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {

            renderList:false           
            
        }
        this._notificationSystem = null
        this.addNotification= this.addNotification.bind(this)
        this.showModal=this.showModal.bind(this)
    }

    addNotification(title,message) {
        
        this._notificationSystem.addNotification({
            title:title,
            message: message,
            level: 'success',
            position:'br',
            autoDismiss:0,
            action: {
                label: 'Ver detalles',
                callback: function() {
                    console.log('Notification button clicked!');
                }
            }
        });
    }

    handleToggleCalendarList(){
        this.setState({renderList:!this.state.renderList})
    }

    componentWillMount() {
        this.props.getEventsToday()
        this.props.getAllEvents()
        
    }

    showModal(type, bool){
        this.props.showModal(type,bool)
               
    }
    componentDidMount(){

        this._notificationSystem = this.refs.notificationSystem;
        if(this.props.eventstoday.length){
            this.props.eventstoday.forEach((element) => {
                this.addNotification(element.title,element.comment)
            });
        }
    }

       
    render() {

        return (
            <div className="App">
                
            <Header shownew = {this.state.renderList} handleNew = {this.handleToggleCalendarList.bind(this)}/>
            {
                this.state.renderList ? <List /> : <Calendar/>
            }
            
            <NotificationSystem ref="notificationSystem"/>

            <Modal show={ this.props.NewIsOpen } onClose={ this.showModal.bind(this, MODALNEW,false) } containerClassName="dialog">
                <New/>
            </Modal>
            <Modal show={ this.props.DetailIsOpen } onClose={ this.showModal.bind(this, MODALDETAIL, false) } containerClassName="dialog">
                <DetailEvent/>
            </Modal>
            <Modal show={ this.props.EditIsOpen } onClose={ this.showModal.bind(this, MODALEDIT, false) } containerClassName="dialog">
                <EditEvent/>
            </Modal>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    eventstoday:state.events.list_today,
    EditIsOpen:state.modals.modalEditIsOpen,
    DetailIsOpen:state.modals.modalDetailIsOpen,
    NewIsOpen:state.modals.modalNewIsOpen
})
export default connect(mapStateToProps,{showModal, getEventsToday, getAllEvents})(App);