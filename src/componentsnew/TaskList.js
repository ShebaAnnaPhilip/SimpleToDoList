import React, { Component } from 'react'
import { connect } from 'react-redux'

class TaskList extends Component {
    render() {
        return (
            <div>
                {
    this.props.tasks.map((task,index)=><li key={index}>{task}</li>)
                }
            </div>
        )
    }
}
function mapStatetoProps(state){
   return {tasks: state.tasks} 
}
export default connect(mapStatetoProps)(TaskList)
