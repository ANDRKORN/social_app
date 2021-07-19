import React from 'react';
import { NavLink } from 'react-router-dom';
import friendsItems_style from './FriendsItems.module.css';

const FriendsItems = (props) => {
    return (
        <NavLink className={friendsItems_style.friendsItems} to={''}>
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404_1280.png" alt="" className={friendsItems_style.avatar} />
            <div>nik</div>
        </NavLink>
    );
}

export default FriendsItems;