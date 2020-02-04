import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state ={
            userInput: '',
            items:[]
        }
    }

    handleInputChange = (userinpvalue)=> {
        console.log(userinpvalue);
        this.setState({
            ...this.state,
            userInput: userinpvalue
        })
    }

    handleClick=()=> {
        let newListItems = this.state.items;
        newListItems.push(this.state.userInput);
        this.setState({
            userInput: '',
            items: newListItems
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.userInput} type="text" onChange={(e)=> this.handleInputChange(e.target.value)}/>
                <button onClick={()=> this.handleClick()}> Add Item</button>
                <ul>
                    {
                        this.state.items.map((item)=><li>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}
