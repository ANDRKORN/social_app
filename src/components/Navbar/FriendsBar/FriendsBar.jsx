import React from 'react';
import { NavLink } from 'react-router-dom';
import friendsBar_style from './FriendsBar.module.css';
import FriendsItems from './FriendsItems/FriendsItems';
const FriendsBar=(props)=>{
    return(
        <div className={friendsBar_style.friendsBar}>
            <FriendsItems/>
            <FriendsItems/>
            <FriendsItems/>
        </div>
    );
}

export default FriendsBar;