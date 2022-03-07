import React from 'react'
import TodoList from './TodoList'

let idx = 0
const getIdx = () => ++idx

const todos = [
  { id: getIdx(), name: 'Organize Garage', conpleted: false },
  { id: getIdx(), name: 'Bake Cookies', completed: false }
]

const initialState = {
  
}

export default class App extends React.Component {
  state = initialState
  render() {
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
}
