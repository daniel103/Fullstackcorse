import React from 'react';
import { useState } from 'react';

const From = ({ handleAddTodo, todos, setTodos }) => {
    const [InputValue, setInputValue] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodoClick = () => {
        handleAddTodo(InputValue);
    }


    const handleToggleAll = (event) => {
        let toggleTodos = [...todos];
        toggleTodos = toggleTodos.map((todo) => ({
          ...todo,
          completed: event.target.checked,
        }));
        setToggle(event.target.checked)
        setTodos(toggleTodos);
      };
    

  return ( 
    <div className='from-wrapper'>
        <div className="form-input-wrapper">
        <input onChange={handleInputChange} type="text" id='input' />
        <button onClick={handleAddTodoClick}>Add</button>
        </div>
        <div className="toggle-all">
            <p>{toggle ? "uncompleted all" : "completed all"}</p>
            <input type="checkbox" onChange={handleToggleAll} />
        </div>
    </div>
    );
};

export default From;
