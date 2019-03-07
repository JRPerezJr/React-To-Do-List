import React, { Component } from 'react';
import './App.css';
//import uuid from 'uuid'; was no longer needed
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';


class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  // Add Todo
  addTodo = (title) => {
    // console.log(title)
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false No longer needed
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title, 
        completed: false
      })
        .then(res => this.setState({ todos:
        [...this.state.todos, res.data] }));
    
    // this.setState({ todos: [...this.state.todos, newTodo] });
  }
  render() {
    console.log(this.state.todos)  //Lifecycle method needed to render the component
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete}
                    delTodo={this.delTodo}
                    />
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}



export default App;

// {
//   id: uuid.v4(),
//   title: 'Pay Rent',
//   completed: false
// },

// {
//   id: uuid.v4(),
//   title: 'Pay Utilities',
//   completed: false
// },

// {
//   id: uuid.v4(),
//   title: 'Meet with Kanojo',
//   completed: false
// } Removed from Todos array 