import React, { useState, useEffect } from "react";

// 1. send request to the api - with the input value
// 2. received response form the api - single todo

const Form = ({ createTodo }) => {
  const [inputVal, setInputVal] = useState("");

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createTodo(inputVal);
    setInputVal("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input value={inputVal} type="text" onChange={handleInputChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Form;
