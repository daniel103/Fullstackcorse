import React from "react";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <div className="todo-item-container">
      <p className={todo.completed ? "todo-item-completed" : ""}>{todo.task}</p>
      <div className="todo-item-action">
        <input
          onChange={() => updateTodo(todo._id)}
          type="checkbox"
          checked={todo.completed}
        />
        <button onClick={() => deleteTodo(todo._id)}>X</button>
      </div>
    </div>
  );
};

export default TodoItem;
