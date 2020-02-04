import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addtask} from '../Redux/TaskActions'

class AddTask extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="inputelement"/>
                <button onClick={()=>this.props.addtask(this.refs.inputelement.value)}>Add tasks</button>
            </div>
        )
    }
}
function mapDipatchtoProps(dispatch){
    return bindActionCreators({addtask},dispatch)
}

export default connect(()=>{},mapDipatchtoProps)(AddTask)
