import React from 'react'

export default function ToDoCard(props) {
    const { children, index, handleDeleteTodos, handleEditTodos } = props
  return (
    <li className="todoItem">
        {children}
        <div className="actionsContainer">
            <button onClick={()=> {
                handleEditTodos(index)
            }}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick = {() => {
                handleDeleteTodos(index)
            }}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
    )
}
