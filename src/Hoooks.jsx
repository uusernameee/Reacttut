import React, {useState} from "react";
const heading={
    color:'red'
}
const buttons={
    color:'green'
}
const divv={
    paddingTop:'70px',
    textAlign:'center'
}
const Hoooks=()=>{
   // const state=useState();
   var count=0;
    const [countt,setCount]=useState(count);
    const IncNum=()=>{
        setCount(countt+1);
    };
    return(
       <><div style={divv}>
            <h1 style={heading}>{countt}</h1>
            <button style={buttons} onClick={IncNum}>Click me!</button>
       </div>
       </>
    );
};
export default Hoooks;