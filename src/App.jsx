import { useState, useEffect } from "react"
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, settodos] = useState([])

  const [todoValue, settodoValue] = useState('')

  useEffect(() => {
    if (!localStorage) {
      return
    }
    
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    settodos(JSON.parse(localTodos).todos)
  }, [])
  
  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({todos : newList}))
  }

  function handleAddTodos(newTodo) {
    let newTodos = [...todos, newTodo]
    settodos(newTodos)
    persistData(newTodos)
  }

  function handleDeleteTodos(index) {
    const newTodos = todos.filter((todo, toDoIndex) => {
      return toDoIndex !== index
    })

    settodos(newTodos)
    persistData(newTodos)
  }

  function handleEditTodos(index) {
    const valueToEdit = todos[index]
    settodoValue(valueToEdit)
    handleDeleteTodos(index)
  }

  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} todoValue={todoValue} settodoValue={settodoValue}/>
      <ToDoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
    </>
  )
}

export default App
