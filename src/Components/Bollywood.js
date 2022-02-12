import React from "react";
import Cardd from "./Cardd";
import { Data } from "./Data";
import Slide from "react-reveal"

const Bollywood = () => {
    function loopImgs(item) {
        return <Cardd
            title={item.title}
            img={item.img}
            key={item.id}

        />
    }
    return (<div className="cards">
        <Slide left>
            <h4>Bollywood</h4>
            <div className="cards-imgs">
                {Data.map(loopImgs)}
            </div>
        </Slide>
    </div>)
}
export default Bollywood;