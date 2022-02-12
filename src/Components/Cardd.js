import React from "react";

const Cardd =(props)=>{
    return(<div  className="img-box">
    
    <img alt="Hollywood-Movies"  src={props.img}/>
    <h4>{props.title}</h4>
    
    </div>)
}
export default Cardd;