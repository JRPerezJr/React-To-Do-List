import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    // getStyle = () => {
    //     if(this.props.todo.completed) {
    //         return {
    //             textDecoration: 'line-through'
    //         }
    //     } else {
    //         return {
    //             textDecoration: 'none'
    //         }
    //     }
    // } The long way of doing it.
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render() {
      const { id, title } =this.props.todo; //pulling the variables out of this.props
    return (
      <div style={this.getStyle()} >
        <h1>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
            { title }
            <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </h1>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
