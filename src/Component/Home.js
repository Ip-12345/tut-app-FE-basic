import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimg from "../Images/homeimg.png";
import Same from './Same';
import "../Css/HomeAbout.css";

const Home = () => {
    return(
        <>
        <Same
        title= "LEARNING MADE EASY"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum."
        imgsrc={homeimg}
        btn="Read More.."
        />
        </>
    )
};

export default Home;