import React,{useState}from "react";

const Eventss=()=>{
    const clr="yellow";
    const [bg,setbg]=useState(clr);
    const bgcolor= () => {
        let newbg="pink";
        setbg(newbg);
    };
    const [name,newname]=useState("Click me!");
    const chnge=()=>{
        let newtext="Clicked!";
        newname(newtext);
    };
return(
        <>
        <div style={{backgroundColor:bg,width:"100%",height:"100vh"}}>
<button onDoubleClick={chnge} onClick={bgcolor} style={{cursor:"pointer",padding:"12px 20px",border:"2px solid white",background:"purple",borderRadius:"5px",textTransform:"uppercase",color:"white"}}>
{name}
</button>
        </div>
        </>
    );
}
export default Eventss;