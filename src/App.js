import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Pay Rent',
        completed: false
      },

      {
        id: uuid.v4(),
        title: 'Pay Utilities',
        completed: false
      },

      {
        id: uuid.v4(),
        title: 'Meet with Kanojo',
        completed: false
      }
    ]

  }
  // Toggle Complete function
  markComplete = (id) => {
    console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      } 
      return todo;
    })})
  }
  // Delete Todo function
  delTodo = (id) => {
    console.log(id)
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  // Add Todo
  addTodo = (title) => {
    console.log(title)
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false

    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    console.log(this.state.todos)  //Lifecycle method needed to render the component
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos} markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
        </div>
      </div>
    );
  }
}

export default App;
