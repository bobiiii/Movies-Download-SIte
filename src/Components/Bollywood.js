import React from "react";
import Cardd from "./Cardd";
import { Data } from "./Data";

const Bollywood = () => {
    function loopImgs(item) {
        return <Cardd
            title={item.title}
            img={item.img}
            key={item.id}

        />
    }
    return (<div className="cards">
        <h4>Bollywood</h4>
        <div className="cards-imgs">
            {Data.map(loopImgs)}


        </div>


    </div>)
}
export default Bollywood;