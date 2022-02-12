import React from "react";
import Cardd from "./Cardd";
import { Data } from "./Data";

const DubbedTVS=()=>{
function loopImgs(item, index){
    return(<Cardd
    title={item.title}
    img={item.img}
    key={index}

    />)
}
return(
<div className="cards">
<h3>DubbedTVS</h3>
<div className="cards-imgs">
{Data.map(loopImgs)}
</div>
</div>
)
}
export default DubbedTVS;