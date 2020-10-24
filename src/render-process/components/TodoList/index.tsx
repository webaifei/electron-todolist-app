import React from 'react'
import TodoItem from '../TodoItem'

export default function TodoList() {

  return (
    <div>
      {
        Array.from({length: 10}).map(todo=> <TodoItem></TodoItem>)
      }
    </div>
  )
}
