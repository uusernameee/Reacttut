import React,{useState} from "react";
const Incdec=()=>{
    const [num,newnum]=useState(0);
    const inc=()=>{
        newnum(num+1);
    };
    const dec=()=>{
        if(num===0)
        alert("Value cannot be less than 0");
        else
        newnum(num-1);
    };
     return(
        <div className="main-div">
        <div className="center-div">
        <h1>{num}</h1>
            <div className="btn-div">
            <table>
                <tr>
                    <td>
                    <button onClick={inc}>Increment</button>
                    </td>
                    <td>
                    <button onClick={dec}>Decrement</button>
                    </td>
                </tr>
            </table>
            </div>
        </div>
        </div>
     );
};
export default Incdec;