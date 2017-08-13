import React, { Component } from 'react';
import '../styles/Header.css'
class Header extends Component {
    constructor(props){
        super(props)
        this.showList=this.showList.bind(this);
       
    }

    showList(){this.props.handleNew()};
    
   

    renderButtonNew(){return (<a onClick={this.showList} className="btn-floating btn-medium waves-effect waves-light pink darken-1">
                                {this.props.shownew ? <i className="material-icons">today</i>:<i className="material-icons">view_list</i>}
                            </a>)}
    

    render() {
        
        return (
            
            <header className="pink">
                <h1>Event Manager</h1>
                {
                    this.renderButtonNew()
                }
            </header>
        );
    }
}

export default Header;