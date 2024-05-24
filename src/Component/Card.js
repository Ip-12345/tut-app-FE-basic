import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from "../Images/homeimg.png";

const Card = (props) => {
    return(
        <>
        <div className="card">
                <h2> {props.title1} </h2>
                <img src={props.imgSource} className= "imgService" alt="service1" />
                <p> {props.desc} </p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to="/about" className="readMore" activeClassName="active"> {props.btnService} </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;