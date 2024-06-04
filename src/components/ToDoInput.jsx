import React from 'react'

export default function ToDoInput(props) {
  const { handleAddTodos, todoValue, settodoValue } = props
  return (
    <header>
      <input value={todoValue} onChange={(e) => {settodoValue(e.target.value)}} placeholder="Enter todo ..."/>
      <button onClick={() => {
        handleAddTodos(todoValue)
        settodoValue('')
      }}>
        Add
      </button>
    </header>
  )
}
