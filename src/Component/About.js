import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutimg from "../Images/aboutimg.png";
import Same from './Same';


const About = () => {
    return(
        <>
        <Same
        title= "KNOW MORE ABOUT US"
        imgsrc={aboutimg}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum."
        btn="Know More.."/>
        </>
    )
};

export default About;