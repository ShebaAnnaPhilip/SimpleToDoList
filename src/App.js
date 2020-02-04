import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import StyledTodoList from './components/StyledTodoList';
import ReduxAddTodo from './components/ReduxAddTodo';
import ReduxTodoList from './components/ReduxTodoList';
import AddTask from './componentsnew/AddTask';
import TaskList from './componentsnew/TaskList';

function App() {
  return (
    <div className="App">
      {/* <h4>Simple To Do List</h4>
      <TodoList/>
      <StyledTodoList/> */}
      <h4>Redux To Do List</h4>
      {/* <ReduxAddTodo/>
      <ReduxTodoList/> */}
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
