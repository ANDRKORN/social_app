import React from 'react';
import { NavLink } from 'react-router-dom';
import nav_style from './Navbar.module.css';

const Navbar = () => {
    return <nav className={nav_style.nav}>
        <div>
            <NavLink to='/profile'>Profile</NavLink> 
        </div>
        <div>
            <NavLink to='/dialogs'>Messages</NavLink> 
        </div><div>
            <NavLink to='/news'> News</NavLink> 
        </div>
        <div>
            <a> Music</a> 
        </div>
        <div>
            <a> Settings</a> 
        </div>
    </nav>
}

export default Navbar;