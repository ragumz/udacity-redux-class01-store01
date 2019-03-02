import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos.js'


class Todos extends React.Component {
  //Presentation Component
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value = ''
    ))
  }

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  // Connected Component created by Higher order Component with Currying (1)(2), where (1) is the component data function that returns the props to pass to (2) the componente to be rendered
  todos: state.todos
}))(Todos)
