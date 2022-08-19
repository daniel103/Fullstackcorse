import './App.css';
import { useState } from 'react';
import From  from "./components/From";
import TodoList from './components/TodoList';


function App() {
  const initialToodos = [
    { id: 0, task: "Get some sleep", completed: false},
    { id: 1, task: "Eat something", completed: true},
    { id: 2, task: "Code something", completed: false},
  ];

  const [todos, setTodos] = useState(initialToodos);

  const handleAddTodo = (task) => {
    let lastTodoId = -1;
    if(todos.length) {
      lastTodoId = todos[todos.length - 1].id;
    }
    const newTodo = {
      id: lastTodoId + 1,
      task: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <From handleAddTodo ={handleAddTodo} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
