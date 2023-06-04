import React,{useState} from "react";
const Handlingform=()=>{
    const [fullname,setfullname]=useState({
        fname:"",//objects
        lname:"",
        email:"",
        num:""
    });
   /* const chnge=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        setfullname((previous_value)=>{
            if(name==="fname"){
                return{
                    fname:value,
                lname:previous_value.lname,
                email:previous_value.email,
                num:previous_value.num
                };
            }
            else if(name==="lname"){
                return{
                    fname:previous_value.fname,
                    lname:value,
                    email:previous_value.email,
                num:previous_value.num
                };
            }
            else if(name==="email"){
                return{
                    fname:previous_value.fname,
                    lname:previous_value.lname,
                    email:value,
                    num:previous_value.num
                };
            }
            else if(name==="num"){
                return{
                    fname:previous_value.fname,
                    lname:previous_value.lname,
                    email:previous_value.email,
                    num:value
                };
            }
        });
    }*/

    //OR

    const chnge=(event)=>{
        const value=event.target.value;
        const name=event.target.name;
        setfullname((previous_value)=>{
            return{
                ...previous_value,
                [name]:value
            };
        });
    }

    const submit=(event)=>{
       event.preventDefault();
    }
    return(
      <>
        <div>
        <form onSubmit={submit}>
        <h1>Hello {fullname.fname} {fullname.lname}</h1>
        <p>{fullname.email}</p>
        <p>{fullname.num}</p>
            <input type="text"placeholder="Enter first name"onChange={chnge}name="fname"value={fullname.fname}></input>
            <br></br>
            <br></br>
            <input type="text"placeholder="Enter first name"onChange={chnge}name="lname"value={fullname.lname}></input>
            <br></br>
            <br></br>
            <input type="email"placeholder="Enter email"name="email"onChange={chnge}value={fullname.email}></input>
            <br></br>
            <br></br>
            <input type="number"placeholder="Enter number"name="num"onChange={chnge}value={fullname.num}></input>
            <br></br>
            <br></br>
            <button type="submit">Submit</button>
        </form>
        </div>
      </>
    );
};
export default Handlingform; 