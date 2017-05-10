import React, { Component } from 'react';
import EmptyImg from '../../resources/emptylist'
const style={
    margin:'0 auto',
    display:'block'
}
class EmptyList extends Component {
    
    render() {
        return (
            <div style={style}>
                <img src={EmptyImg}/>
            </div>
        );
    }
}

export default EmptyList;