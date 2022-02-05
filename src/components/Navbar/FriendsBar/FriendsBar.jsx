import React from 'react';
import friendsBar_style from './FriendsBar.module.css';
import FriendsItems from './FriendsItems/FriendsItems';
const FriendsBar=(props)=>{
    return(
        <div className={friendsBar_style.friendsBar}>
            {props.users.map(el=><FriendsItems name={el.name} id={el.id} />)}           
        </div>
    );
}

export default FriendsBar;