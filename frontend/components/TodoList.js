import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo name={todo.name} id={todo.id} completed={todo.completed} />
          )
        })}
      </div>
    )
  }
}
