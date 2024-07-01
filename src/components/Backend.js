import React,{useState} from "react";

export default function Backend(){
    
    const [role, setRole]= useState("software tester");
    console.log(role);
    return (
        <>
          <h3>im am a {role}</h3>
          <button onClick={() => setRole("frontend developer")}>change the text</button>
        </>
    )
          
}

