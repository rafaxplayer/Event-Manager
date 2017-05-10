import React, { Component } from 'react';
import Empty from './EmptyList'
class Loader extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            waitfinish:false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({waitfinish:true})
        },3000)
    }
        
    
    render() {
        return(
        <div>
            {
                this.state.waitfinish ? <Empty/> : (
            <div className="loader">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle">
                    </div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
            <spam>Cargando...</spam>
            </div>)
            }
        </div>)
      
    }
}

export default Loader; 
