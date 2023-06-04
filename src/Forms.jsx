import React,{useState} from "react";
const Forms=()=>{
    const [name,setname]=useState("");
    const [displayname,nameee]=useState();
    const chnge=(event)=>{
        setname(event.target.value);
    };
    const submitt=()=>{
        nameee(name);
    }
    return(
    <div>
        <h1>Hello {displayname}</h1>
        <input type="text" placeholder="Enter your name"onChange={chnge}value={name}/>
        <button onClick={submitt}>Click</button>
    </div>
    );
};
export default Forms;