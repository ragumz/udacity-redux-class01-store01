import React, { Component } from 'react';
import { connect } from 'react-redux'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import {
  handleInitialData
} from '../actions/shared'

class App extends Component {
  //Presentation Component
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    /*const { store } = this.props
    const { todos, goals, loading } = store.getState()*/
    if (this.props.loading === true) {
      return <h3>Loading Data...</h3>
    }

    return (
      <div>
        {/*<Todos todos={todos} store={this.props.store} />
        <Goals goals={goals} store={this.props.store} />*/}
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state) => ({
  // Connected Component created by Higher order Component with Currying (1)(2), where (1) is the component data function that returns the props to pass to (2) the componente to be rendered
  loading: state.loading
}))(App)