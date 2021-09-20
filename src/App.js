import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4} from 'uuid'
import './App.css';
import Header from './Header'
import ToDoList from './ToDoList'
import AddTask from './AddTask'

const LOCAL_STORAGE_KEY = "todoApp.todos"


const App = () => {
  const [ toDoList, setToDoList ] = useState([])
  const todoNameRef = useRef()

  const numberOfThingsToDo = toDoList.length

  toDoList.map(item => {
    return(
        item.key = uuidv4()
      )
  })

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setToDoList(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDoList))
  }, [toDoList])

  function handleCheckItem(id) {
    const newTodos = [...toDoList]
    const todo = newTodos.find(todo => todo.id === id)    
    todo.complete = !todo.complete
    setToDoList(newTodos)
  }

  function handleAddNewItem(e) {
    let name = todoNameRef.current.value
    if (name === '') return
    setToDoList(prevTodos => {
      return [...prevTodos, { id: uuidv4(), task: name, complete: false, key: uuidv4()}]
    })
    todoNameRef.current.value = null
  }

  function handleDeleteItem(id) {
    const newTodos = [...toDoList]
    const newFilteredTodos = newTodos.filter(todo => todo.id !== id)
    setToDoList(newFilteredTodos)
  }

  function handleDeleteAll() {
    const newTodos = [...toDoList]
    const newFilteredTodos = newTodos.filter(todo => todo.complete === false)
    setToDoList(newFilteredTodos)
  }


  return (
    <div className="app-container">
      <Header
        numberOfThingsToDo={numberOfThingsToDo}
        deleteAll={handleDeleteAll}
        />
      <ToDoList 
        toDoList={toDoList}
        checkItem={handleCheckItem}
        deleteItem={handleDeleteItem}
      />
      <AddTask addItem={handleAddNewItem}
        todoNameRef={todoNameRef}
      />
    </div>
  );
}
  

export default App;
