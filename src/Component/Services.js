import React from 'react';
import "../Css/ServiceStyle.css";
import Card from "./Card.js";
import Data from "./Data.js";

const Services = () => {
    return(
        <>
        <h1> Our Services </h1>
        <div className="services">
            
            {Data.map((values) => {
                return(
                    <Card
                    title1= {values.Stitle}
                    imgSource= {values.imgsrc}
                    desc= {values.desc}
                    btnService= {values.btnService}
                    />
                )
            })}

        </div>
        </>
    )
};

export default Services;