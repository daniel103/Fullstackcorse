import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, api, setTodos, updateTodo }) => {
  async function deleteTodo(id) {
    await api.delete(`todo/${id}`);
    setTodos(todos.filter((t) => t._id != id));
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          key={todo._id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
