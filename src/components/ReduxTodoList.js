import React, { Component } from 'react'
import {connect} from 'react-redux'

class ReduxTodoList extends Component {
    
    render() {
        return (
            <div>
                {this.props.tasks.map((listitem,index)=> <div key={index}><p>{listitem}
        </p>
        </div>)
            }
            </div>
        )
    }
}
function mapStateToProps(state){
 console.log(state);
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(ReduxTodoList)
