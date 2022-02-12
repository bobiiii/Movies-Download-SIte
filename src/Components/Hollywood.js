import React from "react";
import Cardd from "./Cardd"
import Slide from 'react-reveal/Slide';

import { Data } from "./Data"
const Hollywood = () => {
    function loopImgs(item, index) {
        return (<Cardd
            title={item.title}
            img={item.img}
            key={index}
            
        />)
    }

    return (
    <div className="cards">
        <h3>Hollywood</h3>
        <div className="cards-imgs">
            {Data.map(loopImgs)}
        </div>
    </div>
        
    )
}
export default Hollywood;