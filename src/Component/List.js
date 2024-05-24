import React from 'react';
import logo from "../Images/logo.png";
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import '../Css/ListStyle.css';

const List = () => {
    return(
        <>
        <header>
        <div className= "container container-flex">
            <div className='logoContainer'>
                <img className='logoo' src={logo} alt="logo" />
            </div>
            <nav>
                <div className='list'>
                    <NavLink exact to="/" className="listItem" activeClassName="active"> Home </NavLink>
                    <NavLink to="/about" className="listItem" activeClassName="active"> About </NavLink>
                    <NavLink to="/services" className="listItem" activeClassName="active"> Services </NavLink> 
                    <NavLink to="/contact" className="listItem" activeClassName="active"> Contact </NavLink>
                    <NavLink to="/policy" className="listItem" activeClassName="active"> Policy </NavLink>

                </div>
            </nav>
            <div className='icons'>
                <SearchIcon className='icon'/>
                <PersonIcon className='icon'/>
                <PhoneIcon className='icon'/>
            </div>
        </div>
        </header>
        </>
    )
};

export default List;