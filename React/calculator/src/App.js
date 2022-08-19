import './App.css';
import React, { useState } from 'react';

function App() {

const [result, setResult] = useState("");

const handleClick = (event) => {
  setResult(result.concat(event.target.value))
}

const cleardisplay = () => {
  setResult("");
}

const calculator = () => {
  setResult(eval(result).toString());
}

const inputChange = () => {
  setResult(result)
} 


  return (
    <div className="calc">
        <input onChange={inputChange} type="text" placeholder='0' id='answer' disabled value={result}></input>
          <button type="button" value="7" className="button" onClick={handleClick}>7</button>
          <button type="button" value="8" className="button" onClick={handleClick}>8</button>
          <button type="button" value="9" className="button" onClick={handleClick}>9</button>
          <button type="button" value="*" className="button" onClick={handleClick}>*</button>
          <button type="button" value="4" className="button" onClick={handleClick}>4</button>
          <button type="button" value="5" className="button" onClick={handleClick}>5</button>
          <button type="button" value="6" className="button" onClick={handleClick}>6</button>
          <button type="button" value="-" className="button" onClick={handleClick}>-</button>
          <button type="button" value="1" className="button" onClick={handleClick}>1</button>
          <button type="button" value="2" className="button" onClick={handleClick}>2</button>
          <button type="button" value="3" className="button" onClick={handleClick}>3</button>
          <button type="button" value="+"className="button" onClick={handleClick}>+</button>
          <button type="button" value="0" className="button" onClick={handleClick}>0</button>
          <button type="button" value="." className="button" onClick={handleClick}>.</button>
          <button type="button" value="/" className="button" onClick={handleClick}>/</button>
          <button type="button" value="%" className="button" onClick={handleClick}>%</button>
          <button type="button" className="button button1" onClick={cleardisplay}>Clear</button>
          <button type="button" className="button button1" onClick={calculator}>=</button>
    </div>
  )
}

export default App;