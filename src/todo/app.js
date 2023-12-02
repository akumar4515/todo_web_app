import React, { useState } from "react";
import './mainapp.css';

const UseStateapp = () => {
  const [input, setInput] = useState({ value: '' });
  const [todos, setTodos] = useState([]);
  const [ count, setCount]=useState(0)

  const handleChange = (e) => {
    setInput({ ...input, value: e.target.value });
  }

  const handleSubmit = () => {
    if (input.value.trim() !== '') {
      setTodos([...todos, input.value]);
      setCount(count+1);
      setInput({ value: '' });
    }
  }

  const handleDelete=()=>{
    setCount(count-1);

  }

  return (
    <>
    <div className="container border p-4 mt-2" >
      <div>
    <h2>Using useState.....</h2>
    
      <p>{count} item(s) added</p>
      <input type="text" name="todo" value={input.value} onChange={handleChange}/>
      <button onClick={handleSubmit} className="btn  btn-outline-primary">Add</button>
      </div>
      </div>
      

      <div className="container mt-4 border">
      <h3>Your todo list :</h3>
   

      
  
      <ol>
        {todos.map((todo, index) => (
          <li key={index} className="alert border alert-primary alert-dismissible fade show">
            <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={handleDelete}></button>{todo}</li>
        ))}
      </ol>
    </div>
    </>
  );
};

export default UseStateapp;
