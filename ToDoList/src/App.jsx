import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

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
  ])

  return (
    <>
      <main className='app'>
        <h1>Lista de Tarefas</h1>

        <div className='todo-list'>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}/>
          ))}
        </div>
        <TodoForm/>   
      </main>
    </>
  )
}

export default App