import React from 'react';
import Todoitem from './Todoitem';

const TodoList = ({ todos, setTodos }) => {
  const handlecompleted = (id) => {
    const targetIndex = todos.findIndex((todo) => todo.id == id);
    const UpdateTodos= [...todos]
    const target = UpdateTodos[targetIndex]
    target.completed = !target.completed;
    UpdateTodos[targetIndex] = target;
    setTodos(UpdateTodos);
  };

  const handleDelete = (id) => {
    let updateTodos = [...todos];
    updateTodos = updateTodos.filter(todo => todo.id !== id)
    setTodos(updateTodos);
  }
  return ( 
    <div className="todo-list-wrapper">
      {todos.map((todo) => (
        <Todoitem 
        key={todos.id}
        todo={todo}
        handleDelete={handleDelete}  
        handlecompleted={handlecompleted} 
        />
      ))}
    </div>
    );
};

export default TodoList;
