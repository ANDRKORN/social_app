import React from 'react';
import { NavLink } from 'react-router-dom';
import nav_style from './Navbar.module.css';
import FriendsBar from './FriendsBar/FriendsBar';
import { useEffect } from 'react';
import { usersAPI } from '../../api/api';


const Navbar = (props) => {
    useEffect(() => {
        usersAPI.getUsers(1, 3).then((data) => {props.setUsers(data.items);});
      });
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
        <div style={{marginTop: 30 + 'px'}}>
            <NavLink to='/find_users'>Find Users</NavLink>
        </div>
        <FriendsBar users={props.users} />
    </nav>
}

export default Navbar;