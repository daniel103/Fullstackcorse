import React, {useState, useEffect} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

function App() {
  const [todos, setTodos] = useState([]);

  const updateTodo = async (id) => {
    const index = todos.findIndex((t) => t._id == id);
    const completed = todos[index].completed;
    const body = { completed: !completed };

    const res = await api.put(`todo/${id}`, body);

    const tempTodos = [...todos];

    tempTodos[index] = res.data;

    setTodos(tempTodos);
  };

  const createTodo = async (task) => {
    const body = { task };
    const res = await api.post("todo", body);
    setTodos((prev) => [...prev, res.data]);
  };

  const getAllTodos = async () => {
    const res = await api.get("todo");
    setTodos(res.data);
  };

  const deleteTodo = async () => {
   const res = await api.delete("todo");
   console.log(res);
   setTodos([])
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className="App">
      <Form createTodo={createTodo} />
      <TodoList
        updateTodo={updateTodo}
        setTodos={setTodos}
        api={api}
        todos={todos}
      />
      <button onClick={() => deleteTodo()}>Delete All</button>
    </div>
  );
}

export default App;
