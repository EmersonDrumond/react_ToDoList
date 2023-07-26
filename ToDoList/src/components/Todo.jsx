
export const Todo = ({ todo, removeTodo, completeTodos }) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
    <div className='content'>
      <p>{todo.text}</p>
      <p className='categoty'>({todo.category})</p>
    </div>
    <div>
      <button className="complete" onClick={() => completeTodos(todo.id)}>Confirmar</button>
      <button className="remove" onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  </div>
  )
}


export default Todo