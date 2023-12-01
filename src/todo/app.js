import React, { useState } from "react";

const UseStateapp = () => {
  const [input, setInput] = useState({ value: '' });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput({ ...input, value: e.target.value });
  }

  const handleSubmit = () => {
    if (input.value.trim() !== '') {
      setTodos([...todos, input.value]);
      setInput({ value: '' });
    }
  }

  return (
    <>
    <h2>using useState.....</h2>
      <h3>Your todo list</h3>
      <p>{todos.length} item(s) added</p>
      <input type="text" name="todo" value={input.value} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default UseStateapp;
