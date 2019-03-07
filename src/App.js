import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },

      {
        id: 2,
        title: 'Dinner with Wife',
        completed: false
      },

      {
        id: 3,
        title: 'Meeting with friends',
        completed: false
      }
    ]

  }
  //Toggle Complete function
  markComplete = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      } 
      return todo;
    })})
  }
  //Delete Todo function
  delTodo = (id) => {
    console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  render() {
    console.log(this.state.todos)  //Lifecycle method needed to render the component
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
