import React from "react";
import { Data } from "./Data";
import Cardd from "./Cardd"

const DubbedMov=()=>{
   function loopImgs(item){
       return(<Cardd
       title={item.title}
       img={item.img}
       key={item.id}
    />)
   }
   
return(<div className="cards">
<h3>DubbedMov</h3>
<div  className="cards-imgs">
{Data.map(loopImgs)}
</div>

</div>)
}
export default DubbedMov;