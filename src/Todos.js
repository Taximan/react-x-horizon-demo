import React, {Component} from 'react'
import {inject} from 'react-x-horizon'

@inject(['todos'], (todos, ownProps) => {
  return {
    todos: todos.order('created_at', 'descending').limit(ownProps.maxTodos).watch()
  }
})
export default class Todos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <Todo {...todo} key={todo.id} />
        })}
      </ul>
    ) 
  }
}

/**
 * toYYYYMMDD
 * @param {Date} date
 * @returns {string}
 */
const toYYYYMMDD = (date) => date.toISOString().slice(0,10).replace(/-/g,"/")

const Todo = ({body, created_at}) => {
  return (
    <li>
      <article>
        <header>{toYYYYMMDD(created_at)}</header>
        <p>{body}</p>
      </article>
    </li>
  )  
}