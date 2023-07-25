
export const Todo = ({ todo }) => {
  return (
    <div className='todo'>
    <div className='content'>
      <p>{todo.text}</p>
      <p className='categoty'>({todo.category})</p>
    </div>
    <div>
      <button className="complete">Confirmar</button>
      <button className="remove">X</button>
    </div>
  </div>
  )
}
