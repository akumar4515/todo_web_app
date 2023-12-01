import React, { useRef,useState} from "react";

export const RefApp=()=>{
    const inputRef=useRef(null);
    const [todos,setTodos]=useState([]);

    const handleSubmit=()=>{
        const inputValue=inputRef.current.value;

        if(inputValue!==''){
            setTodos([...todos,inputValue]);
            inputRef.current.value='';


        }
    }




    return(
        <>
        <h2>using useRef......</h2>
        <h3>Your todo list</h3>
        <p>{todos.length} item(s) added</p>
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {todos.map((todos, index) => (
            <li key={index}>{todos}</li>
          ))}
        </ul>
        </>


    )
}