import React from "react";
/* Using prop
import Card from "./Card";
Reactdom.render(<><Card title="Vampire Diaries" link="https://www.netflix.com/in/title/70143860"/>
<Card title="Vampire Diaries" link="https://www.netflix.com/in/title/70143860"/>
<Card title="Vampire Diaries" link="https://www.netflix.com/in/title/70143860"/>
</>,
document.getElementById("root"));
*/

//Using Arrays:-Sdata.jsx
import Card from "./Card";
import Sdata from "./Sdata";
function Netflixproj(){
    return(
        <><Card title={Sdata[0].title} link={Sdata[0].link}/>
        <Card title={Sdata[1].title} link={Sdata[1].link}/>
        </>
    );
}
export default Netflixproj;

//Using ARRAY MAP:-
/*import Card from "./Card";
import Sdata from "./Sdata";
function ncard(val){
    return(
        <Card title={val.title} link={val.link}/>
    );
}
Reactdom.render(<>
{Sdata.map(ncard)}
</>,document.getElementById("root"));
*/
//NETFLIX ENDS
