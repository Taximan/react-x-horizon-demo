import React, {Component} from 'react'

import Todos from './Todos'
import TodosForm from './TodosForm'

export default class TodosView extends Component {
  constructor(props) {
    super(props)
    this.state = {maxTodos: 5}
  }
  
  render() {
    return (
      <div>
        <TodosForm />
        <p>
          showing at most {this.state.maxTodos}
        </p>
        <input 
          type="range"
          min={1}
          max={100}
          value={this.state.maxTodos}
          onChange={e => {
            this.setState({maxTodos: Number(e.target.value)})
          }}
          />
        <Todos maxTodos={this.state.maxTodos} />
      </div>
    )
  }
}