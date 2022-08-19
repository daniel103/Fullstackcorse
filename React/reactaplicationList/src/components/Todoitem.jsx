import React from 'react';

function Todoitem({ todo, handlecompleted, handleDelete})  {
  return (
    <div className="todo-item-wrapper">
      <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.task}
        </p>
      <div className="todo-item-actions">
          <input
          type="checkbox"
          onChange={() => handlecompleted(todo.id)}
          checked={todo.completed}
          />
          <button onClick={() => handleDelete (todo.id)}>Delete</button>
      </div>
  </div>
  )
}

export default Todoitem;
