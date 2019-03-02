import React from 'react'
import { connect } from 'react-redux'
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal,
} from '../actions/goals.js'

class Goals extends React.Component {
  //Presentation Component
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ))
  }
  removeItem = (goal) => {
    this.props.dispatch(handleDeleteGoal(goal))
  }
  render() {
    return (
      <div>
        <h1>Goals</h1>
        <input
          type='text'
          placeholder='Add Goal'
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List
          items={this.props.goals}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  // Connected Component created by Higher order Component with Currying (1)(2), where (1) is the component data function that returns the props to pass to (2) the componente to be rendered
  goals: state.goals
}))(Goals)
