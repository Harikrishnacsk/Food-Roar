import { useEffect, useState } from "react";

function MyForm(){
    //const [name, setName] = useState("");
    //const [age, setAge] = useState("");
    //const [email, setEmail] = useState("");
    //console.log("current state " + name);
    const [i,setI] = useState(1);
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(()=>console.log(i),[i])

    useEffect(()=>{console.log("im mounting")
  //    fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json()).then(res => setResult(res))
    
  //  .catch(er=>console.log("error"+ er))

  //  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(user =>setUser(user)) .catch(er=>console.log("error"+ er))
       },[])
   
   
   
       useEffect(()=>{console.log("im changed ${}"+ result)
        result?.forEach(itm=>console.log(itm.title))

},[result])


useEffect(()=>{console.log("im user changed}"+ user)
user?.forEach(itm=>console.log(itm.email))

},[user])


    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted");
        //console.log("Current state", name, age, email);
        console.log("current state", inputs);
        setUser(null)
    }
    
    function handleChange(e){
       const name = e.target.name
       const value = e.target.value
       setI(prev=>prev+1)
        setInputs((previousState) => {
            
           return {...previousState, [name] : value}
        })
    }

    return (
    <form onSubmit={handleSubmit}>

       <label>Enter your name: <input type="text" name="name" onChange={handleChange}/></label><br/>
       <label>Enter your age: <input type="text" name="age" onChange={handleChange}/></label><br/>
       <label>Enter your email: <input type="text" name="email" onChange={handleChange}/></label><br/>
       <label>Enter your phone: <input type="text" name="phone" onChange={handleChange}/></label><br/>
       <label>Enter your country: <select name="country" onChange={handleChange} value={inputs.country}>
                   <option value="">Select</option> 
                   <option value="Australia">Australia</option>
                   <option value="USA">USA</option>
                   <option value="India">India</option>
        </select></label><br/>
        <label>Enter your comments: <textarea name="about" onChange={handleChange}/></label><br/>
       <input type="submit" value="submit form"/>
    </form>
    )
}

export default MyForm;