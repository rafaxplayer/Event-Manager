import React, { Component } from 'react';
import '../../styles/DetailEvent'
const  moment = require('moment')
import { connect } from 'react-redux'
import { deleteEvent , showModal, getAllEvents} from '../../actions'
import { MODALEDIT,MODALDETAIL } from '../../constants'

class DetailEvent extends Component {
    constructor(props){
        super(props)

        this.errorStyle = {
            color: 'red',
        };

        this.nomalStyle = {
            color: 'black',
             
        };
    }

    close(){this.props.close()}
    
    
    edit(){this.props.showModal(MODALEDIT,true)}
    

    delete(){
        const res = confirm('¿Seguro quieres eliminar este evento?')
        if(res && this.props.event){
            this.props.deleteEvent(this.props.event._id);
            setTimeout(()=>{
                this.props.getAllEvents()
                this.props.showModal(MODALDETAIL,false)
            },3000)
        }
        
    }

    render(){
        const{start, end, title, comment} = this.props.event
        return (
            <section className=" white">
                <article className="black-text">
                    <h3><i className="material-icons left">today</i>{title}</h3>
                    <hr/>
                    <p><spam>Inicio : </spam>{moment(start).format('YYYY-MM-DD hh:mm')}</p>
                    <p><spam>Final : </spam>{moment(end).format('YYYY-MM-DD hh:mm')}</p>
                    <p><spam>Comentario : </spam>{comment}</p>
                </article>
                <div className="buttons">
                    <button className="waves-effect waves-light pink darken-1 btn" onClick={this.edit.bind(this)}><i className="material-icons left">mode_edit</i>Editar</button>
                    <button className="waves-effect waves-light pink darken-1 btn" onClick={this.delete.bind(this)}><i className="material-icons left">delete</i>Eliminar</button>
                </div>
                <br/>
                <br/>
                <div style={ this.props.response.error ? this.errorStyle : this.normalStyle }>{ this.props.response.message }</div>
                <br/>
            </section>
        );
    }
}
const mapStateToProps = state =>({event:state.events.selected,response:state.events.deleteresp})
export default connect(mapStateToProps,{ showModal, deleteEvent, getAllEvents })(DetailEvent);