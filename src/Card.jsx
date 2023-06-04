import React from "react";
function Card(props){
    return(
        <div>
        <h1>{props.title}</h1>
            <a href={props.link}><button>Watch now</button></a>
        </div>
    );
}
export default Card;