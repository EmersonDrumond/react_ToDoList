import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

import "./App.css"


function App() {

  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);


  const [search, setSearch] = useState("")

  
  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    },]

    setTodos(newTodos)
  };


  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    )
    setTodos(filteredTodos)
  }


  const completeTodos = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }



  return (
    <>
      <main className='app'>
        <h1>Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch}/>
        <Filter/>
        <div className='todo-list'>
          {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodos={completeTodos}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>   
      </main>
    </>
  )
}

export default App
