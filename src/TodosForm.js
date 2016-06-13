import React, {Component} from 'react'
import {inject} from 'react-x-horizon'

@inject(['todos', todos => {
  return {
    addTodo: (body) => todos.store({body: body, created_at: new Date()})
  }
}])
export default class TodosForm extends Component {  
  handleSubmitButtonClick(e) {
    e.preventDefault()
    
    const {addTodo} = this.props
    const {nextTodoInput} = this.refs

    addTodo(nextTodoInput.value)
    nextTodoInput.value = ''
  }

  render() {
    return (
      <form>
        <input ref="nextTodoInput"/>
        <button onClick={this.handleSubmitButtonClick.bind(this)}>submit</button>
      </form>
    )
  }
}