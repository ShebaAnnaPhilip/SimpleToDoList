import React, { Component } from 'react'
import './StyledTodoList.css'
import ListItems from './ListItems';

export default class StyledTodoList extends Component {
    constructor(props){
        super(props);
            this.state ={
                userInput:{
                    inputText:'',
                    key:''
                },
                items:[]

            }
    }

    handleInput = (e)=>{
        this.setState({
            userInput:{
                inputText:e.target.value,
                key:Date.now()
            },
        })
    }
    handleSubmit =()=>{
       //console.log(this.state.items)
        if(this.state.userInput.inputText !== ''){
            console.log(this.state.userInput)

            let newItemsArray = [...this.state.items, this.state.userInput];
            this.setState({
                userInput:{
                    inputText:'',
                    key:''
                },
                items:newItemsArray
            })
           console.log(this.state.items)
        }
        
    }
    handleDelete =(key)=>{
        const filteredItems = this.state.items.filter(item=>item.key !== key);
        this.setState({
            items:filteredItems
        })

    }
    render() {
        return (
            <div className="styled-todo">
                <input id="to-do-input" type="text" placeholder="Enter Item"  value={this.state.userInput.inputText} 
                    onChange={this.handleInput}/>
                <button id="to-do-button" onClick={this.handleSubmit}>Add Item</button>
                <ListItems items ={this.state.items} deleteItems={this.handleDelete}/>
            </div>
        )
    }
}
