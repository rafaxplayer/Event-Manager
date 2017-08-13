import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment'
import { connect } from 'react-redux'
import { saveEvent, getAllEvents,showModal } from '../../actions'
import { MODALNEW } from '../../constants'
class New extends Component {

    constructor(props){
        super(props)

        this.state = {
            title:'',
            comment:'',
            date:''
                   
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateData = this.validateData.bind(this);

        this.errorStyle = {
            color: 'red',
        };

        this.nomalStyle = {
            color: 'black',
             
        };
    }

    handleSubmit(e){
        e.preventDefault()
        let isValid = this.validateData(e.target.title.value, e.target.comment.value)
        let status = isValid ? {message : 'Ok Enviando', error:false}: {message:'Error: los campos son requeridos', error:true}
        this.setState(status)
        
        if(isValid){
            
            const data = { title:e.target.title.value ,comment:e.target.comment.value, start:this.state.date, end:moment(e.target.end.value).format('YYYY-MM-DDThh:mm')}
            this.props.saveEvent(data)
            setTimeout(()=>{
                this.props.getAllEvents()
                this.props.showModal(MODALNEW,false)
            },3000)
            
        }
        
    }

    handleChange(e){
        let value = e.target.name === 'title' ? {title:e.target.value} : {comment:e.target.value}
        this.setState(value);
    }

    validateData(name, comment){
        return comment.length > 0 && name.length > 0 
    }

    componentWillMount() {
        this.setState({date:moment(this.props.start).format('YYYY-MM-DDThh:mm')})
    }
    
       
    render() {
         
        return (
            <div>
                <h3>Nuevo Evento</h3>
                <spam>Inicio del Evento : {moment(this.state.date).format('YYYY-MM-DD hh:mm')}</spam>
                <form className="col s12" onSubmit={ this.handleSubmit }>
                    <div className="input-field col s4">
                        <input name="title" id="title" type="text" className="validate" value={ this.state.title } onChange={ this.handleChange }/>
                        <label htmlFor="title">Título :</label>
                    </div>
                    <div className="input-field col s4">
                        <textarea name="comment" id="comment" className="validate" value={ this.state.comment } onChange={ this.handleChange }></textarea>
                        <label htmlFor="comment">Texto :</label>
                    </div>
                    <br/>
                    <div className=" col s4">
                        <label>Final evento :</label>
                        <input name="end" ref="end" type="datetime-local" defaultValue={ this.state.date } min={ this.state.date }/>
                    </div>
                        <button className="waves-effect waves-light pink darken-1 btn" type="submit"><i className="material-icons left">done</i>GUARDAR</button>
                    <br/>
                    <br/>
                    <div style={ this.props.response.error ? this.errorStyle : this.normalStyle }>{ this.props.response.message }</div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({response:state.events.newresp,start:state.modals.eventstart})
export default connect(mapStateToProps,{saveEvent, getAllEvents, showModal})(New);