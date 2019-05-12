import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItems extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',

      textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
  }

  
  render() {
    const {id , name } = this.props.todo;


    return (
      <div style={this.getStyle()}>
      <input type = "checkbox" onChange={this.props.markComplete.bind
        (this , id)}/> 
      {' '}
        { name }
        <button onClick={this.props.delToDo.bind(this, id)} style ={btnStyle}>x</button>
      </div>
    )
  }
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}

const btnStyle = {
  background: '#ff0000',
  color: '#ffffff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

TodoItems.propTypes = {
  todos: PropTypes.object.isRequired
}
export default TodoItems;
