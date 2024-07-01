import React, { useEffect, useState, useRef } from "react";

const UseRefHook = () =>{

    const [input, setInput] = useState("");

    const inputRef = useRef();

     const display = () =>{
        console.log(inputRef.current);
        inputRef.current.focus();
     };
     
     useEffect(() =>{
         inputRef.current = input;
         console.log('input value');
     }, [input])

    return(
        <>
        <input 
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
        <p>My name is {input}</p>
        <p>My name is {inputRef.current}</p>
        <button onClick={display}>show input</button>
        </>
    )
}

export default UseRefHook;