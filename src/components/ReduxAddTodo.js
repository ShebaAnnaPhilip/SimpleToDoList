import React from 'react'
import './StyledTodoList.css' 
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addtask} from '../Redux/TaskActions'

class  ReduxAddTodo extends React.Component {

    render(){
        return (
            <div className="styled-todo">
                <input id="to-do-input" ref="inputel" type="text" placeholder="Enter Item"  
                />
                <button id="to-do-button" onClick={()=>this.props.addtask(this.refs.inputel.value)}>Add Item</button>
                {/* <ListItems items ={this.state.items} deleteItems={this.handleDelete}/> */}
            </div>
    )
}
    }
    

function mapDispatchToProps(dispatch){
    return bindActionCreators({addtask},dispatch)
}

export default connect(()=>{},mapDispatchToProps)(ReduxAddTodo)
