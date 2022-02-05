import React from 'react';
import { Link } from 'react-router-dom';
import friendsItems_style from './FriendsItems.module.css';
const FriendsItems = (props) => {
    return (
        <Link className={friendsItems_style.friendsItems} to={`/profile/${props.id}`}> 
            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295404_1280.png" alt="" className={friendsItems_style.avatar} />
            <div>{props.name}</div>
        </Link>
    );
}

export default FriendsItems;