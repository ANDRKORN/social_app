import React from 'react';
import { NavLink } from 'react-router-dom';
import nav_style from './Navbar.module.css';
import FriendsBar from './FriendsBar/FriendsBar';

const Navbar = (props) => {
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
            <a href='#'> Music</a> 
        </div>
        <div>
            <a href='#'> Settings</a> 
        </div>
        <div style={{marginTop: 30 + 'px'}}>
            <NavLink to='/find_users'>Find Users</NavLink>
        </div>
        <FriendsBar users={props.users} />
    </nav>
}

export default Navbar;