import React,{useState} from "react";
const Login=()=>{
    const [name,setname]=useState("");
    const chnge=(event)=>{
        setname(event.target.value);
    };
    const[fullname,set]=useState();
    const submit=(event)=>{
        event.preventDefault();
        set(name);
    };
return(
   <>
   <form>
   <h1>Hello {fullname}</h1>
    <input type="text" placeholder="Enter your name"onChange={chnge}/>
    <br></br>
    <br></br>
    <button onClick={submit}>Submit</button>
   </form>
   </>
);
};
export default Login;