import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux'
import { editEvent , closeAllModals, getAllEvents, updateEvent} from '../../actions'
import { MODALEDIT } from '../../constants'
class EditEvent extends Component {
    constructor(props){
        super(props)

        this.state = {
            event:{
                title:'',
                comment:'',
                end:'',
                start:''
                
            }

        }

        this.errorStyle = {
            color: 'red',
        };

        this.nomalStyle = {
            color: 'black',
             
        };
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount(){ this.setState({event:this.props.event})}
           
    
    
    validateData(name, comment){comment.length > 0 && name.length > 0 }
    

    handleUpdate(e){
        e.preventDefault()
        let isValid = this.validateData(e.target.title.value, e.target.comment.value)
        let status = isValid ? {message : 'Ok Enviando', error:false}: {message:'Error: los campos son requeridos', error:true}
        this.setState(status)
        
        if(isValid){
            
            const data = {title:e.target.title.value ,comment:e.target.comment.value, start:e.target.start.value, end:e.target.end.value}
            this.props.updateEvent(this.state.event._id,data);
            
            setTimeout(() => {
                this.props.getAllEvents()
                this.props.closeAllModals()
            },3000)
           
        }
    }
    
    handleChange(e){
        const event = this.state.event
        const name = e.target.name
        event[name] = e.target.value
        this.setState(event);
        e.preventDefault()
    }

    render() {
        const{start, end, title, comment} = this.props.event;
        return (
            <div>
                <h3><i className="material-icons left">mode_edit</i>Editar Evento</h3>
                <hr/>
                <form className="col s12" onSubmit={ this.handleUpdate }>
                    <div className="col s4">
                        <label>Título :</label>
                        <input name="title" type="text"  value={ title } onChange={ this.handleChange }/>
                        
                    </div>
                    <div className="col s4">
                        <label>Descripción del evento :</label>
                        <textarea name="comment" type="text"  className="validate" value={ comment } onChange={ this.handleChange }></textarea>
                        
                    </div>
                    <br/>
                    <div className=" col s4">
                        <label>Inicio evento :</label>
                        <input name="start" type="datetime-local" value={start} onChange={ this.handleChange }/>
                        
                    </div>
                    <br/>
                    <div className=" col s4">
                        <label>Final evento :</label>
                        <input name="end" type="datetime-local" value={end} onChange={ this.handleChange }/>
                    </div>
                        <button className="waves-effect waves-light pink darken-1 btn" type="submit"><i className="material-icons left">present_to_all</i>ACTUALIZAR</button>
                    <br/>
                   
                </form>
                 <br/>
                    <div style={ this.props.response.error ? this.errorStyle : this.normalStyle }>{ this.props.response.message }</div>
                <br/>
            </div>
            
        );
    }
}
const mapStateToProps=state=>({event:state.events.selected,response:state.events.updateresp})
export default connect(mapStateToProps,{closeAllModals, editEvent, getAllEvents, updateEvent})(EditEvent);